import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';

import { Pagination, Navigation } from 'swiper/modules';
import { autoSwiperImages, swiperImages } from "../constants/constants";

const AutoSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{ backgroundPosition: window.innerWidth < 1024 && '22.5% 50%' }} 
        className="mySwiper h-[75vh]"
      >
          {swiperImages.map((img, i) => (
            <SwiperSlide key={img}          >
                <div className="h-full grid place-items-center">
                  <img src={img} alt={img} className='rounded-xl border-t-4 border-blue-500' />
                </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default AutoSwiper;
