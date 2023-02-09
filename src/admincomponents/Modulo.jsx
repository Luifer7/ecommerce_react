
import { useParams } from "react-router-dom"
import {useAdmin} from "../adminhooks/useAdmin"


const Modulo = () => {

    const params = useParams()
    const { nombreModulo } = useAdmin(params.modulo)

    return ( 
        <>
        <div className="w-100" >
            
            <h1 className="text-center mt-3 text-capitalize" >{nombreModulo}</h1>

            
        </div>
       
        
        </>
     )
}
 
export default Modulo