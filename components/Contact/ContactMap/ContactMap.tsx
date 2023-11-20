import React from 'react'

const ContactMap = () => {
  return (
    <div className='md:px-20 px-5 lg:px-52 mt-20'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3559798718725!2d90.36334897447172!3d23.770334788012466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1bc9c4e2d75%3A0xdd9580a6eaf5de73!2sColour%20top%20fashion%20002!5e0!3m2!1sen!2sbd!4v1699134511082!5m2!1sen!2sbd" width="100%" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <p className='text-primary text-3xl text-center font-bold mt-10 uppercase'>Techsol bd</p>
      <p className='text-gray-500 text-center mt-3 mb-20'> Ataturk Mah. Meric Cd. No:1/2B/84 Atasehir-ISTANBUL / TURKEY</p>
    </div>
  )
}

export default ContactMap