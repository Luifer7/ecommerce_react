import { Fragment, useEffect } from "react";
import Producto from "./Producto";

const SeccionesProducto = ({productos}) => {
    // partiendo de categorias como objeto
    const categorias = {
        moda: [
            {id: 1,  mostrar: true, categoria: 'Man & Woman Fashion', nombre: 'Sneakers', imagen: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', precio: 50, comentarios: "lorem ipsu"},
            {id: 2,  mostrar: true, categoria: 'Man & Woman Fashion', nombre: 'lentes', imagen: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', precio: 50, comentarios: "lorem ipsu"},
            {id: 3,  mostrar: true, categoria: 'Man & Woman Fashion', nombre: 'joyas', imagen: `https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
            
        ],
        tecnologia: [
            {id: 1,  mostrar: true, categoria: 'tecnologia', nombre: 'controller', imagen: `https://images.pexels.com/photos/1666759/pexels-photo-1666759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
            {id: 2,  mostrar: true, categoria: 'tecnologia', nombre: 'controller', imagen: `https://images.pexels.com/photos/1666759/pexels-photo-1666759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
            {id: 3,  mostrar: true, categoria: 'tecnologia', nombre: 'controller', imagen: `https://images.pexels.com/photos/1666759/pexels-photo-1666759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
        ],
        deportes: [
            {id: 1,  mostrar: true, categoria: 'deportes', nombre: 'Boxing gloves', imagen: `https://images.pexels.com/photos/5580067/pexels-photo-5580067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
            {id: 2,  mostrar: true, categoria: 'deportes', nombre: 'tennis racket', imagen: `https://images.pexels.com/photos/13464779/pexels-photo-13464779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
            {id: 3,  mostrar: true, categoria: 'deportes', nombre: 'gym', imagen: `https://images.pexels.com/photos/14673247/pexels-photo-14673247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`, precio: 50, comentarios: "lorem ipsu"},
          
        ]       


    }

    // se extrae de categoria
    const {moda, tecnologia, deportes} = categorias;

    return ( 
        <Fragment>
            <h2 className="mt-5 headingCategoria">Desde la base de datos</h2>
            <div className="row mt-3">
                {productos.map(articulo => ( articulo
                ? <Producto
                        key={articulo.id}
                        articulo={articulo}
                    />
                : null))}
            </div>

            <h2 className="mt-5 headingCategoria">Man & Woman Fashion</h2>
            <div className="row mt-3">
                {moda.map(articulo => ( articulo.mostrar 
                ? <Producto
                        key={articulo.id}
                        articulo={articulo}
                    />
                : null))}
            </div>

            <h2 className="mt-5 headingCategoria">Tecnología</h2>
            <div className="row mt-3">
                {tecnologia.map(articulo => ( articulo.mostrar 
                ? <Producto
                        key={articulo.id}
                        articulo={articulo}
                    />
                : null))}
            </div>

            <h2 className="mt-5 headingCategoria">Deportes</h2>
            <div className="row mt-3">
                {deportes.map(articulo => ( articulo.mostrar 
                ? <Producto
                        key={articulo.id}
                        articulo={articulo}
                    />
                : null))}
            </div>

        </Fragment>
     );
}
 
export default SeccionesProducto;