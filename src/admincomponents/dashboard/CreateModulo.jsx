
import { useRef, useState } from "react"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {opcionesModulos} from '../datosmodulos'
import GuardarModulo from "./GuardarModulo.jsx"
import { CSSTransition } from 'react-transition-group'


const CreateModulo = () => {


const [preview, setPreview] = useState()
const [show, setShow] = useState(false)
const nodeRef = useRef(null)

const animatedComponents = makeAnimated()

const handleSelect = (event) => {
    console.log(event)
    setPreview(event)
    setShow(true)
}

const clearPreview = () => {
    setPreview()
}

return ( 
        <>
        <div className="container p-3" >

        <h2 className="text-center fw-bold" 
         style={{textShadow: '1px 1px 1px black', letterSpacing: '1px'}}
        >Crear modulo</h2>

        <div className="w-100 mt-1" >
    
        <p className="text-dark fw-bold m-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nam 
                veniam exercitationem vitae eaque id eligendi consequatur sapiente beatae
                 odit animi deserunt eos rerum, temporibus modi ipsam? Et impedit excepturi 
                 aspernatur natus atque nostrum sequi culpa magni illum. Sunt assumenda totam
                  dolores delectus accusamus voluptatem asperiores sed eius labore cum natus.</p>


        <CSSTransition  
        nodeRef={nodeRef} 
        in={show} exit={show} 
        unmountOnExit 
        timeout={400} 
        classNames="my-node">

        <div className="" ref={nodeRef} >
        {/** Preview */}
        {preview && show &&
        <div className="preview py-2 mt-2" >
            <h3 className="px-2" >Preview 
            <strong className="text-info text-decoration-underline mx-2">{preview.value}</strong> </h3>
                             
                <table className="table" >
                <thead>
                <tr>
                {preview?.head.map((head, i)=> (
                <th key={i} > {head.nombre}</th>))}
                </tr>
                </thead>
                <tbody>
                <tr>
                {preview?.body.map((body, i)=> (
                <td key={i} > {body}</td>))}
                <td>
                    <i>detalles</i>
                </td>
                </tr>
                </tbody>
                </table>
              
              <GuardarModulo
              preview={preview}
              clearPreview={clearPreview}
              />

        </div>
        }
        </div>
        </CSSTransition>


       

         {/**Select react select */}
         <div className="form-group mb-2 mt-3 text-dark" >

         <strong className="text-center text-dark fw-bold h4">
            Selecciona un tipo de modulo
        </strong>
           
           <Select
           className="mt-1"
           components={animatedComponents}
           options={opcionesModulos}
           onChange = { handleSelect }
           />
           
       </div>

        </div>
    

        </div>
        </> 
    )
}
 
export default CreateModulo;