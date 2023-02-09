import { useEffect, useState } from "react"


export function useAdmin (modulo) {

    const [ nombreModulo, setnombreModulo] = useState('')


    //Object.keys() se obtiene las claves del objeto
    useEffect(() => {

        //const head = Object.keys(categorias[0])

        setnombreModulo(modulo)
         
    },[modulo])

  
 
    
    return {
        nombreModulo
    }
}