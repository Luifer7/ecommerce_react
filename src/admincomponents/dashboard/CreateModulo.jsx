
import { useState } from "react"
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import opciones from './datosmodulos.js'
import GuardarModulo from "./GuardarModulo.jsx"


const CreateModulo = () => {

const [preview, setPreview] = useState()
const animatedComponents = makeAnimated()

const handleSelect = (event) => {
    setPreview(event)
}

return ( 
        <>
        <div className="container p-3" >

        <h1 className="text-center" >Crear modulo</h1>

        <div className="w-100 mt-4" >
    
        <p className="text-dark fw-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nam 
                veniam exercitationem vitae eaque id eligendi consequatur sapiente beatae
                 odit animi deserunt eos rerum, temporibus modi ipsam? Et impedit excepturi 
                 aspernatur natus atque nostrum sequi culpa magni illum. Sunt assumenda totam
                  dolores delectus accusamus voluptatem asperiores sed eius labore cum natus.</p>

        <h2 className="py-2 mb-2 text-center text-dark fw-bold">Elige un tipo de modulo</h2>

        {/**Select react select */}
        <div className="form-group mb-2 mt-2 text-dark" >
           
            <Select
            
            components={animatedComponents}
            
            options={opciones}
            onChange = { handleSelect }
            />
            
        </div>

        {/** Preview */}
        {preview && 
        <div className="preview py-2 mt-3" >
            <h3 className="mt-2 px-2" >Preview 
            <strong className="text-info text-decoration-underline mx-2">{preview.value}</strong> </h3>
                
             
                <table className="table" >
                <thead>
                <tr>
                {preview?.head.map((head, i)=> (
                <th key={i} > {head}</th>))}
                </tr>
                </thead>
                <tbody>
                <tr>
                {preview?.body.map((head, i)=> (
                <td key={i} > {head}</td>))}
                <td className="d-flex gap-3" >
                    <i className="bi bi-eye"></i>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash" ></i>
                </td>
                </tr>
                </tbody>
                </table>
              
              <GuardarModulo
              preview={preview}
              />

        </div>
        }

        </div>
    

        </div>
        </> 
    )
}
 
export default CreateModulo;