import { Fragment } from "react";
import Cards from '../dashboard/Cards'
import Spinner from "./Spinner";

const Documentacion = ({miLista, resuelta}) => {

return ( 
        <Fragment>
        <h2 className="text-center text-dark fw-bold mb-4" >Documentacion</h2>

        <div className="w-100 mt-3 row m-auto" >
                {
                    miLista.map((info, i) => (
                        <Cards 
                        info={info}
                        key={i}
                        />
                    ))
                }
               
            </div>

        <div className="px-1 mt-2" >
            {
            resuelta 
            ? miLista.map((lista, i)=> (
                <div className="my-4" 
                 key={i}
                 >
                    <h2 className="text-capitalize" >{lista.value} <i className={`${lista.icon} h5 m-0`} ></i></h2>
                    <p className="text-dark">
                    <i>{lista.descripcion}</i>
                    </p>
                    <table className="table table-striped table-hover">
                <thead>
                    <tr className="text-center" >
                    {lista.head.map((head, i)=> (
                        <th key={i} > {head.nombre}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center" >
                    {lista.body.map((body, i)=> (
                        <td style={{maxWidth: '100px', fontSize: '15px'}} key={i}> {body}</td>
                        ))
                    }
                    <td className="d-flex gap-3 justify-content-center align-items-center" >
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash" ></i>
                    </td>
                   
                    </tr>
                </tbody>
            </table>
                 </div>
            ))
            :  <div className="w-100 text-center"><Spinner/></div> 
            }
            {   miLista.length === 0 && resuelta ?
                <h5 className="text-dark fw-bold text-center" >
                <i>Tu lista de modulos esta vacia, dale clik en crear modulo y comienza tu lista.</i>
              </h5> : ''
            }
        </div>
       
        <div className="p-5 mt-2" >
            {/**Espacio de referencia */}
        </div>
        
        </Fragment>
     )
}
 
export default Documentacion