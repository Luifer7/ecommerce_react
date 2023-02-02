import { useEffect, useState } from "react"


export function useAdmin () {

    const [ data, setData] = useState(0)

    useEffect(() => {
    
    setData(1)

    },[])


    return {
        data
    }
}