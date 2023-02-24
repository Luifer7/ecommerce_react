import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { collection, query, getDocs, onSnapshot } from "firebase/firestore"
import { opcionesModulos } from "../admincomponents/datosmodulos"

export function useAdmin (modulo) {

    const [head, setHead] = useState([])
    const [show, setShow] = useState(false)

    const [nombreModulo, setnombreModulo] = useState('')

    const [dataCategories, setDataCategories] = useState([])
    const [bodyDataModule, setBodyDataModule] = useState([])
    const [headDataModule, setHeadDataModule] = useState([])
    const [ isResolve, setIsResolve] = useState(false)

    //Obtener las categorias para el select de productos
    const getDataCategories = async () => {
        const q = query(collection(db, 'categorias'))
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
    })
        setDataCategories(data)
        console.log(data)
    }

    //Obtener datos para la pagina modulo
    const getDataModule =  async (nombreModulo) => {
        setIsResolve(false)
        const q = query(collection(db, nombreModulo))
        const querySnapshot = await getDocs(q)
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
    })
        if (data[0] != null) {
        setIsResolve(true)
        setBodyDataModule(data)
        setHeadDataModule(opcionesModulos.filter(field=> field.value === modulo)[0].head)
        } else {
            setIsResolve(true)
        }

    }

    useEffect(() => {

    setnombreModulo(modulo)
    getDataModule(modulo)
    getDataCategories(modulo)
    
    },[modulo])

    
    //Observer para las tablas de los modulos
    const q = query(collection(db, modulo))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const datos = []
    querySnapshot.forEach((doc) => {
        datos.push({id: doc.id, ...doc.data()})
    })
    setBodyDataModule(datos)
    setHeadDataModule(opcionesModulos.filter(field=> field.value === modulo)[0].head)
    })

     
   //Mostrar formulario del modulo
   const showForm = (parametrosHead) => {
    console.log(parametrosHead)
    setHead(opcionesModulos.filter(field=>field.value === parametrosHead)[0].head)
    setShow(!show)
    }

    const closeForm = () => {
        setShow(false)
    }


    return {
        nombreModulo, 
        dataCategories,
         bodyDataModule,
          headDataModule, 
          isResolve, 
          showForm, 
          closeForm,
           head, 
           show
    }

}