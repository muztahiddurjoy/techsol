"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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
              <Link href="/">Generator Sets</Link>
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