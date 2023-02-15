
import { Fragment } from 'react';
import NavLogin from '../auth/NavLogin';
import FormularioBusqueda from '../proyecto/FormularioBusqueda';



const Header = () => {
    return ( 
        <Fragment>
          <div className="row mb-4">
              <div className="d-flex justify-content-end col-md-4 order-md-last">
                  <NavLogin/>                            
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