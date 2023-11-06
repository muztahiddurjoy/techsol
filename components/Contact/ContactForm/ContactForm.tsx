"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import axios from 'axios'
import { apiurl } from '@/apiurl'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
const ContactForm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [company, setcompany] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')
  const {toast} = useToast()
  
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
    <div className='mt-20'>
      <p className='text-center text-3xl lg:text-4xl text-primary font-bold'>Contact Form</p>
      <div className="mt-6 md:px-44 lg:px-60 px-5">
        <Input value={name} onChange={e=> setname(e.target.value)} placeholder='Name*' className='rounded-full border-gray-400'/>
        <Input value={company} onChange={e=> setcompany(e.target.value)} placeholder='Company Name*' className='rounded-full border-gray-400 mt-4'/>
        <Input value={phone} onChange={e=> setphone(e.target.value)} placeholder='Phone*' className='rounded-full border-gray-400 mt-4'/>
        <Input value={email} onChange={e=> setemail(e.target.value)} placeholder='Email*' className='rounded-full border-gray-400 mt-4'/>
        <Textarea value={message} onChange={e=> setmessage(e.target.value)} placeholder='Message*' className='rounded-xl border-gray-400 mt-4' rows={5}/>
        <Button className='mt-5 rounded-full' onClick={sendMessage}>Send</Button>
      </div>
      <Toaster/>
    </div>
  )
}

export default ContactForm