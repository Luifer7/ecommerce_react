import { useState } from "react"

const TablaModulo = ({bodyModulo, headModulo, nombreModulo}) => {

    
 
    return ( 
        <>
        <div>
      
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    {headModulo.map((head, i)=> (
                        <th key={i}> {head}</th>
                        ))
                    }
                    <th>
                        Acciones
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        bodyModulo.map((body) => (
                           <tr
                           key={body.id}
                           >
                           <td>{body.id}</td>
                           <td>{body.nombre}</td>
                           
                            {nombreModulo === 'categorias' && <td>{body.numero_productos}</td>}
                         
                            
                            {nombreModulo === 'productos' && <td>{body.categoria}</td>}
                            {nombreModulo === 'productos' && <td>{body.stock}</td>}
                            {nombreModulo === 'productos' && <td>{body.comentarios}</td>}
                            
                            {nombreModulo === 'usuarios' && <td>{body.apellido}</td>}
                            {nombreModulo === 'usuarios' && <td>{body.correo}</td>}
                            {nombreModulo === 'usuarios' && <td>{body.compras}</td>}

                            {nombreModulo === 'ventas' && <td>{body.categoria}</td>}
                            {nombreModulo === 'ventas' && <td>{body.valor}</td>}
                            
                            <td>
                            <button>edit</button>
                            <button>Del</button>
                            </td>
                           
                           </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
        </>
     )
}
 
export default TablaModulo