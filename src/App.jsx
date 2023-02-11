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
import CreateModulo from "./admincomponents/dashboard/CreateModulo";
import Login from "./routes/Login";
import { useLista } from "./adminhooks/useLista";

function App() {

  const {miLista, resuelta} = useLista()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/admin",
      element: <Admin miLista={miLista} resuelta={resuelta} />, 
      children: [
        {
          path: '/admin/dashboard', 
          element: <Dashboard 
          miLista={miLista} 
          resuelta={resuelta} />,
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
        {
          path: '/admin/createmodulo', element: <CreateModulo  />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/> ,
    }
  ])

  
  return (

      <div>

          {/* Header component esta en la vista*/}
          

          {/* Vista de rutas */}
          <RouterProvider router={router} />
  
          {/* Footer component */}          

      </div>

 
  )
}

export default App
