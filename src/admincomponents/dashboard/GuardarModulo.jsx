import { useContext } from "react"
import { DatosContext } from "../../routes/Admin"

const GuardarModulo = ({preview, clearPreview}) => {

const {crearModulo} = useContext(DatosContext)

return ( 
        <>
         <div className="container mt-4" >
                <button onClick={ () => {crearModulo(preview), clearPreview()}} 
                className="button-30 fw-bold">Guardar nuevo modulo</button>
            </div>

        </>
     )
}
 
export default GuardarModulo;