
const Producto = ({articulo}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header headingCard">{articulo.nombre}</h2>
                <img className="card-img-top" src={articulo.img} alt={articulo.nombre} />

                <div className="card-body">
                    <p class="card-text">{articulo.descripcion}</p>
                    <div className="d-grid">
                        <a href="#" class="btn btn-danger">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Producto;