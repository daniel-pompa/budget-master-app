import { v4 as uuidv4 } from 'uuid';
import { DraftExpense, Expense } from '../types';
import { Category } from '../types/index';

export type BudgetActions =
  | { type: 'ADD_BUDGET'; payload: { budget: number } }
  | { type: 'SHOW_MODAL' }
  | { type: 'HIDE_MODAL' }
  | { type: 'ADD_EXPENSE'; payload: { expense: DraftExpense } }
  | { type: 'DELETE_EXPENSE'; payload: { id: Expense['id'] } }
  | { type: 'GET_EXPENSE_BY_ID'; payload: { id: Expense['id'] } }
  | { type: 'UPDATE_EXPENSE'; payload: { expense: Expense } }
  | { type: 'RESET_BUDGET' }
  | { type: 'SET_EXPENSE_CATEGORY_FILTER'; payload: { id: Category['id'] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  editingId: Expense['id'];
  currentCategory: Category['id'];
};

const getBudgetFromLocalStorage = (): number => {
  const storedBudget = localStorage.getItem('budget');
  return storedBudget ? Number(storedBudget) : 0;
};

const getExpensesFromLocalStorage = (): Expense[] => {
  const storedExpenses = localStorage.getItem('expenses');
  return storedExpenses ? JSON.parse(storedExpenses) : [];
};

export const saveToLocalStorage = (budget: number, expenses: Expense[]) => {
  localStorage.setItem('budget', budget.toString());
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

export const initialState: BudgetState = {
  budget: getBudgetFromLocalStorage(),
  modal: false,
  expenses: getExpensesFromLocalStorage(),
  editingId: '',
  currentCategory: '',
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
      return {
        ...state,
        budget: action.payload.budget,
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        modal: true,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        modal: false,
        editingId: '',
      };
    case 'ADD_EXPENSE': {
      const newExpense = createExpense(action.payload.expense);
      return {
        ...state,
        expenses: [...state.expenses, newExpense],
        modal: false,
      };
    }
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload.id),
      };
    case 'GET_EXPENSE_BY_ID':
      return {
        ...state,
        editingId: action.payload.id,
        modal: true,
      };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.expense.id ? action.payload.expense : expense
        ),
        modal: false,
        editingId: '',
      };
    case 'RESET_BUDGET':
      return {
        ...state,
        budget: 0,
        expenses: [],
      };
    case 'SET_EXPENSE_CATEGORY_FILTER':
      return {
        ...state,
        currentCategory: action.payload.id,
      };
    default:
      return state;
  }
};
