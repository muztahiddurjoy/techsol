import ContactForm from '@/components/Contact/ContactForm/ContactForm'
import ContactGrid from '@/components/Contact/ContactGrid/ContactGrid'
import ContactMap from '@/components/Contact/ContactMap/ContactMap'
import Header from '@/components/Contact/Header/Header'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <ContactGrid/>
    <div className="2xl:px-[384px]">
    <ContactForm/>
    </div>
    <ContactMap/>
    <Footer/>
    </>
  )
}

export default Contact