import { useParams } from "react-router-dom";
import GaleryCards from "../components/producto/GaleryCards";
import { useProductos } from "../hooks/useProducto";


const Producto = () => {

    const location = useParams()

    const {currentImg, productDetail, getCurrentImg} = useProductos(location)
    

    return ( 
        <div className="w-100 p-2" >
            <h3>Nombre producto</h3>
            <h5>Referencia</h5>
            <strong> Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Molestiae obcaecati magni 
                 alias aliquam beatae velit quasi, consequatur 
                 ad provident quaerat! 
            </strong>

            <div className="w-100 mt-4 row m-auto p-2">
                <div className="col-6 col-md-4 text-center text-whitex p-2" style={{height:'300px'}}  >
                    <GaleryCards getCurrentImg={getCurrentImg} productDetail={productDetail} />
                </div>
                <div className="col-12 col-md-8 px-4" style={{height:'300px'}} >
                    <img src={currentImg}
                    className="rounded w-100" 
                    style={{objectFit: 'cover', height: '100%'}}/>
                </div>
            </div>

        </div>
     )
}
 
export default Producto;