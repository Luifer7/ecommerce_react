
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { DatosContext } from "../routes/Admin"
import Documentacion from "./dashboard/Documentacion"

const Dashboard = () => {

const {miLista, resuelta} = useContext(DatosContext)

return ( 
        
        <div className="px-3 mt-3" >
            
            <div className="mt-3 w-100 text-center" >
                       <strong className="opacity-0" >espacio invisible</strong>
            </div>  
         
            {/**PRESENTACION CARTA */}
            <div className="col-12 rounded  mt-3 p-3 d-flex justify-content-between flex-wrap" 
            style={{minHeight: '150px', wordBreak: 'break-all', 
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            }} >
                
                <div className="text-dark" >
                        <h2 className="m-0" >Bienvenid@</h2>
                        <h5 className="m-0" >a tu panel de administración.</h5>
                        <p className="mt-2" >
                            <i>En este panel encontraras documentacion  clara <br />
                                de como utilizar el sistema
                                para que <br /> gestiones tu negocio facilmente.
                            </i>
                        </p>
                </div>
                
                <div>
                    <img  width="130" height="130" className="rounded-circle me-2" style={{objectFit: 'cover'}}
                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_23-2149195760.jpg?w=740&t=st=1675450976~exp=1675451576~hmac=813da9756decaf9b5f4587f571e66e6c5d2e329d8395d37f2fa39193df4248e1" alt="" />
                </div>
            
            </div>

            {/**CREAR NUEVO MODULO */}
            <div className="w-100 mt-2 rounded p-3" >
                <NavLink
                to={'/admin/createmodulo'} className="text-decoration-none"
                >
                <button className="button-30"
                >Crear modulo
                </button>
                </NavLink>
            </div>
            
            {/** Documentacion en desarrollo */}
            <div className="mt-3 px-2" >
            <Documentacion
            miLista={miLista}
            resuelta={resuelta}
            />
            </div>
            

        </div>
        
     )
}
 
export default Dashboard