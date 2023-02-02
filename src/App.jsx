import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Admin from "./routes/Admin";
import Home from "./routes/Home";
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
