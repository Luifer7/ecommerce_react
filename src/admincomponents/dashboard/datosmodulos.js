
const  opciones =  [
    { value: 'categorias', label: 'categorias',  descripcion: `Gestiona tus productos de una manera sencilla, 
    agrega nuevos productos y añade su categoria de entre las existentes, un producto debe
    debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
    los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios,
    en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar
    y borrar estan disponibles en tu tabla de prodcutos.`,
    head: [ 'id', 'nombre', 'productos_categoria', 'acciones'],
    body: [ 1, 'ropa', 7], icon: 'bi bi-tags'
    },
    { 
    value: 'productos', label: 'productos',  descripcion: `Gestiona tus productos de una manera sencilla, 
            agrega nuevos productos y añade su categoria de entre las existentes, un producto debe
            debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
            los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios,
            en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar
            y borrar estan disponibles en tu tabla de prodcutos.`,
    head: [ 'id', 'nombre', 'referencia', 'categoria_producto', 'precio', 
            'stock','comentarios', 'acciones'],
    body: [ 1, 'camiseta', 'adiddas', 'ropa', '$50000', 9, 'lorem ipsum'], icon: 'bi bi-basket3'
    },
    { 
        value: 'usuarios', label: 'usuarios',  descripcion: `Gestiona tus productos de una manera sencilla, 
                agrega nuevos productos y añade su categoria de entre las existentes, un producto debe
                debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
                los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios,
                en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar
                y borrar estan disponibles en tu tabla de prodcutos.`,
        head: [ 'id', 'nombre', 'apellido', 'correo', 'compras_usuario', 'acciones'],
        body: [ 1, 'luis', 'cordero', 'luifer@gmail.com', 3], icon: 'bi bi-person-circle'
        },
        { 
            value: 'ventas', label: 'ventas',  descripcion: `Gestiona tus productos de una manera sencilla, 
                    agrega nuevos productos y añade su categoria de entre las existentes, un producto debe
                    debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
                    los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios,
                    en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar
                    y borrar estan disponibles en tu tabla de prodcutos.`,
            head: [ 'id', 'producto_venta', 'categoria_venta', 'valor','acciones'],
            body: [ 1, 'camiseta', 'ropa', 56000], icon: 'bi bi-cash'
            }
]

export default opciones