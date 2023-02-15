import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Content = ({item, handleCheked, location, checked}) => {
    
    const [editValues, setEditValue] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
  
        let currentItem = item[0]
        let keysEdit = Object.keys(editValues)
        
        if (keysEdit) {
            keysEdit.forEach((element)=> {
              Object.keys(currentItem).forEach((el) => {
                 if (el === element) {
                     currentItem[el] = editValues[element]
                     return currentItem
                 }
              })
             
           })
  
           const {id, ...newItem} = currentItem
           const editRef = doc(db, location.modulo, location.id)
           location.item = newItem.nombre
           Object.keys(newItem).forEach((element) => {
               updateDoc(editRef, { [`${element}`]: newItem[element] })
           })
        }
      
      }

    const handleEdit = e => {
        setEditValue({ 
           ...editValues, [e.target.name] : e.target.value
       })
      } 

    return ( 
        <form onSubmit={handleSubmit} className="rounded py-1" 
        style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        >
         
         {
               item.map((data, i) => (
                  <div key={i} className="px-1 mt-2 text-dark fw-bold py-1" >
                  
                  {Object.keys(data).map((name, i)=> (
                     <div key={i} 
                     className="d-flex gap-4 align-items-center justify-content-between px-4" >
                           
                        {
                           name === 'id' || name === 'date' ? '' 
                           : <div className="d-flex fw-bold" style={{minWidth: '180px'}} >
                              <i className="bi bi-bookmark-fill text-white"></i>
                              <strong className="text-white" style={{letterSpacing: '1px'}} >{name}</strong>
                              </div> 
                        }
                    
                        {   name === 'id' || name === 'date' ? '' 
                        :   <div className="d-flex" >
                              <input onChange={handleEdit}
                              autoComplete="false"
                              name={name} 
                              value={editValues[`${name}`] ? editValues[`${name}`] : data[`${name}`] } 
                              readOnly={checked ? true : false} 
                              type="text" 
                              className={`px-1 ${checked ? 'edit-input' : 'edit-inputs_'}`} 
                              style={{minWidth: '150px'}}/>
                              {
                                 !checked ? <i className="bi bi-pencil-fill" ></i> : ''
                              }
                             </div>
                          
                        }
                    
                     </div>
                  ))}

                  </div>
               ))  
         }
            {
               !checked ?  <div className="w-100 p-0 mb-4 mt-2 px-4">
                  <button type="submit" className="button-30 w-100" >editar</button>
                  </div> : ''
            }
            <div className="px-5 w-100" >
               {/** NOTHING */}
            </div>

        </form>
     )
}
 
export default Content;