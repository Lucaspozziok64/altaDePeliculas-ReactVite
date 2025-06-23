import { useState } from "react";
import "./App.css";
import CardsPeliculas from "./components/CardsPeliculas";
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [peliculas, setPeliculas] = useState([]);

  const agregarPeliculas = (nuevoNombre, nuevoDescripcion, nuevoGenero) => {
    const nuevo = { id: Date.now(), nombre: nuevoNombre, descripcion: nuevoDescripcion, genero: nuevoGenero}
    setPeliculas([...peliculas, nuevo]);
  }

  return (
    <>
      <main className="container my-2">
        <h1 className="text-white">Peliculas</h1>
        <section className="p-1 contenedorForm">
          <Formulario agregarPeliculas={agregarPeliculas}></Formulario>
        </section>
        <div className="container my-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {peliculas.map((pelicula)=> 
          <CardsPeliculas 
            key={pelicula.id}
            pelicula={pelicula} 
          />)}
        </div>
      </main>
    </>
  );
}

export default App;
