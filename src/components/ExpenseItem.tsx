import { useMemo } from 'react';
import { Expense } from '../types';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { categories } from '../data/categories';
import { formatDate } from '../utils';
import { useBudget } from '../hooks/useBudget';
import { ExpenseAmount } from './ExpenseAmount';

type ExpenseItemProps = {
  expense: Expense;
};

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const { dispatch } = useBudget();

  const categoryInfo = useMemo(
    () => categories.filter(c => c.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() =>
          dispatch({ type: 'GET_EXPENSE_BY_ID', payload: { id: expense.id } })
        }
      >
        Actualizar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: { id: expense.id } })}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={1}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        className='rounded'
      >
        <div className='w-full bg-white py-10 px-5 flex gap-5 items-center cursor-pointer'>
          <div>
            <img
              src={`${categoryInfo.icon}.svg`}
              alt={`${categoryInfo.name} icon`}
              className='w-24'
            />
          </div>
          <div className='flex-1 space-y-2'>
            <p className='text-slate-500 text-md uppercase font-bold'>
              {categoryInfo.name}
            </p>
            <p>{expense.title}</p>
            <p className='text-slate-500 text-sm'>
              {formatDate(expense.date!.toString())}
            </p>
          </div>
          <ExpenseAmount amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
