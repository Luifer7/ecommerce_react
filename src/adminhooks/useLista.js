
import { useEffect, useState } from "react"

import { 
collection, deleteDoc, doc, 
query, getDocs, addDoc } 
from "firebase/firestore";

import {db} from '../../firebase'


export function useLista () {

//Lista de modulos para dashboard
const [miLista, setMiLista] = useState([])
const [resuelta, setResuelta] = useState(false)
    
//Obtener lista primera vez
const getModulos =  async () => {
    const q = query(collection(db, "modulos"))
    const querySnapshot = await getDocs(q);
    let data = []
    querySnapshot.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()})
})

if(data.length != 0){
    setMiLista(data)
    setResuelta(true)
} else {
    setResuelta(true)
}
}

//hook de obtener lista de modulos
useEffect(()=> {
    getModulos()
}, [])


const crearModulo = async (preview) => {
    const docRef = await addDoc(collection(db, 'modulos'),
      preview
    )   
}

//Eliminar modulo de tu lista
const eliminarModulo = async (modulo) => {
   await deleteDoc(doc(db, "modulos", modulo.id))
}

 
 

return {miLista, resuelta, eliminarModulo, crearModulo}

}