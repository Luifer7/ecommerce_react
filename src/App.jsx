import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import './styles/app.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ])

  return (

      <div className="content">

          {/* Header component */}
          <div className='header-component'>
            <h3 className="text-white text-center">Ecommerce React HEADER</h3>
          </div>

          {/* Vista de rutas */}
          <RouterProvider router={router} />
  

          {/* Footer component */}
           <div className="w-100 p-5 bg-dark" >
            <h3 className="text-white text-center" >FOOTER</h3>
          </div>

      </div>

 
  )
}

export default App
