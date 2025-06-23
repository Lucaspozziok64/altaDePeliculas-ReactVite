import './App.css'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <main className='container my-2'>
        <h1 className='text-white'>Peliculas</h1>
        <section className='p-1 contenedorForm'>
          <Formulario></Formulario>
        </section>
      </main>
    </>
  )
}

export default App
