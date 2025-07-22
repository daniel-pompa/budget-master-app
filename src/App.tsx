import { useEffect, useMemo } from 'react';
import { useBudget } from './hooks/useBudget';
import {
  BudgetForm,
  BudgetTracker,
  ExpenseList,
  ExpenseModal,
  FilterByCategory,
} from './components';

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString());
    localStorage.setItem('expenses', JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      {/* Header */}
      <header className='bg-blue-900 py-12'>
        <h1 className='text-center text-white text-3xl md:text-4xl font-bold tracking-wide uppercase'>
          Control de Gastos
        </h1>
      </header>

      {/* Main Container */}
      <main className='w-full max-w-2xl mx-auto px-1 sm:px-6 -mt-2 pb-10 relative z-10'>
        <section>{isValidBudget ? <BudgetTracker /> : <BudgetForm />}</section>

        {isValidBudget && (
          <div className='mt-6 space-y-6'>
            <section>
              <FilterByCategory />
            </section>
            <section>
              <ExpenseList />
            </section>
            <ExpenseModal />
          </div>
        )}
      </main>

      {/* Background Accent */}
      <div className='absolute inset-0 top-0 h-44 bg-blue-900 -z-10' />
    </>
  );
}

export default App;
