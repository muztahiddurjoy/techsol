"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { generatorsets } from './genetatorSets'
import { Separator } from '../ui/separator'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
  
const Navbar = () => {
    const [scroll, setscroll] = useState(0)
    const [search, setsearch] = useState('')
    useLayoutEffect(() => {
      if(typeof window!="undefined"){
        window.addEventListener('scroll',()=>{
            setscroll(window.scrollY)
            console.log(window.screenY)
        })
      }
    }, [])
    
  return (
    <>
    <div className='absolute top-0 right-0 left-0 flex items-center px-20 py-10 z-40'>
        <Link href="/"><Image alt='Maskan' height={50} width={150} src="/white.png"/></Link>
        <ul className='md:flex items-center hidden text-xs uppercase font-medium text-white [&>*]:px-3 [&>*]:border-r [&>*]:border-gray-300 px-4 md:px-10'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/company-profile">Company Profile</Link>
            </li>
            <li>
            <HoverCard closeDelay={100} openDelay={0}>
            <HoverCardTrigger className='flex items-center'>Generator Sets <ChevronDown height={10}/> </HoverCardTrigger>
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
                <Link href="/synchronization-system">SYNCHRON SYSTEM</Link>
            </li>
            <li>
                <Link href="/special-project">Special Project</Link>
            </li>
            <li>
                <Link href="/solar">Solar</Link>
            </li>
            <li  >
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <div className="flex items-center">
        <HoverCard closeDelay={100} openDelay={0}>
            <HoverCardTrigger><Search className='stroke-white' height={15}/></HoverCardTrigger>
            <HoverCardContent className='mt-3 bg-primary ring-theme/90 text-white'>
                <div className="grid grid-cols-10">
                  <div className="col-span-8">
                    <Input value={search} onChange={e=> setsearch(e.target.value)} placeholder='Search...' className='bg-white border-white text-black'/>
                  </div>
                  <div className="col-span-2 bg-primary">
                    <Button className='bg-red-800 hover:bg-red-900'><Search height={15} className='stroke-white'/></Button>
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard>
        </div>
        <Button size="sm" className='ml-3 rounded-full border-2 border-primary hover:bg-primary/60'>Request a Quote</Button>
    </div>
    <div onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} className={`rounded-full ${scroll<500?'opacity-0 mt-10':'opacity-100'} z-50 transition-all ease-in-out duration-300 hover:bg-white cursor-pointer fixed bottom-5 border border-red-400 h-10 w-10 flex items-center justify-center right-5`}>
      <ChevronUp height={20} className='stroke-red-400'/>
    </div>
    </>
  )
}

export default Navbar