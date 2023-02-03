
import { NavLink } from "react-router-dom"

const AdminHeader = () => {

let activeStyle = {
  transition: '.6s ease all', 
  textDecoration: "none", 
  color: '#0275d8'
}

    return ( 
        <>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" 
          style={{width: '210px', height: '100vh'}}>

          <div  className="text-center">
          <NavLink to={'/admin/dashboard'} style={{textDecoration: 'none'}} >
          <span className="fs-4 fw-bold text-primary text-uppercase"
          style={{textShadow: '1px 2px 1px black', letterSpacing: '1px'}}
          >Dashboard
          </span>
          </NavLink>
          </div>
          <hr/>

          <ul className="d-flex gap-3 mt-2 flex-column mb-auto" style={{listStyle: 'none'}}>

              <li>
                <NavLink 
                className="nav-link active fw-bold"
                to={'/admin/categorias'}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                >
                <i className="bi bi-tags m-1"></i>
                <strong>Categorias</strong>
                </NavLink>
              </li>

              <li>
                <NavLink 
                className="nav-link active fw-bold"
                to={'/admin/productos'}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                >
                <i className="bi bi-basket3 m-1"></i>
                <strong>Productos</strong>
                </NavLink>
              </li>

              <li>
          
                <NavLink 
                className="nav-link active fw-bold"
                to={'/admin/usuarios'}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                >
                <i className="bi bi-person-circle m-1"></i>
                <strong>Usuarios</strong>
                </NavLink>

              </li>

              <li>
              <NavLink 
              className="nav-link active fw-bold"
              to={'/admin/ventas'}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined}
              >
              <i className="bi bi-cash m-1"></i>
              <strong>Ventas</strong>
              </NavLink>
              </li>
        
          </ul>
          <hr/>
          
          <div className="dropdown"  style={{curso: 'pointer'}}>
          <a  className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
              <strong>usuario</strong>
          </a>
          <ul className="dropdown-menu text-medium shadow" aria-labelledby="dropdownUser2">
              
              <li className="mb-2" >
              <NavLink 
                className="nav-link active"
                to={'/admin/configuracion'}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                >
                <i className="bi bi-gear-fill m-1"></i>
                <strong>Configuracion</strong>
                </NavLink>
              </li>
              
              <li className="mb-2" >
              <NavLink 
                className="nav-link active"
                to={'/admin/perfil'}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                >
                <i className="bi bi-person-circle m-1"></i>
                <strong>Perfil</strong>
                </NavLink>
              </li>
              
              <li><hr className="dropdown-divider"/></li>
              <li><span className="dropdown-item fw-bold text-danger">Cerrar cesion</span></li>
          </ul>
          </div>
  
        </div>
        </>
     )
}
 
export default AdminHeader