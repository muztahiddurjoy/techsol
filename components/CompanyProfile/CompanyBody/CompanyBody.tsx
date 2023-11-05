import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompanyBody = () => {
  return (
    <div className='grid grid-cols-5 py-10 md:px-20 px-5'>
        <div className="col-span-3">
        <p className='font-bold text-gray-600'>Enmaksan Power is a leader in providing innovative and reliable solutions in the field of power generation and management. Our organization is recognized as an industry-leading player in power outages and energy needs. Our determination to provide uninterrupted energy to our customers and our commitment to sustainable energy are important features that distinguish us in the industry.</p>
        <p className='text-primary my-7 font-bold text-3xl'>Vision and Mission</p>
        <p className='text-gray-600'>At Enmaksan Power, we believe in shaping the future of the energy sector. Our vision is to increase energy efficiency worldwide, promote environmental sustainability and provide best practices to meet energy needs without interruption. Our mission is to design innovative energy solutions, deliver high quality products and provide our customers with a reliable partnership in energy.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
            <Link href="#">
                <Image height={70} width={200} src="/9001.png" className='p-3' alt=''/>
            </Link>
            <Link href="#" className='ml-3'>
                <Image height={70} width={200} src="/9001.png" alt='' className='p-3'/>
            </Link>
            <Link href="#" className='ml-3'>
                <Image height={70} width={200} src="/9001.png" className='p-3' alt=''/>
            </Link>
            <Link href="#" className='ml-3'>
                <Image height={70} width={200} src="/9001.png" className='p-3' alt=''/>
            </Link>
        </div>
        </div>
        <div className="col-span-2">
            <Image src="/mission.jpg" height={500} width={300} className='h-full w-full md:pl-20' alt=''/>
        </div>
    </div>
  )
}

export default CompanyBody