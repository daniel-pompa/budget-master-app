import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useBudget } from '../hooks/useBudget';
import { BudgetAmountDisplay } from './';

export const BudgetTracker = () => {
  const { state, dispatch, totalExpenseAmount, remainingBudget } = useBudget();

  const usagePercent = ((totalExpenseAmount / state.budget) * 100).toFixed(2);
  const percentage = Number(usagePercent);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 md:p-8 rounded-xl shadow-lg ring-1 ring-slate-200'>
      <div className='flex justify-center items-center'>
        <div className='w-56 h-56 md:w-64 md:h-64'>
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: percentage < 90 ? '#2563eb' : '#dc2626',
              trailColor: '#e2e8f0',
              textColor: percentage < 90 ? '#2563eb' : '#dc2626',
              textSize: '10px',
            })}
            text={percentage >= 90 ? '¡Cuidado! 90%+' : `${percentage}% gastado`}
          />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center md:items-start gap-6'>
        <BudgetAmountDisplay label='Gastado' amount={totalExpenseAmount} />
        <BudgetAmountDisplay label='Disponible' amount={remainingBudget} />
        <BudgetAmountDisplay label='Presupuesto' amount={state.budget} />

        <button
          type='button'
          onClick={() => dispatch({ type: 'RESET_BUDGET' })}
          className='w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-300'
        >
          Restablecer
        </button>
      </div>
    </div>
  );
};
