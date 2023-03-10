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
import Modulos from "./admincomponents/Modulos";
import CreateModulo from "./admincomponents/dashboard/CreateModulo";
import Item from "./admincomponents/Item";
import Producto from "./routes/Producto";

function App() {

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
      path: "/producto/:producto/:id",
      element: <Producto/>,
    },
    {
      path: "/admin",
      element: <Admin/>, 
      children: [
        {
          path: '/admin/dashboard', 
          element: <Dashboard/>,
        },
        {
          path: '/admin/:modulo/:icon', element: <Modulos/>,
        },
        {
          path: '/admin/createmodulo', element: <CreateModulo/>,
        },
        {
          path: '/admin/:modulo/:icon/:item/:id', element: <Item/>,
        },
        {
          path: '/admin/perfil', element: <Perfil/> ,
        }
      ]
    }
  ])

  
  return (

      <div>

          {/* Vista de rutas */}
          <RouterProvider router={router} />      

      </div>

 
  )
}

export default App;
