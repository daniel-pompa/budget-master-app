import { useMemo } from 'react';
import { Expense } from '../types';
import { categories } from '../data/categories';
import { formatDate } from '../utils';
import { ExpenseAmount } from './ExpenseAmount';

type ExpenseItemProps = {
  expense: Expense;
};

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const categoryInfo = useMemo(
    () => categories.filter(c => c.id === expense.category)[0],
    [expense]
  );

  return (
    <div className='w-full bg-white shadow-lg py-10 px-5 rounded my-5 flex gap-5 items-center'>
      <div>
        <img src={`${categoryInfo.icon}.svg`} alt={`${categoryInfo.name} icon`} className='w-24' />
      </div>

      <div className='flex-1 space-y-2'>
        <p className='text-slate-500 text-md uppercase font-bold'>{categoryInfo.name}</p>
        <p>{expense.title}</p>
        <p className='text-slate-500 text-sm'>{formatDate(expense.date!.toString())}</p>
      </div>

      <ExpenseAmount amount={expense.amount} />
    </div>
  );
};
