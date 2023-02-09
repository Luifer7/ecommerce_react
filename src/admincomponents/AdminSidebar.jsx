import { NavLink } from "react-router-dom"
import Spinner from "./dashboard/Spinner"

const AdminSidebar = ({miLista, resuelta}) => {

let activeStyle = {
  transition: '.6s ease all', 
  textDecoration: "none", 
  color: '#0275d8'
}

return ( 
        <>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" 
          style={{width: '210px', height: '100vh'}}>

          { /**DASHBOARD ADMIN */ }
          <div  className="text-center">
          <NavLink to={'/admin/dashboard'} style={{textDecoration: 'none'}} >
          <span className="fs-4 fw-bold text-primary text-uppercase"
          style={{textShadow: '1px 2px 1px black', letterSpacing: '1px'}}
          >Dashboard
          </span>
          </NavLink>
          </div>
          <hr/>
            
            { /**LINKS RUTAS ADMIN */ }
          <div className="d-flex gap-3 mt-2 flex-column mb-auto py-2 px-1" 
              style={{listStyle: 'none', maxHeight: '350px', overflow: 'auto'}}>
            
              {/**Agregamos las rutas segun los modulos dinamicamente */}
              {
               resuelta ?
               miLista.map((r, i) => (
                <NavLink
                key={i}
                className="nav-link active fw-bold"
                to={`/admin/${r.value}`}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
                >
                   <i className={`${r.icon} m-1`}></i>
                   <strong>{r.value}</strong>
                </NavLink>
               ))
               : <div className="w-100 p-2 text-center"><Spinner/></div>
              }
            
          </div>
          <hr/>
          
          { /**LINKS RUTA CONFIGURACION, PERFIL Y CERRAR */ }
          <div className="dropdown"  style={{curso: 'pointer'}}>
          <a  className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fhtU5sGYJUNXDTvAwle4LAyKAacC_SdsQOVj-LzxGA&s"
               alt="" width="32" height="32" className="rounded-circle me-2"/>
              <strong>usuario</strong>
          </a>
          <ul className="dropdown-menu text-medium shadow" aria-labelledby="dropdownUser2">

          <li>
              <NavLink 
              className="nav-link active fw-bold"
              to={'/admin/politicas'}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined}
              >
              <i className="bi bi-file-earmark-text m-1"></i>
              <strong>Politicas</strong>
              </NavLink>
              </li>
              
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
 
export default AdminSidebar