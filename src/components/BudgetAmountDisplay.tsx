import { formatCurrency } from '../utils';

type BudgetAmountDisplayProps = {
  label: string;
  amount: number;
};

export const BudgetAmountDisplay = ({ label, amount }: BudgetAmountDisplayProps) => {
  return (
    <p className='text-xl md:text-2xl text-blue-600 font-bold'>
      {label}: <span className='text-slate-600 font-black'>{formatCurrency(amount)}</span>
    </p>
  );
};
