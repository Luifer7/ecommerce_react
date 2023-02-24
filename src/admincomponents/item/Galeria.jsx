import CrearGaleria from "./CrearGaleria";
import EditarGaleria from "./EditarGaleria";


const Galeria = ( { galery, location }) => {

    return ( 
        <div className="mt-3" >
            { 
               galery
               ? <EditarGaleria galery={galery} location={location} />
               : <CrearGaleria location={location} />
            }
        </div>
    )
}
 
export default Galeria;