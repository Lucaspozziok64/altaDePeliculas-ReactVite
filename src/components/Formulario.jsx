import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Formulario = ({ agregarPeliculas }) => {
  const [nombre, setnombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Aqui debo capturar los dartos del form");

    if (!nombre || !descripcion || !genero) {
      alert("Por favor rellene todos los campos");
    } else {
      alert("Formulario Enviado");
      //Aqui limpiamos los campos del formulario
      setDescripcion("");
      setnombre("");
      setGenero("");

      agregarPeliculas(nombre, descripcion, genero);
      console.log(agregarPeliculas);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-white formulario p-3">
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label className="mb-0">Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="ej Star Wars"
          onChange={(e) => setnombre(e.target.value)}
          value={nombre}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <Form.Label className="mb-0">Descripcion:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGenero">
        <Form.Label className="mb-0">Elegi el genero de tu pelicula:</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => setGenero(e.target.value)}
          value={genero}>
          <option>Generos</option>
          <option value="Drama">Drama</option>
          <option value="Infantil">Infantil</option>
          <option value="Accion">Accion</option>
          <option value="Ficcion">Ficcion</option>
        </Form.Select>
      </Form.Group>
      <div className="d-flex justify-content-end mx-2">
        <Button variant="success" type="submit" className="rounded-3">
          Agregar
        </Button>
      </div>
    </Form>
  );
};

export default Formulario;
