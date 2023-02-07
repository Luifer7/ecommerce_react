import { Fragment } from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import FormularioBusqueda from '../components/FormularioBusqueda'
import Footer from '../components/Footer'
import '../styles/routes.css'

const Home  = () => {
    return ( 
        <Fragment>
            <div className="jumbotron container__Header">
                <div className="container">
                    <div className="row mb-4">
                        <div className="d-flex justify-content-end col-md-4 order-md-last">
                            <Login/>                            
                        </div>
                        <div className="col-md-8 pt-md-3">
                            <Header/>
                        </div>                       
                    </div>
                    <FormularioBusqueda/>
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