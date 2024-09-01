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
    <form className='space-y-5' onSubmit={handleSubmit}>
      <div className='flex flex-col space-y-5'>
        <label
          htmlFor='budget'
          className='text-xl md:text-3xl text-blue-600 font-bold text-center'
        >
          Establecer Presupuesto
        </label>
        <input
          type='number'
          id='budget'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-blue-600'
          name='budget'
          placeholder='Introduzca el presupuesto'
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type='submit'
        value='Confirmar Presupuesto'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white p-3 cursor-pointer rounded transition-colors duration-500 disabled:opacity-40'
        disabled={isValid}
      />
    </form>
  );
};
