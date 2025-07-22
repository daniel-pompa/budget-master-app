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
        <div className='flex items-center justify-center h-40 bg-white rounded-xl shadow-md ring-1 ring-slate-100'>
          <p className='text-slate-600 text-xl md:text-2xl font-bold text-center px-4'>
            Aún no se han registrado gastos
          </p>
        </div>
      ) : (
        <div className='space-y-4 mt-6 bg-white p-4 md:p-6 rounded-2xl shadow-lg ring-1 ring-slate-200'>
          <p className='text-slate-600 text-xl md:text-2xl font-bold text-center sm:text-left'>
            Listado de gastos
          </p>
          <div className='space-y-3'>
            {filteredExpenses.map((expense, index) => (
              <div key={expense.id}>
                <ExpenseItem expense={expense} />
                {index !== filteredExpenses.length - 1 && (
                  <hr className='my-2 border-slate-200' />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
