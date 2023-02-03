
import { useAdmin } from "../adminhooks/useAdmin";
import AdminHeader from "../admincomponents/AdminHeader";
import { Outlet } from "react-router-dom";
 
const Admin = () => {

const { data } = useAdmin()

    return ( 

       <>
        
        <div className="vistas-admin d-flex justify-content-start w-100">
        <AdminHeader/>

     
        <div className="border bg-dark w-100 text-white" >
            <Outlet></Outlet>
        </div>
          
        </div>
       </> 

     )
}
 
export default Admin