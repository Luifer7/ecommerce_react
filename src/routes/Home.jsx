import { Fragment, useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/producto/SeccionesProducto";
import { useAdmin } from '../adminhooks/useAdmin';
import '../styles/index.css';


const Home  = () => {

    // state del componente
    const [productos, guardaProductos] = useState([]);

    // trae los productos del custom hook 
    const {bodyDataModule} = useAdmin('productos');
    
    useEffect(() =>{
    if(!bodyDataModule) return <h1>Error en los productos</h1>;
        // en caso de existir hace disponibles los productos
        guardaProductos(bodyDataModule);
        console.log(bodyDataModule)

    }, [bodyDataModule]);
    return ( 
        <Fragment>
            <Header/>
           
           <div className="container">
                <SeccionesProducto
                    productos={productos}
                />
           </div>
           
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home