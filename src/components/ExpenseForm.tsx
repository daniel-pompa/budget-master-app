import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { categories } from '../data/categories';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ExpenseForm = () => {
  return (
    <form className='space-y-5'>
      <legend className='text-xl md:text-3xl text-slate-700 font-bold text-center border-b-4 border-blue-600 py-2'>
        Nuevo Gasto
      </legend>
      <div className='flex flex-col gap-2'>
        <label htmlFor='title' className='text-xl md:text-2xl text-slate-700 font-bold'>
          Título
        </label>
        <input
          type='text'
          id='title'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-400'
          name='title'
          placeholder='Ejemplo: Comida'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='amount' className='text-xl md:text-2xl text-slate-700 font-bold'>
          Importe
        </label>
        <input
          type='number'
          id='amount'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-400'
          name='amount'
          placeholder='Ejemplo: 300'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label
          htmlFor='category'
          className='text-xl md:text-2xl text-slate-700 font-bold'
        >
          Categoría
        </label>
        <select
          id='category'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-slate-400'
          name='category'
        >
          <option value=''>-- Seleccione --</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='amount' className='text-xl md:text-2xl text-slate-700 font-bold'>
          Fecha
        </label>
        <DatePicker name='date' />
      </div>

      <input
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white p-2 cursor-pointer rounded transition-colors duration-500'
        value={'Añadir Gasto'}
      />
    </form>
  );
};
