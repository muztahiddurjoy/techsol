import React from 'react'
import ContactCard from './ContactCard/ContactCard'

const ContactGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-16 lg:px-20 2xl:px-[384px] md:-mt-20 2xl:-mt-24 -mt-16 md:gap-x-5'>
        <ContactCard title='Talk to sales' desc='Interested in our energy ? Just pick up the phone and call us.' link='tel:+88 02 222274416 - 19' linkText='+88 02 222274416 - 19'/>
        <ContactCard title='Contact support' desc='To contact us, you can reach us by e-mail.' link='mailto:info@techsolbd.com' linkText='info@techsolbd.com'/>
    </div>
  )
}

export default ContactGrid