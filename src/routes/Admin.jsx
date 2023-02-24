import AdminSidebar from "../admincomponents/AdminSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../styles/admin.css" 
import React, { useRef } from "react";
import { useLista } from "../adminhooks/useLista";
import TemporaryDrawer from "../admincomponents/DrawerSidebar";

export const DatosContext = React.createContext()

const Admin = () => {

const {miLista, resuelta, crearModulo, eliminarModulo} = useLista()

const location = useLocation()
const nodeRef = useRef(null)

return ( 

        <DatosContext.Provider value={{miLista, resuelta, crearModulo, eliminarModulo}} >    

        <div className="vistas-admin w-100">
  
       <div className='drawer text-center p-1' >
       <TemporaryDrawer/>
       </div>

        <SwitchTransition>
        <CSSTransition
         key={location.pathname}
         nodeRef={nodeRef}
         timeout={300}
         classNames="page">

        <div className="bg-ligth w-100 text-white oulet" ref={nodeRef}>
        <Outlet></Outlet>
        </div>

        </CSSTransition>
        </SwitchTransition>

        </div>

        </DatosContext.Provider>

        )
        
}
 
export default Admin