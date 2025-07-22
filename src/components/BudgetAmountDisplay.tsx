import { formatCurrency } from '../utils';

type BudgetAmountDisplayProps = {
  label: string;
  amount: number;
};

export const BudgetAmountDisplay = ({ label, amount }: BudgetAmountDisplayProps) => {
  return (
    <p className='text-xl md:text-2xl text-slate-600 font-semibold flex items-center gap-2'>
      <span className='text-slate-600'>{label}:</span>
      <span className='text-slate-800 font-extrabold tracking-tight'>
        {formatCurrency(amount)}
      </span>
    </p>
  );
};
