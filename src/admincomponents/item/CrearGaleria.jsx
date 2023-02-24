import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

const CrearGaleria = ({location}) => {

    const [ show, setShow] = useState(false)
    const [galery, setGalery] = useState({})
    
    const handleShow = () => {
        setShow(!show)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let photos = Object.values(galery)
        const editRef = doc(db, location.modulo, location.id)
        await updateDoc(editRef, { 
            galeria: photos
        })
        setShow(!show)
    }

    const handleChange = (e) => {
        setGalery({ 
            ...galery, [e.target.name] : e.target.value
        })

    }

    return ( 
        <div>
            <button onClick={handleShow} className="button-30">Crear galeria</button>
            {
                show &&  
                <form onSubmit={handleSubmit} className="mt-3 p-4 d-flex gap-3 flex-column" >
            
                <input 
                name="uno"
                className="form-control form-control-sm"
                placeholder="url"
                onChange={handleChange}
                />
    
                <input 
                name="dos"
                placeholder="url"
                className="form-control form-control-sm"
                onChange={handleChange}
                />
    
                <input 
                name="tres"
                placeholder="url"
                className="form-control form-control-sm"
                onChange={handleChange}
                />
    
                <button type="submit" className="button-30">Guardar</button>
                </form>
            }
          

        </div>
     )
}
 
export default CrearGaleria;