
import { Fragment } from 'react';
import Login from './Login';
import FormularioBusqueda from './FormularioBusqueda';

import '../styles/app.css'


const Header = () => {
    return ( 
        <Fragment>
          <div className="row mb-4">
              <div className="d-flex justify-content-end col-md-4 order-md-last">
                  <Login/>                            
              </div>
              <div className="col-md-8 pt-md-3">
                <header>
                  <h1 className='text-center text-md-end'> El Comercio</h1>
                </header>
              </div>                       
          </div>
          <FormularioBusqueda/>

        </Fragment>
      

     )
}
 
export default Header;