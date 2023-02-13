import { CSSTransition } from 'react-transition-group'
import {useRef, useState } from 'react'
import "../../styles/animaciones.css"
import { useCrud } from '../../adminhooks/useCrud'
import { useParams } from 'react-router-dom'

const FormAdd = ({head, show, selectOptions, nombreModulo}) => {

const location = useParams()

const {create} = useCrud(location)
const nodeRef = useRef(null)
const [nuevoDato, setNuevoDato] = useState({})

const handledSubmit = (e) => {
    e.preventDefault()

    let newData = {}
    newData = nuevoDato
    console.log(nuevoDato)
    newData.date = Date.now()

    if (nombreModulo === 'usuarios') {
      newData.rol = 'cliente'
      newData.usuario_compras = 0	
      create(newData)
    }

    if (nombreModulo === 'categorias') { 
      newData.categoria_productos = 0
      create(newData)   
    }

    if (nombreModulo === 'productos') { 
      if (!newData.producto_categoria) {
          newData.producto_categoria = 'undefined' 
       // return create(newData)       
      }
     // create(newData)
    }
   
   
}   
const handledChange = e => {
    setNuevoDato({ 
        ...nuevoDato, [e.target.name] : e.target.value
    })
}

return ( 
    
    <CSSTransition  
    nodeRef={nodeRef} 
    in={show} exit={show} 
    unmountOnExit 
    timeout={600} 
    classNames="my-node">

    <div className="w-100 p-1 mt-2" ref={nodeRef} >
     
        { 
        show ?
        <form onSubmit={handledSubmit} className="py-2 px-2" >   
            { 
              head.map((item, i)=> (

              <div 
              key={i} className="px-2 mb-2" >
              
              {item.tipo === 'hidden' ? '' : <label htmlFor={item.nombre}><i>{item.nombre}</i></label> }
            
              {item.tipo === 'select' ? '' : 
              <input 
              id={item.nombre}
              type={item.tipo} 
              placeholder={item.nombre} 
              className='form-control form-control-sm'
              name={item.nombre}
              onChange={handledChange}
              required
              /> 
              }
              
              {item.tipo === 'select' ? 
                <select required className="form-select form-select-sm" aria-label=".form-select-sm example"
                onChange={handledChange} name={item.nombre}>
                  <option value="opciones">opciones</option>
                {selectOptions.map((option, i)=> (
                     <option required key={i} value={option.nombre}>{option.nombre}</option>
                ))}
                </select> 
                :''
              }
            </div>

              )) 
            }
            
            <div className='w-100 px-2 mt-3' >
            <button className='button-30'>Agregar</button>
            </div>

        </form>
        : ''
        }
    
    </div>

    </CSSTransition>
     )
}
 
export default FormAdd