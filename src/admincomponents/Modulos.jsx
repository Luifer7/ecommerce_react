import { useParams } from "react-router-dom"
import {useAdmin} from "../adminhooks/useAdmin"
import { useCrud } from "../adminhooks/useCrud"
import "../styles/admin.css"
import FormAdd from "./modulos/FormAdd"
import TableModule from "./modulos/TableModule"
import Spinner from "../admincomponents/dashboard/Spinner"

const Modulos = () => {

    const params = useParams()
    const { nombreModulo, bodyDataModule, dataCategories, headDataModule , isResolve} = useAdmin(params.modulo)
    const {head, show, showForm} = useCrud(params)

    return ( 
        <>
        <div className="w-100">
            
            <h2 className="text-start mt-4 mb-4 mx-3 fw-bold text-uppercase"
            style={{textShadow: '2px 1px 1px black', letterSpacing: '1px'}}
            >{nombreModulo}</h2>

            {
                params.modulo === 'ventas' 
                ? <div className="p-2 text-center text-muted"><h5><i>Solo lectura</i></h5></div> 
                :  <div className="container mt-3 px-3">
                <button className="button-30"  
                onClick={() => showForm(nombreModulo)} >
                Fomulario {nombreModulo}</button>
                </div>
            }
           
            <FormAdd
            head={head} 
            show={show} 
            selectOptions={dataCategories}
            nombreModulo={nombreModulo}
            />
            
            {
                isResolve 
                ?  
                <div className="mt-2 w-100 p-3" >
                <TableModule
                headDataModule={headDataModule}
                bodyDataModule={bodyDataModule}
                params={params}
                />
                </div>
                : 
                <div className="mt-5 text-center"><Spinner/></div>
            }
           
                   
        </div>
        </>
     )
}
 
export default Modulos