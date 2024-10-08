import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { categories } from '../data/categories';
import type { DraftExpense, Value } from '../types';
import { useBudget } from '../hooks/useBudget';
import { ErrorMessage } from './';

export const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    title: '',
    amount: 0,
    category: '',
    date: new Date(),
  });

  const [error, setError] = useState('');

  const [prevAmount, setPrevAmount] = useState(0);

  const { state, dispatch, remainingBudget } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.find(
        expense => expense.id === state.editingId
      );
      if (editingExpense) {
        setExpense(editingExpense);
        setPrevAmount(editingExpense.amount);
      }
    }
  }, [state.editingId, state.expenses]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const isAmountField = ['amount'].includes(name);
    setExpense(prev => ({ ...prev, [name]: isAmountField ? Number(value) : value }));
  };

  const handleDateChange = (value: Value) => {
    setExpense(prev => ({ ...prev, date: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(expense).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (expense.amount - prevAmount > remainingBudget) {
      setError('Fondos insuficientes');
      return;
    }

    // Add or edit expense
    if (state.editingId) {
      dispatch({
        type: 'UPDATE_EXPENSE',
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: 'ADD_EXPENSE', payload: { expense } });
    }

    setExpense({
      title: '',
      amount: 0,
      category: '',
      date: new Date(),
    });

    setPrevAmount(0);
  };

  return (
    <form className='space-y-5' onSubmit={handleSubmit}>
      <legend className='text-xl md:text-3xl text-slate-700 font-bold text-center border-b-4 border-blue-600 py-2'>
        {state.editingId ? 'Editar Gasto' : 'Nuevo Gasto'}
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className='flex flex-col gap-2'>
        <label htmlFor='title' className='md:text-2xl text-slate-700 font-bold'>
          Título
        </label>
        <input
          type='text'
          id='title'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-400'
          name='title'
          placeholder='Ejemplo: Comida'
          value={expense.title}
          onChange={handleChange}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='amount' className='md:text-2xl text-slate-700 font-bold'>
          Importe
        </label>
        <input
          type='number'
          id='amount'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-400'
          name='amount'
          placeholder='Ejemplo: 300'
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='category' className='md:text-2xl text-slate-700 font-bold'>
          Categoría
        </label>
        <select
          id='category'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-400'
          name='category'
          value={expense.category}
          onChange={handleChange}
        >
          <option value=''>-- Seleccione --</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='date' className='md:text-2xl text-slate-700 font-bold'>
          Fecha
        </label>
        <DatePicker
          value={expense.date}
          onChange={handleDateChange}
          minDate={new Date()}
          className='w-screen md:w-full'
        />
      </div>

      <input
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white p-2 cursor-pointer rounded transition-colors duration-500'
        value={state.editingId ? 'Guardar Cambios' : 'Registrar Gasto'}
      />
    </form>
  );
};
