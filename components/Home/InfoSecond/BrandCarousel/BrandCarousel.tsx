"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller,A11y,Navigation } from 'swiper/modules';
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
      className='items-center mt-5'
      autoplay={{
        delay:3000
      }}
      breakpoints={{
        0:{
            slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5
        },
      }}
    >
      <SwiperSlide>
        <Image src="/partners/1.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/2.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/3.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/4.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/5.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/6.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/7.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/8.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/9.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/10.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/11.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/12.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/13.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/14.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/15.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/partners/16.png" height={100} width={100}  alt='' className='h-[70px] w-auto flex items-center justify-center'/>
      </SwiperSlide>
    </Swiper>
  )
}

export default BrandCarousel