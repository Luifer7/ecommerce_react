import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../../firebase";
import { ItemContext } from "../Item";
import SwitchEdit from "./SwitchEdit";

const EditarGaleria = ({galery, location}) => {

    const { checkedGalery, handleChekedGalery } = useContext(ItemContext)
    const [isEditing, setIsEditing] = useState(false)

    const [ editValues, setEditValues] = useState({
        uno: galery[0], dos: galery[1], tres: galery[2]
    })

    const handleChange = (e) => {
        setEditValues({ 
            ...editValues, [e.target.name] : e.target.value
        })
        setIsEditing(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let photos = Object.values(editValues)
        if (isEditing) {
            const editRef = doc(db, location.modulo, location.id)
            await updateDoc(editRef, { 
                galeria: photos
            })
            await handleChekedGalery()
        }
        handleChekedGalery()
    }


    return ( 
        <div>
        
        <div className="px-3" >
        <SwitchEdit
        location={location} 
        checked={checkedGalery} 
        handleCheked={handleChekedGalery}/>
        </div>

        <form className="p-3 rounded d-flex flex-column gap-2 banner-card" 
        onSubmit={handleSubmit}
        >
            {   galery ?
                galery.map((photo, i)=> (
                    <div className="w-100 d-flex gap-1 justify-content-between" key={i} >

                        <div className="col-4">
                            <img 
                            src={photo} alt="no disponible" 
                            width="120" height="120" className="rounded" style={{transition: '.9s ease all'}} />
                        </div>
                        
                        <div className="d-flex align-items-center col-7" >
                            <input 
                            type="text" 
                            className={`w-100 ${checkedGalery ? 'edit-input' : 'edit-inputs_'}`}  
                            name={Object.keys(editValues)[`${i}`]}
                            value={editValues[Object.keys(editValues)[`${i}`]] ? editValues[Object.keys(editValues)[`${i}`]] : photo } 
                            readOnly={checkedGalery}
                            onChange={handleChange}
                            
                            />
                        </div>

                    </div>
                ))
                : ''
            }
            {
               !checkedGalery ?  <div className="w-100 p-0  mt-2 px-2">
                  <button type="submit" className="button-30 w-100" >editar</button>
                  </div> : ''
            }
           
        </form>

        </div>
     )
}
 
export default EditarGaleria;