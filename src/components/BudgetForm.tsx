import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';

export const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => isNaN(budget) || budget <= 0, [budget]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BUDGET', payload: { budget } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full max-w-lg mx-auto bg-white p-4 md:p-8 rounded-xl shadow-lg ring-1 ring-slate-200 space-y-6'
    >
      <div className='space-y-4'>
        <h2 className='text-center text-2xl md:text-3xl text-slate-600 font-semibold'>
          Definir presupuesto
        </h2>
        <input
          type='number'
          id='budget'
          name='budget'
          placeholder='Ingresa tu presupuesto'
          min={0}
          value={budget}
          onChange={handleChange}
          className='w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400 transition-all'
        />
      </div>

      <button
        type='submit'
        disabled={isValid}
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Confirmar
      </button>
    </form>
  );
};
