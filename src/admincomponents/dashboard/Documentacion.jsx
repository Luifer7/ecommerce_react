
import Tabla from "./Tabla"

const Documentacion = () => {

    let miLista = [
        {   id: 1,
            nombre: 'Categorias',
            head: [ 'id', 'nombre', '# productos', 'acciones'],
            body: [ 1, 'ropa', 7],
            acciones: ['edit', 'del']
        },
        {   id: 2,
            nombre: 'Productos', 
            descripcion: `Gestiona tus productos de una manera sencilla, 
            agrega nuevos productos y añade su categoria de entre las existentes, un producto debe
            debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
            los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios,
            en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar
            y borrar estan disponibles en tu tabla de prodcutos.`,
            head: [ 'id', 'nombre', 'referencia', 'categoria', 'precio', 'stock','comentarios', 'acciones'],
            body: [ 1, 'camiseta', 'adiddas', 'ropa', '$50000', 9, 'lorem ipsum'],
            acciones: ['detalles','edit', 'del']
        },
        {   id: 3,
            nombre: 'Usuarios', 
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo minus illum id, cumque tempora, minima ex quia, porro nulla reprehenderit consequatur facere earum modi. Incidunt aliquid deserunt reprehenderit voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit, Ejemplo:',
            head: [ 'id', 'nombre', 'apellido', 'correo', 'compras', 'acciones'],
            body: [ 1, 'Luis', 'Cordero', 'luis@gmail.com', '$150000'],
            acciones: ['detalles', 'del']
        },
        {   id: 4,
            nombre: 'Ventas', 
            descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat illo minus illum id, cumque tempora, minima ex quia, porro nulla reprehenderit consequatur facere earum modi. Incidunt aliquid deserunt reprehenderit voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit, Ejemplo:',
            head: [ 'id', 'producto', 'categoria', 'valor','acciones'],
            body: [ 1, 'camiseta', 'ropa', '$45000'],
            acciones: ['detalles', 'del']
        }
    ]

    return ( 
        <>
        <h2 className="text-center text-dark fw-bold mb-4" >Documentacion</h2>
        {
            miLista.map((datos) => (
                <Tabla datos={datos} 
                key={datos.id}
                />
            ))
        }
        <div className="p-5 mt-2" >
            {/**Espacio de referencia */}
        </div>
        
        </>
     )
}
 
export default Documentacion