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
                    <div className="row">
                        <div className="col-md-8">
                            <Header/>
                        </div>
                        <div className="col-md-2">
                            <Login/>                            
                        </div>
                    </div>
                    <FormularioBusqueda/>
                </div>
            </div>
           <div className="vistas">
               <h1 className="text-dark">Home</h1>
               <h1 className="text-dark">Home</h1>
               <h1 className="text-dark">Home</h1>
               <h1 className="text-dark">Home</h1>
               <h1 className="text-dark">Home</h1>
           </div>
           <Footer/>
        
        </Fragment>
     )
}
 
export default Home