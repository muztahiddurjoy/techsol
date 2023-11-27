import Image from 'next/image'
import React from 'react'

const NoteFromDirector = () => {
  return (
    <div className='mt-10 md:px-20 px-3  2xl:px-[364px]'>
        <p className='mt-5 text-primary text-2xl font-medium'>A note from the director about Techsol quality</p>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
            <Image src="/saiful.jpg" height={500} width={500} alt='Saiful' className=''/>
            <div className='flex flex-col items-end md:col-span-2 md:pl-10'> <p className='text-right text-gray-700 leading-[40px]'>We are always absolutely unapologetic about our quality assurance and I think, this is a major reason for us to attract so many customers from all over the globe. There are many who work in the same field as us, but not all work with unquestionable integrity and dedication. We have customers who has been working with us for decades. There must be a good reason why they chose to stick with us for so long.</p>
            <Image src="/signature.png" height={400} width={500} alt='' className='w-[250px] mt-10'/>
            </div>
        </div>
    </div>
  )
}

export default NoteFromDirector