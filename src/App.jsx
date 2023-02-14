import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./components/proyecto/Home";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Admin from "./routes/Admin";
import Dashboard from "./admincomponents/Dashboard"
import Perfil from "./admincomponents/Perfil"
import Configuracion from "./admincomponents/Configuracion"
import Politicas from "./admincomponents/Politicas"
import Modulo from "./admincomponents/Modulo";
import CreateModulo from "./admincomponents/dashboard/CreateModulo";
import { useLista } from "./adminhooks/useLista";

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
      element: <NuevaCuenta/> ,
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
