import { Fragment, useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/home/producto/SeccionesProducto";
import { useAdmin } from '../adminhooks/useAdmin';
import '../styles/index.css';
import Spinner from '../admincomponents/dashboard/Spinner';


const Home  = () => {


    // trae los productos del custom hook 
    const {bodyDataModule, dataCategories, isResolve} = useAdmin('productos');
    

    
    return ( 
        <Fragment>
            <Header/>
         
           <div className="px-4">
              
           {isResolve 
           ?  <SeccionesProducto
           bodyDataModule={bodyDataModule}
           dataCategories={dataCategories}
            />
            : <div className='text-center p-5 mb-3 mt-3' ><Spinner/></div>
            }
               
           </div>
           
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home