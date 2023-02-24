import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"


export function useProductos (location) {

    const [ currentImg, setCurrentImg] = useState('')

    const [ productDetail, setProducDetail] = useState([])
    const [ ProductIsResolve, setProductIsResolve] = useState(false)

    const getProductDetail = async (location) => {
        if (location.id) {
        const q = query(collection(db, 'productos'), where("id", "==", location.id))
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
        data.push({...doc.data()})
        })  
        setProductIsResolve(true)
        setProducDetail(data[0].galeria)
        setCurrentImg(data[0].galeria[0])

    }
        
} 

    useEffect(() => {
       getProductDetail(location)
    }, [location])

    const getCurrentImg = (index) => {
        setCurrentImg(productDetail[index])
    }


    return {
        currentImg, getCurrentImg, productDetail, ProductIsResolve
    }

}