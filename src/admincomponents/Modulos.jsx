import { useParams } from "react-router-dom"
import {useAdmin} from "../adminhooks/useAdmin"
import "../styles/admin.css"
import FormAdd from "./modulos/FormAdd"
import TableModule from "./modulos/TableModule"
import Spinner from "../admincomponents/dashboard/Spinner"
import { useState } from "react"
import Filtros from "./modulos/Filtros"

const Modulos = () => {

    const params = useParams()
    const { 
    nombreModulo, 
    bodyDataModule, 
    dataCategories, 
    headDataModule, 
    isResolve,
    head,
    show,
    showForm,
    closeForm,
    } = useAdmin(params.modulo)

    const [query, setQuery] = useState('')
    const [param, setParam] = useState('')

    const handleQueryNombre = (e) => {
        setQuery(e.target.value)
        setParam('nombre')
    }
    const handleQueryCategoria = (e) => {
        setQuery(e.target.value)
        setParam('producto_categoria')
        console.log(query)
    }

    //FILTROS temporales (Luego hacer componentes)
    let filterData = !query ? bodyDataModule 
    : bodyDataModule.filter(field => field[`${param}`].toLowerCase().includes(query.toLowerCase()))
    
    return ( 
        <>
        <div className="w-100">
            
            <div className="mt-3 w-100 text-center" >
                <strong className="opacity-0" >espacio invisible</strong>
            </div>  
            
            <h2 className="text-start mt-4 mb-4 mx-3 fw-bold text-uppercase"
            style={{textShadow: '2px 1px 1px black', letterSpacing: '1px'}}
            >{nombreModulo}</h2>

          
                <div className="mt-3 px-3">
                <button className="button-30"  
                onClick={() => showForm(nombreModulo)} >
                Fomulario {nombreModulo}</button>
                </div>
            
           
            <FormAdd
            head={head} 
            show={show} 
            closeForm={closeForm}
            selectOptions={dataCategories}
            nombreModulo={nombreModulo}
            />

            {/** search component */}
            
            { params.modulo != 'categorias' ?
            <Filtros 
            handleQueryNombre={handleQueryNombre} 
            handleQueryCategoria={handleQueryCategoria}
            />
            : ''
            }


            {
            isResolve 
            ?  
            <div className="mt-1 w-100 p-3" >
            <TableModule
            headDataModule={headDataModule}
            bodyDataModule={filterData}
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