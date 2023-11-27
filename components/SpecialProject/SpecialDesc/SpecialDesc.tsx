import Image from 'next/image'
import React from 'react'

const SpecialDesc = () => {
  return (
    <div className='my-10 px-5 md:px-20 grid grid-cols-1 md:grid-cols-6 2xl:px-[384px]'>
        <div className="md:col-span-4 text-gray-600 md:pr-10">
            <p className='font-semibold text-2xl mt-10'>Power Solutions</p>
            <p className="mt-3 text-gray-600">In the rapidly evolving world of technology, the demand for reliable and efficient <b>Power solutions</b> has never been greater. At Power Solution, we understand the unique energy needs of businesses and are committed to providing tailored solutions that not only power your operations but also contribute to a sustainable future.</p>
            <p className='font-semibold text-2xl mt-10'>Power Generation and Distribution</p>
            <p className="mt-3 text-gray-600">Our comprehensive suite of services includes state-of-the-art power generation and distribution systems. Whether your business requires solar panels, wind turbines, or traditional power generators, we have the expertise to deliver the best solution for your needs.</p>
            <p className='font-semibold text-2xl mt-10'>Energy Management and Optimization</p>
            <p className="mt-3 text-gray-600">Beyond power generation, we offer energy management and optimization services to help you maximize your energy efficiency. Our smart grid solutions enable real-time monitoring and control of your energy usage, helping you reduce waste and save on energy costs.</p>
            <p className='font-semibold text-2xl mt-10'>Sustainable and Eco-friendly Solutions</p>
            <p className="mt-3 text-gray-600">At Power Solution, we are deeply committed to environmental sustainability. We use advanced technologies and innovative designs that not only reduce your carbon footprint but also result in significant energy cost savings. Our solutions include the use of reduced harmful volatile organic compound paints and biodegradable products in our manufacturing processes.</p>
            <p className='font-semibold text-2xl mt-10'>Our Commitment</p>
            <p className="mt-3 text-gray-600">We believe in the power of innovation to create a sustainable future. Our team of dedicated engineers and professionals work tirelessly to deliver reliable and eco-friendly power solutions. We are proud to hold ISO 9001:2008 and ISO 14001:2004 certifications, reflecting our commitment to quality assurance and environmental responsibility.
<br/> <br/>
At Power Solution, we're not just providing power solutions; we're powering a brighter, greener future. Contact us today and let's power your future together. </p>
        </div>
        <div className="md:col-span-2">
        <Image src="/maksanOne.png" height={200} width={400} className='w-full' alt=''/>
        </div>

    </div>
  )
}

export default SpecialDesc