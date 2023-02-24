import { CSSTransition } from 'react-transition-group'
import {useRef, useState } from 'react'
import "../../styles/animaciones.css"
import { useCrud } from '../../adminhooks/useCrud'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const FormAdd = ({head, show, selectOptions, nombreModulo, closeForm}) => {

const location = useParams()
const {create} = useCrud(location)

const nodeRef = useRef(null)
const [nuevoDato, setNuevoDato] = useState({})

const handledSubmit = (e) => {
    e.preventDefault()
    closeForm()
    let newData = {}
    newData = nuevoDato
    newData.date = Date.now()

    if (nombreModulo === 'categorias') { 
      newData.categoria_productos = 0
      validImg(newData)
    }


    if (nombreModulo === 'productos') { 

      if (!newData.producto_categoria) {
          newData.producto_categoria = 'undefined' 
          return validImg(newData)
      }

       validImg(newData)
       
    }
   
}  

const handledChange = e => {
    setNuevoDato({ 
        ...nuevoDato, [e.target.name] : e.target.value
    })
}

const validImg = (itemObject) => {
  if (itemObject.imagen.match(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)) {
    return create(itemObject)
  } else {
  Swal.fire({
    icon: 'info', 
    text: 'el formato de URL de imagen deser de la siguiente forma: https://ejemplo.jpg o  https://ejemplo.jpg.png',
    showDenyButton: true, denyButtonText: 'intentar de nuevo', confirmButtonText: 'continuar y editar luego'
  }).then((r)=> {
    if (r.isConfirmed) {
      return create(itemObject)
    }
    if (r.isDenied) {
      return 
    }
  })
}
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
              
              {item.tipo === 'hidden' ? '' : <label htmlFor={item.nombre}>
                <strong>{item.nombre}</strong>
                {item.requerido ? <i style={{fontSize: '12px'}} className='mx-2' >requerido*</i> : ''}
              </label> }
            
              {item.tipo === 'select' 
              ? 
               <select required className="form-select form-select-sm" aria-label=".form-select-sm example"
               onChange={handledChange} name={item.nombre}>
                 <option value="opciones">opciones</option>
               {selectOptions.map((option, i)=> (
                    <option required key={i} value={option.nombre}>{option.nombre}</option>
               ))}
               </select> 
              
              :  
              <div>
               
              <input 
              id={item.nombre}
              readOnly={!item.editable}
              type={item.tipo} 
              placeholder={item.nombre} 
              className='form-control form-control-sm'
              name={item.nombre}
              onChange={handledChange}
              required
              />
              </div>
              
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