import { Fragment, useEffect } from "react";
import Producto from "./Producto";

const SeccionesProducto = ({productos, categorias}) => {
    
    return ( 
        <Fragment>
            {categorias.map(categoria => (
                <div className="row mt-5">
                    <h2 className=" headingCategoria">{categoria}</h2>
                    <div className="row mt-3">
                    {productos.map(articulo => ( articulo.producto_categoria === categoria
                    ?<Producto
                            key={articulo.id}
                            articulo={articulo}
                        />
                    : null))}
                    </div> 
                </div>
            ))}
            

        </Fragment>
     );
}
 
export default SeccionesProducto;