export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: Value;
};

// Type for an expense without the 'id' property, used for creating new expenses.
export type DraftExpense = Omit<Expense, 'id'>;

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
  id: string;
  name: string;
  icon: string;
};
