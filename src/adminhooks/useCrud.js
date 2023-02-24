import { async } from "@firebase/util"
import { 
addDoc, 
collection, 
doc, 
getDocs, 
query, 
updateDoc, 
where, 
deleteDoc,
onSnapshot,
increment,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"

export function useCrud (location) {


    const [item, setItem] = useState([])
    const [galery, setGalery] = useState(null)
    const [checked, setChecked] = useState(true)
    const [isResolveCrud, setIsResolveCrud] = useState(false)
    const [checkedGalery, setCheckedGalery] = useState(true)


   const getItem = async (location) => {
    if (location.id) {
        const q = query(collection(db, location.modulo),  where("id", "==", location.id))
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
    })  
        setIsResolveCrud(true)
        setItem(data)
        if (data[0].galeria) {
            setGalery(data[0].galeria) 
        }
    }
        
   } 

   useEffect(()=> {
    getItem(location)
   }, [location.id])
    
 
    //Crear documento del modulo
    const create = async (datos) => {
        const docRef = await addDoc(collection(db, location.modulo),
            datos
        )
    
        const docRefEdit = doc(db, location.modulo, docRef.id)
        await updateDoc(docRefEdit, { 
            id: docRef.id
        })

        if (location.modulo === 'productos') {
            incrementeCategoriaNumber(datos)
        }
    }

    // DELETE DOCUMENTOS
    const deleteDocument = async (item) => {
        let datos = item[0]
        await deleteDoc(doc(db, location.modulo, datos.id))
        if (location.modulo === 'productos') {
            decrementeCategoriaNumber(datos)
        }
    }

    const handleCheked = () => {
        setChecked(!checked)
      }

    const handleChekedGalery = () => {
        setCheckedGalery(!checkedGalery)
        if (item[0].galeria) {
            setGalery(item[0].galeria) 
        }
    }

      if (location.id) {
        const q = query(collection(db, location.modulo),  where("id", "==", location.id))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const datos = []
        querySnapshot.forEach((doc) => {
          datos.push({id: doc.id, ...doc.data()})
        })
        setItem(datos)
        if (datos[0]?.galeria) {
            setGalery(datos[0].galeria) 
        }
        })
      }


        const incrementeCategoriaNumber = async (datos) => {
        const q = query(collection(db, "categorias"),  where("nombre", "==", datos.producto_categoria))
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
        })  
        const washingtonRef = doc(db, "categorias", data[0]?.id)
        await updateDoc(washingtonRef, {
            categoria_productos: increment(1)
        })
      }

      const decrementeCategoriaNumber = async (datos) => {
        const q = query(collection(db, "categorias"),  where("nombre", "==", datos.producto_categoria))
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
        })  
        const washingtonRef = doc(db, "categorias", data[0]?.id)
        await updateDoc(washingtonRef, {
            categoria_productos: increment(-1)
        })
      }   

      
    return {
        create, handleCheked, handleChekedGalery, checked, 
        checkedGalery, item, galery, isResolveCrud, deleteDocument
    }

}