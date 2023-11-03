"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { generatorsets } from './genetatorSets'
import { Separator } from '../ui/separator'
  
const Navbar = () => {
    const [scroll, setscroll] = useState(0)
    useEffect(() => {
      if(typeof window!="undefined"){
        window.addEventListener('waiting',()=>{
            setscroll(window.scrollY)
        })
      }
    }, [])
    
  return (
    <>
    <div className='absolute top-0 right-0 left-0 flex items-center px-20 py-10'>
        <Image alt='Maskan' height={50} width={150} src="/white.png"/>
        <ul className='flex items-center text-xs uppercase font-medium text-white [&>*]:px-3 [&>*]:border-r [&>*]:border-gray-300 px-4 md:px-10'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Company Profile</Link>
            </li>
            <li>
            <HoverCard closeDelay={100} openDelay={0}>
            <HoverCardTrigger>Generator Sets</HoverCardTrigger>
            <HoverCardContent className='mt-3 bg-primary ring-theme/90 text-white'>
                <ul>
                {generatorsets.map((v,i)=> <li className='my-2' key={i}>
                    <Link href={v.link}>{v.title}</Link>
                    {i!==generatorsets.length-1&&<Separator orientation='horizontal' className=' bg-gray-400 my-2'/>}
                </li>)}
                </ul>
            </HoverCardContent>
            </HoverCard>
          
            </li>
            <li>
                <Link href="/">SYNCHRON SYSTEM</Link>
            </li>
            <li>
                <Link href="/">Special Project</Link>
            </li>
            <li>
                <Link href="/">Solar</Link>
            </li>
            <li  >
                <Link href="/">Contact</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar