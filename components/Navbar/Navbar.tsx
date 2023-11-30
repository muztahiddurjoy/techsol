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
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  
import { generatorsets } from './genetatorSets'
import { Separator } from '../ui/separator'
import { ChevronDown, ChevronUp, Menu, Search, X } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { useToast } from '../ui/use-toast'
import axios from 'axios'
import { apiurl } from '@/apiurl'
import { Toaster } from '../ui/toaster'
import { CategoryType } from '@/types/types'
  
const Navbar = () => {
    const [scroll, setscroll] = useState(0)
    const [search, setsearch] = useState('')
    const [open, setopen] = useState(false)
    const [quoteOpen, setquoteOpen] = useState(false)
    //quoteData
    const [name, setname] = useState('')
    const [company, setcompany] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')
    const [categories, setcategories] = useState<Array<CategoryType>>([])
    const {toast} = useToast()
    useLayoutEffect(() => {
      if(typeof window!="undefined"){
        window.addEventListener('scroll',()=>{
            setscroll(window.scrollY)
        })
      }
      axios.get(`${apiurl}/category`).then((res)=>{
        setcategories(res.data.result)
      }).catch(err=> console.log(err))
    }, [])

    const isValidEmail = (email:string) => {
      // Regular expression for basic email validation
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };
  
    const sendMessage = ()=>{
      if(!name){
        toast({
          title:'Name missing',
          description:'Please enter your name',
          variant:'destructive'
        })
      }
      else if(!email){
        toast({
          title:'Email missing',
          description:'Please enter your email',
          variant:'destructive'
        })
      }
      else if(!isValidEmail(email)){
        toast({
          title:'Email Invalid',
          description:'Please enter a valid email',
          variant:'destructive'
        })
      }
      else if(!phone){
        toast({
          title:'Phone Number missing',
          description:'Please enter your phone number',
          variant:'destructive'
        })
      }
      else if(!company){
        toast({
          title:'Company missing',
          description:'Please enter your company name',
          variant:'destructive'
        })
      }
      else if(!message){
        toast({
          title:'Message missing',
          description:'Please enter your message',
          variant:'destructive'
        })
      }
      else {
        axios.post(`${apiurl}/contact`,{
          companyName:company,
          email,
          message,
          name,
          phone
        }).then((res)=>{
          if(res.status==200){
            setname('')
            setemail('')
            setcompany('')
            setphone('')
            setmessage('')
            toast({
              title:'Message Sent',
              description:'We will contact with you soon',
              className:'bg-green-600 text-white border-green-800'
            })
          }
        })
      }
  
    }
    
  return (
    <>
    <div className='absolute top-0 right-0 left-0 grid lg:flex grid-cols-7 xl:justify-center items-center md:px-10 md:py-10 px-3 py-3 z-40'>
      <div className="block lg:hidden" onClick={e=> setopen(true)}>
        <Menu className='stroke-white'/>
      </div>
      <div className="col-span-3 lg:col-span-1 flex items-center justify-start md:justify-start">
        <Link href="/" className='lg:pl-0'><Image alt='Techsol' height={70} width={150} src="/white.png"/></Link>
      </div>
        <ul className='lg:flex items-center hidden text-xs uppercase font-medium text-white [&>*]:px-3 [&>*]:border-r [&>*]:border-gray-300 px-4 lg:px-10'>
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
                  {categories.map((v,i)=> <li className='my-2' key={i}>
                    <Link href={`/product-category/${v.id}`}>{v.name}</Link>
                    {i!==categories.length-1&&<Separator orientation='horizontal' className=' bg-gray-400 my-2'/>}
                  </li>)}
                </ul>
            </HoverCardContent>
            </HoverCard>
            </li>
            <li>
                <Link href="/hvac-solution">HVAC Solution</Link>
            </li>
            <li>
                <Link href="/power-solution">Power Solution</Link>
            </li>
            <li>
                <Link href="/solar">Solar</Link>
            </li>
            <li  >
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <div className="md:flex hidden items-center">
        {/* <HoverCard closeDelay={100} openDelay={0}>
            <HoverCardTrigger><Search className='stroke-white' height={15}/></HoverCardTrigger>
            <HoverCardContent className='mt-3 bg-primary ring-theme/90 text-white'>
                <div className="grid grid-cols-10">
                  <div className="col-span-8">
                    <Input value={search} onChange={e=> setsearch(e.target.value)} placeholder='Search...' className='bg-white border-white text-black'/>
                  </div>
                  <div className="col-span-2 bg-primary">
                    <Button className='bg-blue-800 hover:bg-blue-900'><Search height={15} className='stroke-white'/></Button>
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard> */}
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-end">
        <Button size="sm" className='ml-3 rounded-full border-2 border-primary hover:bg-primary/60' onClick={e=> setquoteOpen(true)}>Request a Quote</Button>
        </div>
    </div>
    <div className={`fixed bg-white transition-all ease-in-out duration-300 ${scroll>300&&'top-0 opacity-100'} ${scroll<50?'md:py-10 opacity-0 -z-10':'md:py-2 z-40'} right-0 left-0 grid lg:flex xl:justify-center grid-cols-7 items-center md:px-10  px-3 py-3`}>
      <div className="block lg:hidden" onClick={e=> setopen(true)}>
        <Menu className='stroke-black'/>
      </div>
      <div className="col-span-3 lg:col-span-1 flex items-center justify-start lg:justify-start">
        <Link href="/" className='pl-0'><Image alt='Maskan' height={70} width={150} src="/logo.png"/></Link>
      </div>
        <ul className='lg:flex items-center hidden text-xs uppercase font-medium text-gray-600 [&>*]:px-3 [&>*]:border-r [&>*]:border-gray-600 px-4 lg:px-10'>
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
                {categories.map((v,i)=> <li className='my-2' key={i}>
                    <Link href={`/product-category/${v.id}`}>{v.name}</Link>
                    {i!==categories.length-1&&<Separator orientation='horizontal' className=' bg-gray-400 my-2'/>}
                  </li>)}
                </ul>
            </HoverCardContent>
            </HoverCard>
            </li>
            <li>
                <Link href="/hvac-solution">HVAC Solution</Link>
            </li>
            <li>
                <Link href="/power-solution">Power Solution</Link>
            </li>
            <li>
                <Link href="/solar">Solar</Link>
            </li>
            <li  >
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <div className="md:flex hidden items-center">
        {/* <HoverCard closeDelay={100} openDelay={0}>
            <HoverCardTrigger><Search className='stroke-gray-600' height={15}/></HoverCardTrigger>
            <HoverCardContent className='mt-3 bg-primary ring-theme/90 text-white'>
                <div className="grid grid-cols-10">
                  <div className="col-span-8">
                    <Input value={search} onChange={e=> setsearch(e.target.value)} placeholder='Search...' className='bg-white border-white text-black'/>
                  </div>
                  <div className="col-span-2 bg-primary">
                    <Button className='bg-blue-800 hover:bg-blue-900'><Search height={15} className='stroke-white'/></Button>
                  </div>
                </div>
            </HoverCardContent>
            </HoverCard> */}
        </div>
        <div className="col-span-3 md:col-span-2 flex justify-end">
        <Button size="sm" className='ml-3 rounded-full border-2 border-primary hover:bg-primary/60' onClick={e=> setquoteOpen(true)}>Request a Quote</Button>
        </div>
    </div>
    <div onClick={()=> window.scrollTo({top:0,behavior:'smooth'})} className={`rounded-full ${scroll<500?'opacity-0 mt-10 hidden':'opacity-100'} z-50 transition-all ease-in-out duration-300 hover:bg-white cursor-pointer fixed bottom-5 border border-blue-400 h-10 w-10 flex items-center justify-center right-5`}>
      <ChevronUp height={20} className='stroke-blue-400'/>
    </div>
    <div className={`fixed block lg:hidden top-0 bottom-0 ${open?'left-0':'-left-60'} bg-black w-[230px] z-50 transition-all ease-in-out duration-300`}>
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
                {categories.map((v,i)=> <li key={i} className='my-2'>
                  <Link href={v.link}>{v.name}</Link>
                </li>)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/hvac-solution" className='p-3'>HVAC Solution</Link>
          <Separator orientation='horizontal' className='bg-gray-500 my-4'/>
        </li>
        <li>
          <Link href="/power-solution" className='p-3'>Power Solution</Link>
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

    <Dialog open={quoteOpen} onOpenChange={e=> setquoteOpen(p=> !p)}>
    <DialogContent className='rounded-lg'>
      <DialogHeader>
        <DialogTitle className='flex items-center flex-col justify-center'>
        <Image alt='Maskan' height={70} width={150} className='w-32' src="/logo.png"/>
        <p className='text-gray-500 text-sm mt-5'>Please contact us to get information about prices and our company.</p>
        </DialogTitle>
        <DialogDescription className='mt-5'>
          <Input className='rounded-full my-2 border-gray-400' placeholder='Name*' value={name} onChange={e=> setname(e.target.value)}/>
          <Input className='rounded-full my-2 border-gray-400' placeholder='Company Name*' value={company} onChange={e=> setcompany(e.target.value)}/>
          <Input className='rounded-full my-2 border-gray-400' placeholder='Phone*' value={phone} onChange={e=> setphone(e.target.value)}/>
          <Input className='rounded-full my-2 border-gray-400' placeholder='Email*' value={email} onChange={e=> setemail(e.target.value)}/>
          <Textarea rows={4} className='rounded-xl my-2 border-gray-400' placeholder='Message*' value={message} onChange={e=> setmessage(e.target.value)}/>
          <Button className='rounded-full' onClick={sendMessage}>Send</Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
    <Toaster/>
  </Dialog>


    </>
  )
}

export default Navbar