import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/routes.css';

const Home  = () => {
    return ( 
        <Fragment>
            <div className="jumbotron container__Header">
                <div className="container">
                    <Header/>
                </div>
            </div>
           <div className="vistas">
               <h1 className="text-dark">Home</h1>

           </div>
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home