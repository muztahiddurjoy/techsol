import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CompanyBox from './CompanyBox/CompanyBox'

const CompanyBody = () => {
  return (
    <div className=' py-10 md:px-20 px-5 2xl:px-[384px]'>
        <p className='text-center text-3xl text-gray-600'>Vision & Mission</p>
        <CompanyBox align='right' image='/vission.jpg'  text={`Techsol is committed to delivering robust, efficient, and eco-friendly power solutions in response to the escalating demands of a rapidly evolving technological landscape.
<br/>
Our vision extends beyond the realm of business. We aspire to inspire humanity, fostering a sense of responsibility towards our planet. We are dedicated to implementing sustainable solutions that contribute to the preservation and well-being of Mother Earth. `}/>
        <p className='text-center text-3xl text-gray-600 mt-10 mb-5'>How We Started</p>
        <CompanyBox align='left' image='/mission.jpg' text={`Techsol Engineering Limited, founded by Mohammad Shaiful Islam in 2001, started as a small team led by Islam himself, a highly skilled and dedicated engineer. Over time, this team has grown into a large group of committed engineers.
<br/> <br/>
Techsol has gained recognition both locally and internationally over the years. The company is proud to have received numerous awards and holds ISO 9001:2008 and ISO 14001:2004 certifications, reflecting the quality, durability, and efficiency of its products and services.
<br/><br/>
The founder of Techsol has expressed the company's commitment to contributing to technological advancements and inventions, while also preserving the ecological balance of our planet. He believes that providing a reliable and eco-friendly power supply is a key step towards this goal.
Our team ,"At Techsol, we foster a culture of collaboration and mutual respect among our team members and employees. Our success is a testament to the collective skills and contributions of our dedicated and proficient team. We firmly believe that our strength lies in our un
ity and shared commitment to excellence."
`}/>
        <p className='text-center text-3xl text-gray-600 mt-10 mb-5'>Our Team</p>
        <CompanyBox align='right' image='/team.jpg' text={`At Techsol we promote attitudes that contribute to internal cooperation and support amongst our team members and employees. Our success depends upon the combined capabilities and contributions of our highly skilled and hard working team.`}/>
        <p className='text-center text-3xl text-gray-600 mt-10 mb-5'>Core Value & Ethics</p>
        <CompanyBox align='left' image='/core.jpg' text={`Techsol's core value is to play a positive role in our world; moving forward towards new innovations and technologies, building our people towards success and protecting our environment simultaneously. We are aware of the necessity of a flexible and meticulous quality system in a highly competitive global market, which is why our approach is to continuously improve, aimed for reinforce customer satisfaction and meeting customer expectations. We ensure our integrity towards our customers in our values and building long term relations with our customers is what we always look forward to.`}/>
        <p className='text-center text-3xl text-gray-600 mt-10 mb-5'>Environment, Health & Safety</p>
        <CompanyBox align='right' image='/enviromen.jpg' text={`Techsol's core value is to play a positive role in our world; moving forward towards new innovations and technologies, building our people towards success and protecting our environment simultaneously. We are aware of the necessity of a flexible and meticulous quality system in a highly competitive global market, which is why our approach is to continuously improve, aimed for reinforce customer satisfaction and meeting customer expectations. We ensure our integrity towards our customers in our values and building long term relations with our customers is what we always look forward to.`}/>
        {/* <div className="block md:hidden">
            <Image src="/mission.jpg" height={500} width={300} className='h-full w-full md:pl-20 object-cover content-center' alt=''/>
        </div>
        <div className="col-span-3 mt-5 md:mt-0">
        <p className='font-bold text-gray-600'>Techsol Engineering Limited. inaugurated its journey of success in the year 2001 by their founder, Mohammad Shaiful Islam. Being a extraordinarily talented and hard working engineer himself, he formed a small team to work with which later turned into hundreds of other dedicated engineers directed by him. With it's passing years of glory, Techsol has earned its recognition not only locally but in the international market. With illustrious achievements of multitudinous awards and proud ISO 9001:2008 and ISO 14001:2004 holders, Techsol takes pride in its quality, durability and efficiency of its products and services. Techsol's founder says, "we want to contribute the most we can in the advancement of new technologies and inventions in the world while maintaining the ecological balance of our mother planet and a reliable and eco power supply is the way to go".</p>
        <p className='text-primary my-7 font-bold text-3xl'>Vision and Mission</p>
        <p className='text-gray-600'>Techsol's Mission is to provide durable, efficient and environment friendly power solutions to a fast-rising technologically advanced world.
<br />
Our Vision is to use business to inspire fellow humans and implement solutions for our mother earth.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <Image height={70} width={200} src="/award.png" className='p-3' alt=''/>
            </Link>
           
        </div>
        </div>
        <div className="md:col-span-2 hidden md:block">
            <Image src="/mission.jpg" height={500} width={500} className='h-full w-full md:pl-20 object-cover object-left' alt=''/>
        </div> */}
    </div>
  )
}

export default CompanyBody