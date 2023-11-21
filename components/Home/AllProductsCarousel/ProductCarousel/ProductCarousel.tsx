"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard/ProductCard';
import { Controller,A11y,Navigation } from 'swiper/modules';
import { ProductType } from '@/types/types';
import axios from 'axios';
import { apiurl } from '@/apiurl';
const ProductCarousel = () => {
  const [products, setproducts] = useState<Array<ProductType>>([])
  useEffect(() => {
    axios.get(`${apiurl}/products`).then((res)=>{
      if(res.status==200){
        setproducts(res.data.result)
      }
    }).catch((err)=> console.log(err))
  }, [])
  
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
    {products.map((v,i)=> <SwiperSlide className='' key={i}>
        <ProductCard 
          link={`/product/${v.id}`} 
          image={v.image} 
          brand={v.brand} 
          title={v.name}/>
    </SwiperSlide>)}
  </Swiper>
  )
}

export default ProductCarousel