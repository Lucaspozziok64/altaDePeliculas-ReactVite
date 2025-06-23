import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  const [nombre, setnombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Aqui debo capturar los dartos del form')
  }

  return (
    <Form onSubmit={handleSubmit} className="text-white formulario">
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label className="mb-0">Nombre</Form.Label>
        <Form.Control type="text" placeholder="ej Star Wars" onChange={(e)=> setnombre(e.target.value)} value={nombre} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <Form.Label className="mb-0">Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e)=> setDescripcion(e.target.value)} value={descripcion} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGenero">
        <Form.Label className="mb-0">Genero</Form.Label>
        <Form.Control type="text" placeholder="ej Ficcion" onChange={(e)=> setGenero(e.target.value)} value={genero}/>
      </Form.Group>
      <div className="d-flex justify-content-end mx-2">
        <Button variant="success" type="submit" className="rounded-3">Agregar</Button>
      </div>
    </Form>
  );
};

export default Formulario;
