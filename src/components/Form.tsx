export const Form = () => {
  return (
    <form className='space-y-5'>
      <div className='flex flex-col space-y-5'>
        <label
          htmlFor='budget'
          className='text-xl md:text-3xl text-blue-600 font-bold text-center'
        >
          Establecer Presupuesto
        </label>
        <input
          type='number'
          id='budget'
          className='w-full border border-slate-200 p-3 rounded focus:outline-none focus:border-blue-600'
          name='budget'
          placeholder='Introduzca el presupuesto'
        />
      </div>
      <input
        type='submit'
        value='Confirmar Presupuesto'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white p-3 cursor-pointer rounded transition-colors duration-500'
      />
    </form>
  );
};
