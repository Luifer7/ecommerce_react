import { useLista } from "../../adminhooks/useLista";


const GuardarModulo = ({preview}) => {

const {crearModulo} = useLista()

return ( 
        <>
         <div className="container mt-4" >
                <button onClick={ () => crearModulo(preview)} 
                className="button-30 fw-bold">Guardar nuevo modulo</button>
            </div>

        </>
     )
}
 
export default GuardarModulo;