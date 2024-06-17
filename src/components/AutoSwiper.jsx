import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';
import { autoSwiperImages } from "../constants/constants";

const AutoSwiper = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {autoSwiperImages.map((img, i) => (
          <SwiperSlide key={img.auto}          >
            <div className={`bg-[url(${img.background})] bg-no-repeat bg-center`}>
              <div className="backdrop-blur-sm  h-full grid place-items-center">
                <img src={img.auto} alt={img.auto} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AutoSwiper;
