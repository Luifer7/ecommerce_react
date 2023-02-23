import { Fragment } from "react";
import Articulo from "./Articulo";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";




const SeccionesProducto = ({productos, categorias}) => {


    return ( 
        <Fragment>
                        
            {categorias.map( categoria => (
                <div className="row border  w-100" key={categoria}>
                    <h2 className=" headingCategoria">{categoria}</h2>
                    <Swiper                    
                    navigation={true}
                    pagination={true} 
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >       
                        <div className=" mt-3">
                            {productos.map( articulo => ( articulo.producto_categoria === categoria
                            ?<SwiperSlide key={articulo.id}>
                                <Articulo                                        
                                        articulo={articulo}
                                />
                            </SwiperSlide>
                            : null))}
                        </div>
                      
                    </Swiper>
                    <div className='text-end p-1' >
                    Ver todos...
                    </div>

                </div>
            ))}

             

        </Fragment>
     );
}
 
export default SeccionesProducto;