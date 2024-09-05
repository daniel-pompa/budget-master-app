import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useBudget } from '../hooks/useBudget';
import { BudgetAmountDisplay } from './';

export const BudgetTracker = () => {
  const { state, totalExpenseAmount, remainingBudget } = useBudget();

  /** Calculates the percentage of the budget that has been spent */
  const usagePercent = ((totalExpenseAmount / state.budget) * 100).toFixed(2);

  const percentage = Number(usagePercent);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='flex justify-center'>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage < 100 ? '#2563eb' : '#dc2626',
            trailColor: '#e2e8f0',
            textSize: 8,
            textColor: percentage < 100 ? '#2563eb' : '#dc2626',
          })}
          text={`${percentage}% Gastado`}
        />
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
