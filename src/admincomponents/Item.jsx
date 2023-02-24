import { Link, useParams } from "react-router-dom"
import { useCrud } from "../adminhooks/useCrud"
import ItemBanner from "./item/ItemBanner"
import SwitchEdit from "./item/SwitchEdit"
import Content from "./item/Content"
import DialogDelete from "./item/DialogDelete";
import Spinner from "./dashboard/Spinner";
import React from "react"
import Galeria from "./item/Galeria"


export const ItemContext = React.createContext()

const Item = () => {
         
   const location = useParams()
   const { 
   item, 
   checked, 
   handleCheked, 
   checkedGalery, 
   handleChekedGalery,
   isResolveCrud, 
   galery, 
   deleteDocument
   } = useCrud(location)
    
    return ( 
      <ItemContext.Provider value={
         {handleCheked, 
         item, checked, 
         isResolveCrud, 
         location, 
         checkedGalery, galery, handleChekedGalery}} >
        <div className="px-3 py-2" >

        <div className="mt-3 w-100 text-center" >
            <strong className="opacity-0" >espacio invisible</strong>
         </div>  

           {/* Back */}
          <div className="d-flex mt-2 align-items-center justify-content-between" >

            <Link className="text-info d-flex align-items-center" 
            style={{fontSize: '20px'}}
            to={`/admin/${location.modulo}/${location.icon}`}>
               <span className="d-flex gap-1" >
                  <i className="bi bi-arrow-left"></i>
                  <strong>{location.modulo}</strong>
               </span>
            </Link>

            <i className={`fw-bold text-dark h3 mx-1 ${location.icon}`}></i>
          
          </div>
            
            {/**BANNER */}
            <ItemBanner item={item} location={location} />
        
            {/**Switch y DELETE */}
            <div className="mt-3 mb-2 d-flex align-items-center justify-content-between px-4" >  
               <SwitchEdit 
               location={location} 
               checked={checked} 
               handleCheked={handleCheked}/>

               <DialogDelete location={location} item={item}  deleteDocument={deleteDocument} />

           </div>

            {/** Tabla editar contenido */}
           {
            isResolveCrud 
            ?  <Content />
            : <div className="borer mt-4 text-center"><Spinner/></div>
           }

      
           {
             isResolveCrud && location.modulo != 'categorias'
             ? <Galeria galery={galery} location={location} /> 
             : ''
           }

            <div className="px-5 w-100 mb-5" >
               {/** NOTHING */}
            </div>
           
        </div>
        </ItemContext.Provider>
     )
}
 
export default Item