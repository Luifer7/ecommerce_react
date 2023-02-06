import { useEffect, useState } from "react"


export function useAdmin (modulo) {

    const [ nombreModulo, setnombreModulo] = useState('')
    const [bodyModulo, setBodyModulo] = useState([])
    const [headModulo, setHeadModulo] = useState([])

    //Object.keys() se obtiene las claves del objeto
    useEffect(() => {
    

    if (modulo === 'categorias') {
        const categorias = [
            {
                id: 1, nombre: 'Ropa', numero_productos: 4
            },
            {
                id: 2, nombre: 'electrodomesticos', numero_productos: 4
            },
            {
                id: 4, nombre: 'comida', numero_productos: 4
            }
        ]
        const head = Object.keys(categorias[0])

        setnombreModulo(modulo)
        setHeadModulo(head)
        setBodyModulo(categorias)
    }
    
    if (modulo === 'productos') {
        const productos = [
            {
                id: 1, nombre: 'laptop', categoria: 'tecnologia', stock: 4, comentarios: 'lorem lorem'
            },
            {
                id: 2, nombre: 'camiseta', categoria: 'ropa', stock: 4, comentarios: 'lorem dd'
            }
        ]
        const head = Object.keys(productos[0])
        const body = Object.values(productos)
        setnombreModulo(modulo)
        setHeadModulo(head)
        setBodyModulo(body)
    }

    if (modulo === 'usuarios') {
        const productos = [
            {
                id: 1, nombre: 'luis', apellido: 'cordero', correo: 'luifer@gmail.com', compras: 5
            },
            {
                id: 2, nombre: 'andrea', apellido: 'perez', correo: 'andrea@gmail.com', compras: 5
            }
        ]
        const head = Object.keys(productos[0])
        const body = Object.values(productos)
        setnombreModulo(modulo)
        setHeadModulo(head)
        setBodyModulo(body)
    }
    
    if (modulo === 'ventas') {
        const productos = [
            {
                id: 1, nombre: 'laptop', categoria: 'teconologia', valor: 67000
            },
            {
                id: 2, nombre: 'camiseta', categoria: 'ropa', valor: 90000
            }
        ]
        const head = Object.keys(productos[0])
        const body = Object.values(productos)
        setnombreModulo(modulo)
        setHeadModulo(head)
        setBodyModulo(body)
    }

    },[modulo])


    return {
        nombreModulo, bodyModulo, headModulo
    }
}