import { formatCurrency } from '../utils';

type ExpenseAmountProps = {
  amount: number;
};

export const ExpenseAmount = ({ amount }: ExpenseAmountProps = { amount: 0 }) => {
  return <p className='text-slate-600 font-black'>{formatCurrency(amount)}</p>;
};
