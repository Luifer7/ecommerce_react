
import { Link } from "react-router-dom"

const AdminHeader = () => {


    return ( 
        <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-primary" 
        style={{width: '280px', height: '100vh'}}>

        <a  className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use></use></svg>
        <span className="fs-4 fw-bold text-white">Dashboard</span>
        </a>
        <hr/>

        <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <Link className="nav-link active" to={'/admin/categorias'}>Categorias</Link>
        </li>
        
        <li>
        <Link className="nav-link active" to={'/admin/productos'}>Productos</Link>
        </li>
       
        </ul>
        <hr/>
        
        <div className="dropdown">
        <a  className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" 
                id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
        </div>
 
      </div>

        </>
     )
}
 
export default AdminHeader