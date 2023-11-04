import { ContactCard } from '@/types/types'
import React from 'react'

const ContactCard = ({desc,link,linkText,title}:ContactCard) => {
  return (
    <div className='bg-white z-30 p-10 flex items-center justify-center flex-col'>
    <p className='font-bold text-lg text-gray-700'>{title}</p>
    <p className='text-gray-600 mt-3 text-sm font-medium text-center'>{desc}</p>
    <div className="mt-5">
            <a href={link} className='font-semibold text-primary transition-colors ease-in-out duration-300 border-b-2 hover:text-black hover:border-primary py-2'>{linkText}</a>
    </div>
    </div>
  )
}

export default ContactCard