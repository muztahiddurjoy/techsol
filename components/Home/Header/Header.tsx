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
      className='p-0'
      touchEventsTarget='wrapper'
      navigation={true} 
      allowTouchMove={false}
      modules={[Navigation]}
      
    >
      <SwiperSlide key={0}>
        <HeaderItem bg='/2.jpg' red='FOR  ENERGY SOLUTIONS' image='/special.png' white='THE RELIABLE ADDRESS' anim={anim==0}/>
      </SwiperSlide>
      <SwiperSlide key={1}>
        <HeaderItem bg='/bggen.jpg' red='Our Commitment' image='/solar.png' white='Quality is' anim={anim==1}/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Header