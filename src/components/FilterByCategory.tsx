import { ChangeEvent, useEffect, useState, useMemo } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { categories } from '../data/categories';
import { useBudget } from '../hooks/useBudget';

const LOCAL_STORAGE_KEY = 'selected-category-filter';

export const FilterByCategory = () => {
  const { state, dispatch } = useBudget();
  const [selectedId, setSelectedId] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');

  // Cargar filtro desde localStorage al montar
  useEffect(() => {
    const savedId = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedId) {
      const savedCategory = categories.find(cat => cat.id === savedId);
      if (savedCategory) {
        setSelectedId(savedId);
        setSelectedLabel(savedCategory.name);
        dispatch({ type: 'SET_EXPENSE_CATEGORY_FILTER', payload: { id: savedId } });
      }
    }
  }, [dispatch]);

  /** Change the selected category filter and save it to localStorage */
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    const selectedCategory = categories.find(cat => cat.id === id);
    setSelectedId(id);
    setSelectedLabel(selectedCategory?.name || '');
    dispatch({ type: 'SET_EXPENSE_CATEGORY_FILTER', payload: { id } });

    if (id) {
      localStorage.setItem(LOCAL_STORAGE_KEY, id);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  // Clear the filter
  const clearFilter = () => {
    setSelectedId('');
    setSelectedLabel('');
    dispatch({ type: 'SET_EXPENSE_CATEGORY_FILTER', payload: { id: '' } });
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  // Calculate the amount of filtered expenses
  const filteredCount = useMemo(() => {
    if (!state.currentCategory) return 0;
    return state.expenses.filter(e => e.category === state.currentCategory).length;
  }, [state.expenses, state.currentCategory]);

  return (
    <div className='bg-white shadow-lg ring-1 ring-slate-200 rounded-2xl p-6 space-y-4'>
      <form>
        <div className='flex flex-col md:flex-row md:items-center gap-4'>
          <label
            htmlFor='category'
            className='flex items-center gap-2 text-slate-700 text-lg md:text-xl font-semibold'
          >
            Filtrar
          </label>
          <select
            id='category'
            value={selectedId}
            onChange={handleChange}
            className='w-full bg-slate-100 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-slate-700 rounded-lg px-4 py-2 transition-all'
          >
            <option value=''>Todas las categorías</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {selectedLabel && (
        <div className='flex items-center justify-between flex-wrap gap-2'>
          <div className='text-sm text-slate-600'>
            Mostrando gastos de:{' '}
            <span className='inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full'>
              {selectedLabel} ({filteredCount})
            </span>
          </div>

          <button
            type='button'
            onClick={clearFilter}
            className='flex items-center gap-1 text-sm font-bold text-red-500 hover:text-red-600 transition-colors'
          >
            <TrashIcon className='w-4 h-4' />
          </button>
        </div>
      )}
    </div>
  );
};
