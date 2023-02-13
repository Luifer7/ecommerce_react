
import { useEffect, useState } from "react"

import { 
collection, deleteDoc, doc, 
query, getDocs, onSnapshot, addDoc } 
from "firebase/firestore";

import {db} from '../../firebase'
import Swal from 'sweetalert2'

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
    try {
    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Guardando'
      })
      const docRef = await addDoc(collection(db, 'modulos'),
      preview
      )
      
    } catch (error) {
    console.log(error)    
    }
   
}

//Eliminar modulo de tu lista
const eliminarModulo = (modulo) => {
Swal.fire({
    html: `<small class="text-dark fw-bold text-justify" >
    Esta accion es irreversible, desea continuar?</small>`,
    confirmButtonColor: '#5cb85c',
    confirmButtonText:'Continuar <i class="fa fa-arrow-right"></i>',
}).then((res)=> {
    if (res.isConfirmed) {
        try {
        deleteDoc(doc(db, "modulos", modulo.id))

        } catch (error) {
        console.log(error)
        }
           
}
})
    
}

//Observer
const q = query(collection(db, "modulos"))
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const datos = []
  querySnapshot.forEach((doc) => {
      datos.push({id: doc.id, ...doc.data()})
  })
  setMiLista(datos)
})

return {miLista, resuelta, eliminarModulo, crearModulo}

}