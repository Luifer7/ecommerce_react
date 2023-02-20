import { Fragment } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/producto/SeccionesProducto";

import '../styles/index.css';



const Home  = () => {
    return ( 
        <Fragment>
            <Header/>
           
           <div className="container">
                <SeccionesProducto/>
           </div>
           
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home