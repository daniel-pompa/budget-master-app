import { useReducer, createContext, Dispatch, ReactNode, useMemo } from 'react';
import {
  BudgetActions,
  budgetReducer,
  BudgetState,
  initialState,
} from '../reducers/budget-reducer';

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenseAmount: number;
  remainingBudget: number;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  /** Computes the sum of all expense amounts from the state */
  const totalExpenseAmount = useMemo(
    () => state.expenses.reduce((sum, expense) => sum + expense.amount, 0),
    [state.expenses]
  );

  /** Calculates the remaining budget after accounting for expenses */
  const remainingBudget = state.budget - totalExpenseAmount;

  return (
    <BudgetContext.Provider
      value={{ state, dispatch, totalExpenseAmount, remainingBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
