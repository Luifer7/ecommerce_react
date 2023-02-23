import { Link } from "react-router-dom";

const Articulo = ({articulo}) => {
    return (
        
            <div className=" mb-3" style={{Width: '100%'}}>
                {/* <h2 className="card-header headingCard">{articulo.nombre}</h2> */}
                <img className=" " style={{height: '200px'}} src={articulo.imagen} alt={articulo.nombre} />               

                <div className="card-body" style={{height: '100px'}} >
                    <p className="card-text">{articulo.comentarios.slice(0, 55)} ...</p>
                    <div className=" border">
                        <a href="#" className="btn btn-danger btn-sm"><i class="bi bi-cart4"></i> Agregar</a>    

                        <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='btn btn-danger btn-sm'>
                            ver mas
                        </Link>                

                    </div>

                </div>
            </div>
        
    );
}
 
export default Articulo;