import { PropsWithChildren } from 'react';

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-red-100 text-center text-sm md:text-lg text-red-800 px-4 py-3 rounded'>
      {children}
    </div>
  );
};
