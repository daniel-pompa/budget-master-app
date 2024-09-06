import { ChangeEvent } from 'react';
import { categories } from '../data/categories';
import { useBudget } from '../hooks/useBudget';

export const FilterByCategory = () => {
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_EXPENSE_CATEGORY_FILTER', payload: { id: e.target.value } });
  };

  return (
    <div className='bg-white shadow-lg rounded p-5'>
      <form>
        <div className='flex flex-col md:flex-row md:items-center gap-4'>
          <label htmlFor='category' className='text-slate-600 md:text-xl font-bold'>
            Filtrar Gastos
          </label>
          <select
            id='category'
            className='border border-transparent focus:outline-none focus:border-slate-200 focus:ring focus:ring-slate-200 p-3 rounded bg-slate-100 flex-1'
            onChange={handleChange}
          >
            <option value=''>-- Todas las categorías --</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
