import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Dashboard from "./admincomponents/Dashboard"
import Categorias from "./admincomponents/Categorias"
import Productos from "./admincomponents/Productos"
import Usuarios from "./admincomponents/Usuarios"
import Perfil from "./admincomponents/Perfil"
import Configuracion from "./admincomponents/Configuracion"
import Politicas from "./admincomponents/Politicas"
import Ventas from "./admincomponents/Ventas"
import './styles/app.css'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/admin",
      element: <Admin/>,
      children: [
        {
          path: '/admin/dashboard', element: <Dashboard/>,
        },
        {
          path: '/admin/categorias', element: <Categorias/>,
        },
        {
          path: '/admin/productos', element:  <Productos/>,
        },
        {
          path: '/admin/usuarios', element: <Usuarios/> ,
        },
        {
          path: '/admin/ventas', element: <Ventas/> ,
        },
        {
          path: '/admin/politicas', element: <Politicas/> ,
        },
        {
          path: '/admin/perfil', element: <Perfil/> ,
        },
        {
          path: '/admin/configuracion', element: <Configuracion/> ,
        },
      ]
    }
  ])

  return (

      <div className="content">

          {/* Header component esta en la vista*/}
          

          {/* Vista de rutas */}
          <RouterProvider router={router} />
  

          {/* Footer component */}
          

      </div>

 
  )
}

export default App
