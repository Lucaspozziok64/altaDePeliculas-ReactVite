import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <Form className="text-white formulario">
      <Form.Group className="mb-3" controlId="form.ControlInput1">
        <Form.Label className="mb-0">Nombre</Form.Label>
        <Form.Control type="text" placeholder="ej Star Wars" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.ControlTextarea1">
        <Form.Label className="mb-0">Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.ControlInput1">
        <Form.Label className="mb-0">Genero</Form.Label>
        <Form.Control type="text" placeholder="ej Ficcion" />
      </Form.Group>
      <div className="d-flex justify-content-end mx-2">
        <Button variant="success" className="rounded-3">Agregar</Button>
      </div>
    </Form>
  );
};

export default Formulario;
