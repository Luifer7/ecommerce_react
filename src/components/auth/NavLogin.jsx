import { Link } from "react-router-dom";


const NavLogin = () => {
    return ( 
      <nav className="navbar navbar-expand pb-3">
        <div className="collapse navbar-collapse" >
          <div className="navbar-nav">
            <a className="nav-link text-white fst-italic" href="#">Sign in </a>
            {/* <a className="nav-link text-white fst-italic" href="#">Log in </a> */}
            <Link to={'/Login'}  className="nav-link text-white fst-italic">
              Log in
            </Link>            
            <a className="nav-link text-white" href="#"><i className="bi bi-cart4">Carrito</i></a>
          </div>
        </div>
      </nav>
     )
}
 
export default NavLogin;