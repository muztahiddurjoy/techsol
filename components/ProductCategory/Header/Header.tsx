"use client"
import { generatorsets } from '@/components/Navbar/genetatorSets'
import { GeneratorSets } from '@/types/types'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Header = (data:GeneratorSets) => {
    const [scroll, setscroll] = useState(0)
    const image = useRef(null)
    const text = useRef(null)
    useEffect(() => {
    if(typeof window!=="undefined"){
        window.addEventListener('scroll',()=>{
            setscroll(window.scrollY)
        })
    }

    gsap.to(image.current,{
        ease:'expo.inOut',
        opacity:1,
        marginTop:0,
        delay:0,
        duration:1
    })
    gsap.to(text.current,{
        opacity:1,
        marginTop:20,
        ease:'expo.inOut',
        delay:0.5,
        duration:1
    })
    }, [])
  return (
    <div className="h-[50vh] md:h-[70vh] w-full bg-[url('/generator.jpg')] bg-cover relative" style={{backgroundPositionY:scroll*0.5}}>
        <div className="flex items-center justify-center flex-col absolute top-0 left-0 right-0 bottom-0 bg-black/80">
            <Image ref={image} className='opacity-0 mt-10' src={data.image&&data.image} height={100} width={100} alt=''/>
            <p ref={text} className='text-white mt-10 text-xl text-center opacity-0 uppercase font-bold md:text-3xl'>DIESEL GENERATOR SETS</p>
        </div>
    </div>
  )
}



export default Header