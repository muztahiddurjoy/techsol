import Image from 'next/image'
import React from 'react'

const SpecialDesc = () => {
  return (
    <div className='my-10 px-5 md:px-20 grid grid-cols-1 md:grid-cols-6 2xl:px-[384px]'>
        <div className="md:col-span-4 text-gray-600">
            <p className="mb-5">Becasue of special demands to the installation and application of generator sets onsite, customers need customized generator sets or generator systems, special size, tanks capacity, output power, input and output connections and so on. In all the cases Enmaksan Power amends regular generator sets or designs new sets and power supply systems.</p>
            <p className="my-5">Throughfull customization of power equipment under special user requests is one of the strong point of Enmaksan Power.</p>
            <p className="my-5">Enmaksan Power also guarantees synchronization solutions for projects that require several generator sets to be connected in parallel by a modular power system providing a flexible power supply for special missions along with the benefits of redundancy, scalability, and safety。</p>
            <p className="my-5">Enmaksan Power sets are designed to get small footprints for easily being transported by truck or in containers, streamlining any mission and cutting logistics costs obviously. Meanwhile, the robust weatherproof and soundproof canopies also minimize damage to the generator set and help to work regularly in extreme weather conditions and harsh environments. Optional filters for heavy dusty environments protect the generator in windy areas, sandy deserts, etc.</p>
        </div>
        <div className="md:col-span-2">
        <Image src="/maksanOne.png" height={200} width={400} className='w-full' alt=''/>
        </div>

    </div>
  )
}

export default SpecialDesc