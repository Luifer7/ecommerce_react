import { createRef } from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import Dashboard from "./admincomponents/Dashboard"
import Perfil from "./admincomponents/Perfil"
import Configuracion from "./admincomponents/Configuracion"
import Politicas from "./admincomponents/Politicas"
import './styles/app.css'
import Modulo from "./admincomponents/Modulo";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/admin",
      element: <Admin/>, 
      children: [
        {
          path: '/admin/dashboard', element: <Dashboard/>,
        },
        {
          path: '/admin/:modulo', element: <Modulo/>,
        },
        {
          path: '/admin/politicas', element: <Politicas/>,
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
