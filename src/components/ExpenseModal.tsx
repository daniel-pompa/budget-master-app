import { Fragment } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { useBudget } from '../hooks/useBudget';
import { ExpenseForm } from './';

export const ExpenseModal = () => {
  const { state, dispatch } = useBudget();

  return (
    <>
      {/* Floating Action Button */}
      <div className='fixed right-5 bottom-5 flex items-center justify-center'>
        <button type='button' onClick={() => dispatch({ type: 'SHOW_MODAL' })}>
          <PlusCircleIcon className='w-12 h-12 md:w-16 md:h-16 text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:scale-110' />
        </button>
      </div>
      {/* Modal */}
      <Transition appear show={state.modal} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
          onClose={() => dispatch({ type: 'HIDE_MODAL' })}
        >
          {/* Overlay */}
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/60 backdrop-blur-sm' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 md:p-8 text-left align-middle shadow-2xl ring-1 ring-slate-200 transition-all'>
                  <ExpenseForm />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
