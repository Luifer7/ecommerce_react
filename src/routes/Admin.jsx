
import { useAdmin } from "../adminhooks/useAdmin";
import AdminSidebar from "../admincomponents/AdminSidebar";
import { Outlet } from "react-router-dom";
 
const Admin = () => {

const { data } = useAdmin()

    return ( 

       <>
        
        <div className="vistas-admin d-flex justify-content-start w-100">

        <AdminSidebar/>

        <div className="bg-ligth border w-100 text-white" >
            <Outlet></Outlet>
        </div>
          
        </div>
       </> 

     )
}
 
export default Admin