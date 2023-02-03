import { useAdmin } from "../adminhooks/useAdmin";
import AdminSidebar from "../admincomponents/AdminSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/admin.css" 
import { useRef } from "react";

const Admin = () => {

const location = useLocation()
const { data } = useAdmin()

const nodeRef = useRef(null)

return ( 

        
        <div className="vistas-admin d-flex justify-content-start w-100">

        <AdminSidebar/>

        <SwitchTransition>
        <CSSTransition
         key={location.pathname}
         nodeRef={nodeRef}
         timeout={300}
         classNames="page"
        >
        <div className="bg-ligth w-100 text-white oulet" ref={nodeRef}>
        <Outlet></Outlet>
        </div>

        </CSSTransition>
        </SwitchTransition>
        </div>

  

     )
}
 
export default Admin