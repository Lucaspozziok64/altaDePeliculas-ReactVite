const CardsPeliculas = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-header bg-danger-subtle">
            <h5 className="card-tittle text-center text-md-start">Star Wars🎥</h5>
          </div>
          <p className="card-text">
            <strong>Descripcion:</strong>This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer bg-secondary text-center text-md-start">
          <p>Genero:</p>
        </div>
      </div>
    </div>
  );
};

export default CardsPeliculas;
