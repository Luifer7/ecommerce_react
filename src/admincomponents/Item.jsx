import { useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { useCrud } from "../adminhooks/useCrud"
import ItemBanner from "./item/ItemBanner"
import SwitchEdit from "./item/SwitchEdit"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"


const Item = () => {
   
    const location = useParams()
    const {item, checked, handleCheked} = useCrud(location)
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
        <div className="px-3 py-2" >

           {/* Back */}
          <div className="d-flex mt-2 align-items-center justify-content-between" >

            <Link className="text-info d-flex align-items-center" 
            style={{fontSize: '20px'}}
            to={`/admin/${location.modulo}/`}>
               <span className="d-flex gap-1" >
                  <i className="bi bi-arrow-left"></i>
                  <strong>{location.modulo}</strong>
               </span>
            </Link>

            <i className="bi bi-people text-dark h3 m-0 px-4"></i>

          </div>

            <ItemBanner location={location} />
            
            <div className="mt-2 px-2" >  
               <SwitchEdit 
               location={location} 
               checked={checked} 
               handleCheked={handleCheked}/>
           </div>


           <form className="" onSubmit={handleSubmit} >
            
            {
                  item.map((data, i) => (
                     <div key={i} className="px-1 mt-2 text-dark fw-bold" style={{wordBreak: 'break-all'}} >
                     {Object.keys(data).map((name, i)=> (
                        <div key={i} className="p-1  rounded
                        d-flex gap-5 align-items-center justify-content-start" >
                          
                          <div className="w-50" >
                          <strong className="h5 m-0 fw-bold" >{name} </strong> 
                          </div>

                          <div>
                          <input onChange={handleEdit}
                          autoComplete="false"
                          name={name} 
                          value={editValues[`${name}`] ? editValues[`${name}`] : data[`${name}`] } 
                          readOnly={name === 'id' || name === 'date' || checked ? true : false} 
                          type="text" 
                          className={`px-1 ${checked ? 'edit-input' : 'edit-inputs_'}`} 
                          style={{maxWidth: '210px'}}/>
                          </div>
                         
                        </div>
                     ))}
                     </div>
                  ))  
            }
               {
                  !checked ?  <div className="w-100 p-0 mb-4 mt-2 px-2">
                     <button type="submit" className="button-30 w-100" >editar</button>
                     </div> : ''
               }
               <div className="px-4 w-100" >
                  {/** NOTHING */}
               </div>

           </form>

          
        </div>
     )
}
 
export default Item