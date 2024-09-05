import { useBudget } from '../hooks/useBudget';
import { BudgetAmountDisplay } from './';

export const BudgetTracker = () => {
  const { state, totalExpenseAmount, remainingBudget } = useBudget();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='flex justify-center'>
        <img src='/chart.jpg' alt='Budget chart' />
      </div>
      <div className='flex flex-col justify-center items-center md:items-start gap-8'>
        <BudgetAmountDisplay label='Gastado' amount={totalExpenseAmount} />
        <BudgetAmountDisplay label='Disponible' amount={remainingBudget} />
        <BudgetAmountDisplay label='Presupuesto' amount={state.budget} />
        <button
          type='button'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white p-2 cursor-pointer rounded transition-colors duration-500'
        >
          Restablecer Presupuesto
        </button>
      </div>
    </div>
  );
};
