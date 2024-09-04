import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import { ExpenseItem } from './';

export const ExpenseList = () => {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);

  return (
    <div>
      {isEmpty ? (
        <p className='text-slate-600 text-xl md:text-2xl font-bold'>
          Aún no se han registrado gastos
        </p>
      ) : (
        <>
          <p className='text-slate-600 text-xl md:text-2xl font-bold'>
            Listado de Gastos
          </p>
          {state.expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};
