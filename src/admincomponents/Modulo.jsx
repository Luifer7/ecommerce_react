
import { useParams } from "react-router-dom"
import {useAdmin} from "../adminhooks/useAdmin"
import TablaModulo from "./modulo/TablaModulo"

const Modulo = () => {

    const params = useParams()
    const { nombreModulo, bodyModulo, headModulo } = useAdmin(params.modulo)
    
    return ( 
        <>
        <div className="w-100" >
            
            <h1 className="text-center mt-3 text-capitalize" >{nombreModulo}</h1>

            <div className="mt-2 p-2" >
                <button className="btn btn-sm btn-success fw-bold" >Agregar {nombreModulo}</button>
            </div>

            <div  className="w-100 p-2 mt-2" >
            <TablaModulo 
            bodyModulo={bodyModulo} 
            headModulo={headModulo}
            nombreModulo={nombreModulo}/>
            </div>
            
        </div>
       
        
        </>
     )
}
 
export default Modulo