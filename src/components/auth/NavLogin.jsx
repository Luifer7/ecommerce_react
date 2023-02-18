import { Link } from "react-router-dom";


const NavLogin = () => {
    return ( 
      <nav className="navbar navbar-expand pb-3">
        <div className="collapse navbar-collapse" >
          <div className="navbar-nav">
            <a className="nav-link fw-bold fst-italic" href="#">Sign in </a>
            <Link to={'/Login'}  className="nav-link fw-bold fst-italic">
              Log in
            </Link>            
            <a className="nav-link fw-bold" href="#"><i className="bi bi-cart4">Carrito</i></a>
          </div>
        </div>
      </nav>
     )
}
 
export default NavLogin;