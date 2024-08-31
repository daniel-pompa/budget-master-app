import { Form } from './components/Form';
function App() {
  return (
    <>
      <div className='bg-blue-600 py-8 max-h-72'>
        <h1 className='text-2xl md:text-4xl text-center text-white font-black uppercase'>
          Control de Gastos
        </h1>
      </div>
      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded mt-10 p-10'>
        <Form />
      </div>
    </>
  );
}

export default App;
