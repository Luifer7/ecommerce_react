import { useContext } from "react";
import { DatosContext } from "../../routes/Admin";


const EliminarModulo = ({modulo}) => {

const {eliminarModulo} = useContext(DatosContext)

return ( 
        <>
        <i onClick={() => eliminarModulo(modulo)} className="bi bi-trash-fill h4"
         style={{position: 'absolute', bottom: '0', left: '5px'}}
        ></i>
        </>
     )
}
 
export default EliminarModulo;