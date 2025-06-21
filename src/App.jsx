import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import FormulariosTareas from './components/FormularioTareas'

function App() {
  return (
    <>
      <main className='container'>
        <h1 className='text-center my-4'>Lista de Tareas</h1>
        <FormulariosTareas></FormulariosTareas>
      </main>
      <footer className='bg-dark text-light text-center py-3' >
        <p>Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
