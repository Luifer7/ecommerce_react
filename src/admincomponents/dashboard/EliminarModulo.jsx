
import {useLista} from '../../adminhooks/useLista'

const EliminarModulo = ({modulo}) => {

const {eliminarModulo} = useLista()

return ( 
        <>
        <i onClick={() => eliminarModulo(modulo)} className="bi bi-trash-fill h4"
         style={{position: 'absolute', bottom: '0', left: '5px'}}
        ></i>
        </>
     )
}
 
export default EliminarModulo;