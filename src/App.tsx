import { useMemo } from 'react';
import { useBudget } from './hooks/useBudget';
import { BudgetForm, BudgetTracker, ExpenseList, ExpenseModal } from './components';

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <div className='bg-blue-600 py-8 max-h-72'>
        <h1 className='text-2xl md:text-4xl text-center text-white font-black uppercase'>
          Control de Gastos
        </h1>
      </div>
      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded mt-10 p-10'>
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <div className='max-w-3xl mx-auto py-10'>
          <ExpenseList />
          <ExpenseModal />
        </div>
      )}
    </>
  );
}

export default App;
