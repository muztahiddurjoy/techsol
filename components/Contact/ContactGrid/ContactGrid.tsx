import React from 'react'
import ContactCard from './ContactCard/ContactCard'

const ContactGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-16 lg:px-20 2xl:px-60 md:-mt-20 -mt-16 md:gap-x-5'>
        <ContactCard title='Talk to sales' desc='Interested in our energy ? Just pick up the phone and call us.' link='tel:+90 507 812 17 09' linkText='+90 507 812 17 09'/>
        <ContactCard title='Contact support' desc='To contact us, you can reach us by e-mail.' link='mailto:info@enmaksanpower.com' linkText='info@enmaksanpower.com'/>
    </div>
  )
}

export default ContactGrid