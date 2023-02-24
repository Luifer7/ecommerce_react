import { Fragment, useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/home/producto/SeccionesProducto";
import { useAdmin } from '../adminhooks/useAdmin';
import '../styles/index.css';


const Home  = () => {

    // state del componente
    const [productos, guardaProductos] = useState([]);
    const [ categorias, guardarCategorias] = useState([]);

    // trae los productos del custom hook 
    const {bodyDataModule} = useAdmin('productos');
    
    useEffect(() =>{
    if(!bodyDataModule) return <h1>Error en los productos</h1>;
        // en caso de existir hace disponibles los productos        
        try {
            const productos = bodyDataModule;
            let categorias = []

            // agrega las categorias
            for(let i= 0; i < productos.length; i++ ){                
                if(!categorias.includes(productos[i].producto_categoria)){
                    categorias.push(productos[i].producto_categoria)
                }
            }
            // pasa los productos y las categorias
            guardarCategorias(categorias);
            guardaProductos(productos);

        } catch (error) {
            console.log('hubo un error con los productos' + error);
        }

    }, [bodyDataModule]);
    
    return ( 
        <Fragment>
            <Header/>
           
           <div className="px-4">
                <SeccionesProducto
                    productos={productos}
                    categorias={categorias}
                />
           </div>
           
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home