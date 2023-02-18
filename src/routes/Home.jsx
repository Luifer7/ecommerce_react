import { Fragment } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import '../styles/index.css';



const Home  = () => {
    return ( 
        <Fragment>
            <Header/>
           
           <div className="container main-height">
               <h1 className="text-dark">Home</h1>
           </div>
           
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home