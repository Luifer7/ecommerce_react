

export const  opcionesModulos =  
[

{ value: 'categorias', 
  label: 'categorias',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos y añade su categoria de entre las existentes, un producto debe debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
  los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios, en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar y borrar estan disponibles en tu tabla de prodcutos.`,
  head: 
  [ 
  {nombre: 'id', tipo: 'hidden'}, 
  {nombre: 'nombre',tipo: 'text'},
  {nombre: 'categoria_productos', tipo: 'hidden'},
  {nombre: 'acciones', tipo: 'hidden'}
  ],
  body:
  [1, 'ropa', 7], icon: 'bi bi-tags'
},
  
{ value: 'productos', label: 'productos',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos y añade su categoria de entre las existentes, un producto debe debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
  los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios, en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar y borrar estan disponibles en tu tabla de prodcutos.`,
  head: 
  [
  {nombre: 'id', tipo: 'hidden' },
  {nombre: 'nombre', tipo: 'text' },
  { nombre: 'referencia', tipo: 'text' },
  { nombre: 'producto_categoria', tipo: 'select' },
  { nombre: 'precio', tipo: 'number' },
  { nombre: 'stock', tipo: 'number' },
  { nombre: 'comentarios', tipo: 'text' },
  { nombre: 'acciones', tipo: 'hidden' }],
  body: [ 1, 'camiseta', 'adiddas', 'ropa', '$50000', 9, 'lorem ipsum'], icon: 'bi bi-basket3'
},

{ value: 'usuarios', label: 'usuarios',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos y añade su categoria de entre las existentes, un producto debe debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
  los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios, en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar y borrar estan disponibles en tu tabla de prodcutos.`,
  head: 
  [ 
  { nombre: 'id', tipo: 'hidden' },
  { nombre: 'nombre', tipo: 'text' },
  { nombre: 'apellido', tipo: 'text' },
  { nombre: 'correo', tipo: 'email' },
  { nombre: 'usuario_compras', tipo: 'hidden' },
  { nombre: 'acciones', tipo: 'hidden' },
  ],
  body: [ 1, 'luis', 'cordero', 'luifer@gmail.com', 3], icon: 'bi bi-person-circle'
},

{ value: 'ventas', label: 'ventas',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos y añade su categoria de entre las existentes, un producto debe debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
  los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios, en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar y borrar estan disponibles en tu tabla de prodcutos.`,
  head: 
  [ 
  { nombre: 'id', tipo: 'hidden' },
  { nombre: 'venta_producto', tipo: 'hidden' },
  { nombre: 'venta_categoria', tipo: 'hidden' },
  { nombre: 'valor', tipo: 'hidden' },
  { nombre: 'acciones', tipo: 'hidden' },
 ],
  body: [ 1, 'camiseta', 'ropa', 56000], icon: 'bi bi-cash'
},

]

