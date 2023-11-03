"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
const BrandCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay:3000
      }}
    >
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/google.png" height={50} width={100} alt=''/>
      </SwiperSlide>
    </Swiper>
  )
}

export default BrandCarousel