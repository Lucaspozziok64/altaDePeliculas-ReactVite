const CardsPeliculas = ({ pelicula }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-header bg-danger-subtle">
            <h5 className="card-tittle text-center text-md-start">{pelicula.nombre}🎥</h5>
          </div>
          <p className="card-text">
            <strong>Descripcion: </strong>{pelicula.descripcion}
          </p>
        </div>
        <div className="card-footer bg-secondary text-center text-md-start">
          <p><strong>Genero: </strong>{pelicula.genero}</p>
        </div>
      </div>
    </div>
  );
};

export default CardsPeliculas;
