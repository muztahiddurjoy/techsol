import Footer from '@/components/Footer/Footer'
import AllProductsCarousel from '@/components/Home/AllProductsCarousel/AllProductsCarousel'
import Header from '@/components/Home/Header/Header'
import InfoSecond from '@/components/Home/InfoSecond/InfoSecond'
import WhoWeAre from '@/components/Home/WhoWeAre/WhoWeAre'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <InfoSecond/>
    <WhoWeAre/>
    <AllProductsCarousel/>
    <Footer/>
    </>
  )
}
