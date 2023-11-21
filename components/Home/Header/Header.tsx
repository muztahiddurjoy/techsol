"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import HeaderItem from './HeaderItem/HeaderItem';

const Header = () => {
  const [anim, setanim] = useState(0)
  return (
    <div>
      <Swiper
      slidesPerView={1}
      loop={true}
      onNavigationNext={e=> {setanim((p:number)=> p==0?1:0)}}
      onNavigationPrev={e=> {setanim((p:number)=> p==0?1:0)}}
      autoplay={{
        delay:3000
      }}
      touchEventsTarget='wrapper'
      navigation={true} 
      allowTouchMove={false}
      modules={[Navigation]}
      
    >
      <SwiperSlide key={0}>
        <HeaderItem anim={anim==0}/>
      </SwiperSlide>
      <SwiperSlide key={1}>
        <HeaderItem anim={anim==1}/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Header