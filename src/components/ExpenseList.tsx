import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import { ExpenseItem } from './';

export const ExpenseList = () => {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(expense => expense.category === state.currentCategory)
    : state.expenses;

  const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses]);

  return (
    <>
      {isEmpty ? (
        <p className='text-slate-600 text-xl md:text-2xl font-bold mt-10'>
          Aún no se han registrado gastos
        </p>
      ) : (
        <div className='space-y-5'>
          <p className='text-slate-600 text-xl md:text-2xl font-bold my-10'>
            Listado de Gastos
          </p>
          {filteredExpenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </div>
      )}
    </>
  );
};
