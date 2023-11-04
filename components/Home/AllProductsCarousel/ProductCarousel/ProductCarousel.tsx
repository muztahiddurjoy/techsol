"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard/ProductCard';
import { Controller,A11y,Navigation } from 'swiper/modules';
const ProductCarousel = () => {
  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={4}
    loop={true}
    breakpoints={{
        0:{
            slidesPerView: 1,
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
      navigation={true}
      modules={[Controller,Navigation,A11y]}
  >
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
    <SwiperSlide>
        <ProductCard link='/' image='/maksan.jpg' brand='Perkins' title='LP6546'/>
    </SwiperSlide>
  </Swiper>
  )
}

export default ProductCarousel