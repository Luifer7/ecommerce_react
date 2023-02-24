

export const  opcionesModulos =  
[

{ value: 'categorias', 
  label: 'categorias',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos
  y añade su categoria de entre las existentes, un producto debe debe tener una categoria
  y a una categoria puedes agregarle tantos productos como quieras, los campos de tu producto 
  seran.`,
  head: [ 
  {nombre: 'id', tipo: 'hidden', requerido: false, editable: false, valorPorDefecto: ''}, 
  {nombre: 'nombre', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  {nombre: 'categoria_productos', tipo: 'number', requerido: false, editable: false, valorPorDefecto: 0},
  {nombre: 'imagen', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''}
  ],
  body: [1, 'tecnologia', 7, 'imagen.png', 'no'], 
  icon: 'bi bi-tags'
},
  
{ value: 'productos', label: 'productos',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos y añade su categoria de entre las existentes, un producto debe debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
  los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios, en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar y borrar estan disponibles en tu tabla de prodcutos.`,
  head: 
  [
  {nombre: 'id', tipo: 'hidden', requerido: false, editable: false, valorPorDefecto: '' },
  {nombre: 'nombre', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'referencia', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'producto_categoria', tipo: 'select', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'precio', tipo: 'number', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'stock', tipo: 'number', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'comentarios', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  {nombre: 'imagen', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  ],
  body: [ 1, 'camiseta', 'adiddas', 'ropa', '$50000', 9, 'lorem ipsum', 'imagen.jpg'], icon: 'bi bi-basket3'
}
]


/** 
{ value: 'usuarios', label: 'usuarios',  
  descripcion: `Gestiona tus productos de una manera sencilla, agrega nuevos productos y añade su categoria de entre las existentes, un producto debe debe tener una categoria y a una categoria puedes agregarle tantos productos como quieras,
  los campos de tu producto seran: nombre, referencia, categoria, precio, stock y comentarios, en este ultimo campo podras explicar mas a detalle tu producto. Las acciones detalles, editar y borrar estan disponibles en tu tabla de prodcutos.`,
  head: 
  [ 
  { nombre: 'id', tipo: 'hidden', requerido: false, editable: false, valorPorDefecto: '' },
  { nombre: 'nombre', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'apellido', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  { nombre: 'correo', tipo: 'email', requerido: true, editable: true, valorPorDefecto: '' },
  {nombre: 'imagen', tipo: 'text', requerido: true, editable: true, valorPorDefecto: ''},
  ],
  body: [ 1, 'luis', 'cordero', 'luifer@gmail.com', 'imagen.jpg'], icon: 'bi bi-person-circle'
}
*/

