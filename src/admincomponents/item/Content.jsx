import { useContext, useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import  { ItemContext } from "../Item";

const Content = () => {

    const {handleCheked, item, location, checked} = useContext(ItemContext)
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
            Object.keys(newItem).forEach((element) => {
             updateDoc(editRef, { [`${element}`]: newItem[element] })
           })
           await handleCheked()
        }
      
      }

    const handleEdit = e => {
        setEditValue({ 
           ...editValues, [e.target.name] : e.target.value
       })
      } 

    return ( 
        <form onSubmit={handleSubmit} className="rounded py-3 banner-card">
         {  
               item.map((data, i) => (
                  <div key={i} className="px-1 mt-2 text-dark fw-bold py-1" >
                  
                  {Object.keys(data).map((name, i)=> (
                     <div key={i} 
                     className="d-flex py-1 flex-wrap align-items-center justify-content-between px-4" >
                           
                        {
                           name === 'id' || name === 'date' || name === 'galeria' ? '' 
                           : <div className="d-flex fw-bold" style={{minWidth: '180px'}} >
                              {
                                 !checked ?
                                 <i className={`bi bi-${i}-circle text-white mx-1`} ></i>
                                 : ''
                              }
                              <strong className="text-white" style={{letterSpacing: '1px'}} >{name}</strong>
                              </div> 
                        }
                    
                        {   name === 'id' || name === 'date' || name === 'galeria' ? null 
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
                                 !checked ?
                                    <i className={`bi bi-${i}-circle-fill text-dark mx-1`} ></i>
                                    : ''
                              }
                             </div>
                          
                        }
                    
                     </div>
                  ))}

                  </div>
               ))  
         }
            {
               !checked ? <div className="w-100 p-0 mb-2 mt-2 px-4">
                  <button type="submit" className="button-30 w-100" >editar</button>
                  </div> : ''
            }
           

        </form>
     )
}
 
export default Content;