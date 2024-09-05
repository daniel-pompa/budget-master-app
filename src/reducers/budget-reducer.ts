import { v4 as uuidv4 } from 'uuid';
import { DraftExpense, Expense } from '../types';

export type BudgetActions =
  | { type: 'ADD_BUDGET'; payload: { budget: number } }
  | { type: 'SHOW_MODAL' }
  | { type: 'HIDE_MODAL' }
  | { type: 'ADD_EXPENSE'; payload: { expense: DraftExpense } }
  | { type: 'DELETE_EXPENSE'; payload: { id: Expense['id'] } }
  | { type: 'GET_EXPENSE_BY_ID'; payload: { id: Expense['id'] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense['id'];
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
  editingId: '',
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
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
      };
    case 'GET_EXPENSE_BY_ID':
      return { ...state, editingId: action.payload.id, modal: true };
    default:
      return state;
  }
};
