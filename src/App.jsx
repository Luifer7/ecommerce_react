import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from "./routes/Admin";
import Home from "./routes/Home";
import Productos from "./admincomponents/Productos"
import Categorias from "./admincomponents/Categorias"
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
          path: '/admin/categorias', element: <Productos/>
        },
        {
          path: '/admin/productos', element: <Categorias/>
        }
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
