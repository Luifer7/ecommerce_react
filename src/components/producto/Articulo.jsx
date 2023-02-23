import { Link } from "react-router-dom";

const Articulo = ({articulo}) => {
    return (
        
            <div className="card mb-3" style={{Width: '100%', height: '100%'}}>
                <h2 className="card-header headingCard">{articulo.nombre}</h2>
                <div className="d-flex justify-content-center">
                    <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} >
                        <img className=" " style={{height: '200px'}} src={articulo.imagen} alt={articulo.nombre} /> 
                    </Link> 
                </div>

                <div className="card-body position-relative mb-3"  >
                    <p className="card-text">{articulo.comentarios.slice(0, 55)} ...</p>
                    <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span>
                    <div className=" d-flex justify-content-end position-absolute bottom-0">
                        <a href="#" className="btn btn-danger btn-sm me-2"><i className="bi bi-cart4"></i> Agregar</a>    

                        <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='btn btn-danger btn-sm'>
                            ver mas
                        </Link>                

                    </div>

                </div>
            </div>
        
    );
}
 
export default Articulo;