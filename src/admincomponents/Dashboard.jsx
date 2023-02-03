
import { useEffect, useState } from "react"
import Cards from "./dashboard/Cards"

const Dashboard = () => {

const [ informacion, setinformacion ] = useState([])

useEffect(()=> {

const datos = [
    { id: 1, nombre: 'Categorias', descripcion: 'Añade categorias para identificar tus productos.'}, 
    { id: 2, nombre: 'Productos', descripcion: 'Añade productos y personalizalos.'},
    { id: 3, nombre: 'Usuarios', descripcion: 'Vsualiza datos sobre tus clientes'}, 
    { id: 4, nombre: 'Ventas', descripcion: 'Gestiona tu hisorial de ventas.'},
]

setinformacion(datos)

}, [])

return ( 
        <>
        <div className="p-2 mt-2" >

            <div className="px-2">
                <input type="text" 
                className="form-control form-control-sm" 
                placeholder="Buscar"/>
            </div>
            
            <div className="w-100 mt-3 row p-1 m-auto" >
                {
                    informacion.map((info) => (
                        <Cards 
                        info={info}
                        key={info.id}
                        />
                    ))
                }
               
            </div>

        </div>
        </>
     )
}
 
export default Dashboard