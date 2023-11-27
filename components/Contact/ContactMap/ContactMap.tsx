import React from 'react'

const ContactMap = () => {
  return (
    <div className='md:px-20 px-5 lg:px-52 mt-20 2xl:px-[384px]'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7044700228093!2d90.40430959999999!3d23.7935359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd52fa5713%3A0xc24eadf7c004ac4d!2sTechsol%20Engineering%20Limited!5e0!3m2!1sen!2sbd!4v1701109338480!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <p className='text-primary text-3xl text-center font-bold mt-10 uppercase'>Techsol bd</p>
      <p className='text-gray-500 text-center mt-3 mb-20'>Ataturk Tower (7th Floor)
22 Kamal Ataturk Avenue
Banani, Dhaka-1213, Bangladesh.</p>
    </div>
  )
}


export default ContactMap