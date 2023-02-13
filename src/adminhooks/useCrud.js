import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { useLista } from "./useLista"


export function useCrud (location) {

    const {miLista} = useLista()
    const [head, setHead] = useState([])
    const [show, setShow] = useState(false)

    const [item, setItem] = useState([])
    const [checked, setChecked] = useState(true)


   const getItem = async (location) => {
    if (location.id) {
        const q = query(collection(db, location.modulo),  where("id", "==", location.id))
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
    })
        setItem(data)
    }
        
   } 

   useEffect(()=> {
    getItem(location)
   }, [location.id])
    
      
   //Mostrar formulario del modulo
   const showForm = (parametrosHead) => {
    setHead(miLista.filter(field=>field.value === parametrosHead)[0].head)
    setShow(!show)
    }

    //Crear documento del modulo
    const create = async (datos) => {
        const docRef = await addDoc(collection(db, location.modulo),
            datos
        )
    
        const docRefEdit = doc(db, location.modulo, docRef.id);
        await updateDoc(docRefEdit, { 
            id: docRef.id
        })
    }

    const handleCheked = (e) => {
        setChecked(!checked)
      }

      

    return {
        create, showForm, handleCheked, checked, head, show, item
    }

}