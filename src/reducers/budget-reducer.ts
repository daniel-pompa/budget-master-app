import { v4 as uuidv4 } from 'uuid';
import { DraftExpense, Expense } from '../types';

export type BudgetActions =
  | { type: 'ADD_BUDGET'; payload: { budget: number } }
  | { type: 'SHOW_MODAL' }
  | { type: 'HIDE_MODAL' }
  | { type: 'ADD_EXPENSE'; payload: { expense: DraftExpense } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
};

export const initialState: BudgetState = {
  budget: 3000,
  modal: false,
  expenses: [],
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuidv4(),
  };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
): BudgetState => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return { ...state, budget: action.payload.budget };
    case 'SHOW_MODAL':
      return { ...state, modal: true };
    case 'HIDE_MODAL':
      return { ...state, modal: false };
    case 'ADD_EXPENSE': {
      const newExpense = createExpense(action.payload.expense);
      return { ...state, expenses: [...state.expenses, newExpense], modal: false };
    }
    default:
      return state;
  }
};
