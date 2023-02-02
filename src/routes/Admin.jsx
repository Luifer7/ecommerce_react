import { useAdmin } from "../adminhooks/useAdmin";


const Admin = () => {

const { data } = useAdmin()

    return ( 

       <>
        <div className="vistas-admin">
            <h1>HOLA COMO ESTAS este es el dato</h1>
        </div>
       </> 

     )
}
 
export default Admin;