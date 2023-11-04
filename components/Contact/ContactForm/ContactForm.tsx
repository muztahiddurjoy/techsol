"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const ContactForm = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [company, setcompany] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')
  const sendMessage = ()=>{

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
        <Button className='mt-5 rounded-full'>Send</Button>
      </div>
    </div>
  )
}

export default ContactForm