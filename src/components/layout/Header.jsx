
import NavLogin from '../auth/NavLogin';
import FormularioBusqueda from '../home/producto/FormularioBusqueda';



const Header = () => {
    return ( 
           <div className="header">
                <div className="container">
                    <div className="row  justify-content-end mb-4">
                        <div className="col-md-4">
                            <NavLogin/>                            
                        </div>
                    </div>
                    <div className="min-height-250 d-flex flex-column justify-content-md-end">
                      <div className="row mb-3">
                            <header>
                              <h1 className='headingFont text-center '> El Comercio</h1>
                            </header>              
                      </div>
                      <FormularioBusqueda/>
                    </div>
                </div>
            </div>
     )
}
 
export default Header;