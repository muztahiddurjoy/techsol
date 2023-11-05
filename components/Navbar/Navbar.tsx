"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { generatorsets } from './genetatorSets'
import { Separator } from '../ui/separator'
import { ChevronDown, ChevronUp, Menu, Search, X } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
  
const Navbar = () => {
    const [scroll, setscroll] = useState(0)
    const [search, setsearch] = useState('')
    const [open, setopen] = useState(false)
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
    <div className='absolute top-0 right-0 left-0 grid md:flex grid-cols-7 items-center md:px-20 md:py-10 px-3 py-3 z-40'>
      <div className="block md:hidden" onClick={e=> setopen(true)}>
        <Menu className='stroke-white'/>
      </div>
      <div className="col-span-3 md:col-span-1 flex items-center justify-center md:justify-start">
        <Link href="/" className='pl-4 md:pl-0'><Image alt='Maskan' height={70} width={150} src="/white.png"/></Link>
      </div>
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
        <div className="md:flex hidden items-center">
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
        <div className="col-span-3 md:col-span-1 flex justify-end">
        <Button size="sm" className='ml-3 rounded-full border-2 border-primary hover:bg-primary/60'>Request a Quote</Button>
        </div>
    </div>
    <div onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} className={`rounded-full ${scroll<500?'opacity-0 mt-10':'opacity-100'} z-50 transition-all ease-in-out duration-300 hover:bg-white cursor-pointer fixed bottom-5 border border-red-400 h-10 w-10 flex items-center justify-center right-5`}>
      <ChevronUp height={20} className='stroke-red-400'/>
    </div>
    <div className={`fixed block md:hidden top-0 bottom-0 ${open?'left-0':'-left-60'} bg-black w-[230px] z-50 transition-all ease-in-out duration-300`}>
      <X className='absolute right-3 top-3 stroke-white' onClick={e=> setopen(false)}/>
      <ul className='pt-14 text-white font-semibold text-sm uppercase'>
        <li>
          <Link href="/" className='p-3'>Home</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/company-profile" className='p-3'>Company Profile</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Category</AccordionTrigger>
            <AccordionContent>
              <ul className='text-xs pl-5 mt-5'>
                {generatorsets.map((v,i)=> <li key={i} className='my-2'>
                  <Link href={v.link}>{v.title}</Link>
                </li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/synchronization-system" className='p-3'>SYNCHRON SYSTEM</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/special-project" className='p-3'>Special Project</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/solar" className='p-3'>Solar</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/contact" className='p-3'>Contact</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar