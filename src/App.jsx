import { useState } from "react";
import "./App.css";
import CardsPeliculas from "./components/CardsPeliculas";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [peliculas, setPeliculas] = useState([]);

  const agregarPeliculas = (nuevoNombre, nuevoDescripcion, nuevoGenero) => {
    const nuevo = {
      id: Date.now(),
      nombre: nuevoNombre,
      descripcion: nuevoDescripcion,
      genero: nuevoGenero,
    };
    setPeliculas([...peliculas, nuevo]);
  };

  return (
    <>
      <header>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white">Home</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 disabled"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success disabled">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main className="container my-2">
        <h1 className="text-white">Dar de Alta</h1>
        <section className="p-1 contenedorForm">
          <Formulario agregarPeliculas={agregarPeliculas}></Formulario>
        </section>
        <div className="container my-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {peliculas.map((pelicula) => (
            <CardsPeliculas key={pelicula.id} pelicula={pelicula} />
          ))}
        </div>
      </main>
      <footer className="bg-dark text-white text-center">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">
          Desarrolado por{" "}
          <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a>👨‍💻
        </p>
      </footer>
    </>
  );
}

export default App;
