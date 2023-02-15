import { Link, useParams } from "react-router-dom"
import { useCrud } from "../adminhooks/useCrud"
import ItemBanner from "./item/ItemBanner"
import SwitchEdit from "./item/SwitchEdit"
import Button from '@mui/material/Button';
import Content from "./item/Content"
import { useState } from "react";
import DialogDelete from "./item/DialogDelete";
import Spinner from "./dashboard/Spinner";

const Item = () => {
   
    const location = useParams()
    const {item, checked, handleCheked, isResolveCrud} = useCrud(location)
  
  
    
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
            
            {/**BANNER */}
            <ItemBanner location={location} />
            

            {/**Switch y DELETE */}
            <div className="mt-3 d-flex align-items-center justify-content-between px-4" >  
               <SwitchEdit 
               location={location} 
               checked={checked} 
               handleCheked={handleCheked}/>

               <DialogDelete location={location} />

           </div>
  
           {
            isResolveCrud 
            ?  <Content item={item} checked={checked} handleCheked={handleCheked} location={location} />
            : <div className="borer mt-4 text-center"><Spinner/></div>
           }
           
        </div>
     )
}
 
export default Item