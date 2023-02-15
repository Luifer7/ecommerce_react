import { useEffect, useState } from "react"
import { db } from "../../firebase"
import { collection, query, getDocs } from "firebase/firestore"
import { opcionesModulos } from "../admincomponents/datosmodulos"

export function useAdmin (modulo) {

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

    }

    //Obtener datos para la pagina modulo
    const getDataModule =  async (nombreModulo) => {
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


    return {
        nombreModulo, dataCategories, bodyDataModule, headDataModule, isResolve
    }
}