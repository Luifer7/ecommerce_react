import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function GaleryCards({getCurrentImg, productDetail}) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-100"
        onSlideChange={(swiperSlide) => getCurrentImg(swiperSlide.activeIndex)}
        onSwiper={(swiper) => getCurrentImg(swiper.activeIndex)}
      >
        {
          productDetail.map((foto, i)=> (
            <SwiperSlide key={i} className="rounded" style={{height: '100%'}} >
              <img src={foto} style={{objectFit: 'contain', height: '100% ', width: '100%'}} alt="" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}