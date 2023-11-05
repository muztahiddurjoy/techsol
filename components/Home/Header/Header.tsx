"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import HeaderItem from './HeaderItem/HeaderItem';

const Header = () => {
  return (
    <div className=''>
      <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay:3000
      }}
    
    >
      <SwiperSlide>
        <HeaderItem/>
      </SwiperSlide>
      <SwiperSlide>
        <HeaderItem/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Header