import React from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSection from '../component/hero-section';
import Productslider from '../component/ProductSlider';
import Cta from '../component/cta';
import { LuArrowRight } from "react-icons/lu";



// images
import HeroIMage from '../images/dealership/delearship-banner.webp'
import Womenbike from '../images/dealership/daily-commute-bike.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FAQAccordion from "../component/FAQAccordion"
import dailycommuteicon1 from "../images/icons/warrantyicon.png"
import dailycommuteicon2 from "../images/icons/warrantyicon2.png"
import dailycommuteicon3 from "../images/icons/warrantyicon3.png"
import { text } from '@fortawesome/fontawesome-svg-core';
import locateimg from '../images/home/cycle.webp' 
// prodcuts
import escooters from '../images/dealership/e-scooters.webp'
import miniscooter from '../images/dealership/mini-escooter.webp'
import electricbike from '../images/dealership/electircmotorcycle.webp'
import foldablecycle from '../images/dealership/foldablecycle.webp'
import premiumcycle from '../images/dealership/premimcycle.webp'
import kickscooter from '../images/dealership/electrickickscooter.webp'

// images
import skypher from '../images/dealership/skyperpro.webp'
import galexeon from '../images/dealership/galexeon.webp'
import nexara from '../images/dealership/nexara.webp'


const dailycommute =[ 
  {img: dailycommuteicon1,title:"Lifetime Warranty:", text: "On all bikes for peace of mind."},
  {img: dailycommuteicon3,title:"Hassle-Free Returns: :", text: "Free ground shipping and easy returns."},
  {img: dailycommuteicon2,title:"Proudly Made:", text: "Designed, engineered, and assembled in India."},
]
const products=[
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:escooters},
  {title:'Mini e-Scooter',text:'Compact and efficient, perfect for short commutes.',btntext:'Shop Bikes',btnlink:'#scooter',image:miniscooter},
  {title:'Electric Motorcycles',text:'Power and performance for longer rides.',btntext:'Shop Bikes',btnlink:'#scooter',image:electricbike},
  {title:'Foldable e-Cycles',text:'Portable and convenient, great for easy storage.',btntext:'Shop Bikes',btnlink:'#scooter',image:foldablecycle},
  {title:'Premium e-Cycles',text:'Luxury and comfort combined for the ultimate ride.',btntext:'Shop Bikes',btnlink:'#scooter',image:premiumcycle},
  {title:'Electric Kick-Scooter',text:'Lightweight and fun, ideal for quick errands.',btntext:'Shop Bikes',btnlink:'#scooter',image:kickscooter},
]
const carditems = [
  {title: 'SKYPHER PRO',image:skypher, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'GALEXEON',image:galexeon, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'NEXARA',image:nexara, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
]



export default function About() {
  return (
    <>
    <HeroSection
      backgroundImage={HeroIMage}
      hasOverlay={false}
      backgroundPosition='top'
    />
    

    {/* sec 2 */}
    <section>
      <div className="md:py-40 py-20 container mx-auto">
        <h1 className='text-dark md:pb-20 pb-10 text-center'>Clean, Timeless Designs for a <span className='text-grey font-bold'> Thrilling Ride</span></h1>
        <div className="flex lg:flex-row flex-col gap-7  items-center">
          <div className=" w-full md:w-2/6 ">
            <img src={Womenbike} alt="" className='h-full object-cover'/>
          </div>
          <div className=" w-full md:w-4/6">
         <div className="flex-col">
         <h1 className='text-dark pb-5 text-start text-2xl'>Experience the Future of Mobility, <span className='text-grey'> Our eBikes are crafted to transform your daily commute into a 
          joyful experience</span></h1>
          <p>They are not just bicycles. They are a masterpiece of aerodynamic design, meant to make your journey through life exhilarating. 
          At eBikeGo, we believe in the freedom and joy that cycling brings, making every ride more than just a commute.</p>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  text-start pt-7">
          {dailycommute.map((item, index) =>(
            <div  key={index} className="p-5 rounded-[20px] grey-gradient text-white">
              <img src={item.img} alt=""  /> 
              <h3 className='pt-5 pb-1 text-sm font-bold'>{item.title}</h3>
              <p className='text-sm text-white'>{item.text}</p>
            </div>
          )
          )}
        </div>
          </div>
        </div>
      </div>
    </section>
    

    {/* products  */}
    <section>
    <div className="md:pb-40 pb-20 container mx-auto">
  <h1 className='text-dark md:pb-20 pb-10 text-center'>Our Product Range</h1>
  {products.map((item, index) => (
  <div key={index}>
    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-5 pt-5`}>
      <img src={item.image} alt="" className="flex w-full md:w-4/6 h-full rounded-[20px]" />
      <div className="flex flex-col justify-between w-full md:w-2/6 rounded-[20px] bg-pink p-10">
        <div>
          <h1 className='text-2xl'>{item.title}</h1>
          <p className='pb-[20px]'>{item.text}</p>
        </div>
        <div>
          <a href={item.btnlink} className='black-btn gap-2 flex items-center w-fit'>{item.btntext} <LuArrowRight /></a>
        </div>
      </div>
    </div>
  </div>
))}



</div>


    </section>
     {/* locate section  */}
     <div className='flex items-end mb-[200px]  bg-center bg-cover' style={{ backgroundImage: `url(${locateimg})`,backgroundPosition: 'center',backgroundSize: 'cover', }}>
        <div className="container mx-auto pt-[400px]">
          <div className="bg-[#D8D8D8CC] backdrop-blur-md rounded-lg p-10  md:p-20  text-dark mb-[-100px]">
          {/* <h3 className='pb-5'>Drive the Future: Join Our Exclusive Dealership Network</h3> */}
          <div className="flex flex-1 flex-col md:flex-row items-start md:items-center md:mb-10 mb-6">
            <div className="w-full md:w-3/5 gap-3">
              <h2>Drive the Future: Join Our Exclusive Dealership Network</h2>
            </div>
            
           </div>  
          <p className='pb-10 md:w-2/3 w-full'>Become a leader in electric mobility by joining our exclusive dealership network. With comprehensive training and the strength of a globally recognized brand, grab the opportunity to shape the future of electric vehicles and be a leader.</p>
          <a href="#" className='underline-btn  before:border-underline flex items-center w-fit gap-2'>Locate your nearest center <LuArrowRight /></a>
          </div>
        </div>
    </div>          
    {/* locate section end  */} 

   
    {/* slider  */}
    <section className='bg-[#F7F7F7] md:pb-40 pb-20'>
      <div className="container mx-auto text-center text-dark">
        <div className="flex items-center flex-col md:pt-30 pt-20 pb-10">
            <h1>Our featured collections</h1>
            <p className='md:w-1/2 py-[10px]'>Discover the joy and freedom of cycling with our premium range of electric bikes. Start your journey with innovation, performance, and style.</p>
        </div>
        <Productslider carditems={carditems} />

    

      </div>
   </section>


   <Cta  title='Discover Your Favorite Bike' link="#"/>

     
    </>
  );
}
