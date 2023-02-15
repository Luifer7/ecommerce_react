import { Fragment } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import '../styles/index.css';



const Home  = () => {
    return ( 
        <Fragment>
            <div className="jumbotron container__Header">
                <div className="container">
                    <Header/>
                </div>
            </div>
           <div className="container main-height">
               <h1 className="text-dark">Home</h1>
           </div>
           
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home