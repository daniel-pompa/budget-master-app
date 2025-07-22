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
    () =>
      categories.find(c => c.id === expense.category) ?? { id: '', name: '', icon: '' },
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
        className='rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
      >
        <div className='w-full bg-white py-8 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer rounded-lg'>
          <div className='flex justify-center md:justify-start flex-shrink-0'>
            <img
              src={`${categoryInfo.icon}.svg`}
              alt={`${categoryInfo.name} icon`}
              className='w-20 h-20 object-contain'
              loading='lazy'
              draggable={false}
            />
          </div>
          <div className='flex-1 space-y-1 text-center md:text-left'>
            <p className='text-slate-600 text-md uppercase font-semibold tracking-wide'>
              {categoryInfo.name}
            </p>
            <p className='text-gray-800 text-lg font-medium truncate'>{expense.title}</p>
            <p className='text-slate-600 text-xs'>
              {formatDate(expense.date!.toString())}
            </p>
          </div>
          <div className='mt-4 md:mt-0 flex justify-center md:justify-end flex-shrink-0'>
            <ExpenseAmount amount={expense.amount} />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
