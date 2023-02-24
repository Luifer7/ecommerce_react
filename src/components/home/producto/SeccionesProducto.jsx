import { Fragment, useEffect, useState } from "react";
import Articulo from "./Articulo";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const SeccionesProducto = ({bodyDataModule, dataCategories}) => {

    const getWidth = () => window.innerWidth || document.documentElement.clientWidth 
    || document.body.clientWidth;

    // Establece width en el state local
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        // para limpiar el timeout
        let timeoutId = null;

        const resizeListener = () => {
            //previene la ejecucion antes del timeout
            clearTimeout(timeoutId);
            // cambia el estado despues de 100milisegundos
            timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        }

        // agregamos el listener rezise
        window.addEventListener('resize', resizeListener);

    },[])

    const getNumber = () => {
        if (width <= 600) {
            return 1
        }
        if (width <= 950) {
            return 2
        }
        return 3
        
    }

    return ( 
        <Fragment>
                        
            {dataCategories.map( (categoria, i) => (
                <div key={i} className="row mt-3">
                    <h2 className=" headingCategoria">{categoria.nombre}</h2>
                    <Swiper                    
                    navigation={true}
                    pagination={true} 
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={getNumber()}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >       
                        <div className=" mt-3">
                            {bodyDataModule.map( articulo => ( articulo.producto_categoria === categoria.nombre
                            ?<SwiperSlide key={articulo.id}>
                                <Articulo                                        
                                articulo={articulo}
                                />
                            </SwiperSlide>
                            : null))}
                        </div>                      
                    </Swiper>
                    <div className=" d-flex justify-content-end mt-2">
                        <Link to={'/'} className='btn btn-sm btn-dark mb-3 '>
                            Ver todos...
                        </Link> 
                    </div>
                      

                </div>
            ))}

             

        </Fragment>
     );
}
 
export default SeccionesProducto;