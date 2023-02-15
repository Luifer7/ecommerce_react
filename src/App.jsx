import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Admin from "./routes/Admin";
import Dashboard from "./admincomponents/Dashboard"
import Perfil from "./admincomponents/Perfil"
import Configuracion from "./admincomponents/Configuracion"
import Politicas from "./admincomponents/Politicas"
import Modulos from "./admincomponents/Modulos";
import CreateModulo from "./admincomponents/dashboard/CreateModulo";
import { useLista } from "./adminhooks/useLista";
import Item from "./admincomponents/Item";

function App() {

  const {miLista, resuelta} = useLista()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/> ,
    },
    {
      path: "/nueva-cuenta",
      element: <NuevaCuenta/>,
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
          path: '/admin/:modulo', element: <Modulos/>,
        },
        {
          path: '/admin/createmodulo', element: <CreateModulo/>,
        },
        {
          path: '/admin/:modulo/:item/:id', element: <Item/>,
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

      <div>

          {/* Header component esta en la vista*/}
          

          {/* Vista de rutas */}
          <RouterProvider router={router} />
  
          {/* Footer component */}          

      </div>

 
  )
}

export default App;
