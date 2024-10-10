import React from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSection from '../component/hero-section';
import Productslider from '../component/ProductSlider';


// images
import HeroIMage from '../images/dealership/delearship-banner.webp'
import Womenbike from '../images/dealership/daily-commute-bike.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FAQAccordion from "../component/FAQAccordion"
import dailycommuteicon1 from "../images/icons/warrantyicon.png"
import { text } from '@fortawesome/fontawesome-svg-core';
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
  {img: dailycommuteicon1,title:"Lifetime Warranty:", text: "On all bikes for peace of mind."},
  {img: dailycommuteicon1,title:"Lifetime Warranty:", text: "On all bikes for peace of mind."},
]
const products=[
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:escooters},
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:miniscooter},
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:electricbike},
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:foldablecycle},
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:premiumcycle},
  {title:'e-Scooters',text:'Effortless urban mobility with style.',btntext:'Shop Bikes',btnlink:'#scooter',image:kickscooter},
]
const carditems = [
  {title: 'SKYPHER PRO',image:skypher, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'GALEXEON',image:galexeon, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'NEXARA',image:nexara, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'NEXARA',image:nexara, sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
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
      <div className="py-40 container mx-auto">
        <h1 className='text-dark md:pb-20 pb-10 text-center'>Clean, Timeless Designs for a <span className='text-grey'> Thrilling Ride</span></h1>
        <div className="flex lg:flex-row flex-col gap-7  items-center">
          <div className=" w-full md:w-2/6 ">
            <img src={Womenbike} alt="" className='w-full'/>
          </div>
          <div className=" w-full md:w-4/6">
         <div className="flex-col">
         <h2 className='text-dark pb-5 text-start text-3xl'>Experience the Future of Mobility, <span className='text-grey'> Our eBikes are crafted to transform your daily commute into a 
          joyful experience</span></h2>
          <p>They are not just bicycles. They are a masterpiece of aerodynamic design, meant to make your journey through life exhilarating. 
          At eBikeGo, we believe in the freedom and joy that cycling brings, making every ride more than just a commute.</p>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  text-start pt-7">
          {dailycommute.map((item, index) =>(
            <div  key={index} className="p-5 rounded-[20px] grey-gradient text-white">
              <img src={item.img} alt=""  /> 
              <h3 className='pt-5 pb-1 text-sm font-bold'>{item.title}</h3>
              <p className='text-sm'>{item.text}</p>
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
    <div className="py-40 container mx-auto">
  <h1 className='text-dark md:pb-20 pb-10 text-center'>Our Product Range</h1>
  {products.map((item, index) => (
  <div key={index}>
    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-5 pt-5`}>
      <img src={item.image} alt="" className="flex w-full md:w-4/6 h-full rounded-[20px]" />
      <div className="flex flex-col justify-between w-full md:w-2/6 rounded-[20px] bg-pink p-10">
        <div>
          <h1>{item.title}</h1>
          <p className='pb-[20px]'>{item.text}</p>
        </div>
        <div>
          <a href={item.btnlink} className='black-btn'>{item.btntext}</a>
        </div>
      </div>
    </div>
  </div>
))}



</div>


    </section>

    {/* locate section  */}
    <div className='h-screen flex items-end mb-[200px]' style={{ backgroundImage: "url(/src/images/bg-cycle.png)", backgroundPosition: 'center',backgroundSize: 'cover', }}>
        <div className="container mx-auto ">
          <div className="bg-[#D8D8D8CC] backdrop-blur-md rounded-[20px] p-20 backdrop-opacity-95 text-dark mb-[-100px]">
          <div className="flex flex-1 items-center mb-10 ">
            <div className="md:w-3/5 w-full gap-3">
              <h1>Drive the Future: Join Our Exclusive Dealership Network</h1>
          <h3 className='py-5'>Become a leader in electric mobility by joining our exclusive dealership network. With comprehensive training and the strength of a globally recognized brand, grab the opportunity to shape the future of electric vehicles and be a leader.</h3>
            </div>
            <div className="flex-initial w-1/12"></div>
            {/* <div className="flex-initial w-1/6">
              <h1>50+</h1>
              <p>Cities</p>
            </div>
            <div className="flex-initial w-1/6">
            <h1>100+</h1>
            <p>EBG Global Spaces</p>
            </div> */}
          </div>
          <a href="#" className='underline-btn  before:border-underline'>Locate your nearest center <FontAwesomeIcon icon="fa-solid fa-house" /></a>
          </div>
        </div>
    </div>          
    {/* locate section end  */} 

   
    {/* slider  */}
    <section className='bg-[#F7F7F7] pb-40'>
      <div className="container mx-auto text-center text-dark">
        <div className="flex items-center flex-col pt-40 pb-20">
            <h1 className='md:w-1/2'>Our featured collections</h1>
            <p className='md:w-1/2'>Discover the joy and freedom of cycling with our premium range of electric bikes. Start your journey with innovation, performance, and style.</p>
        </div>
        <Productslider carditems={carditems} />

        {/* map section  */}
        <div className="text-white rounded-lg mt-40 p-5 md:p-20 " style={{  
              backgroundImage: "url(/src/images/map.png)",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}>
            <h3 className='text-green-600 pb-5'>EBG Global Network™</h3>
            <h1 className='pb-10 md:pb-[300px]'>Powering eco-friendly commutes worldwide with the largest eCycle network.</h1>
            <a href="#" className='underline underline-offset-8'>Learn more </a>
        </div>
        {/* end map section  */}

      </div>
   </section>


    

 
    <section>
      <div className='container mx-auto rounded-[20px] grey-gradient'>
        <div className="flex items-center justify-between text-white py-10">
          <div className='w-4/5'>
            <h1>Wish to know more about eBG Global?</h1>
            <p>The best way to experience our eCycles is by riding one yourself. If you have any questions about our eCycles, features, or how they can fit into your daily life, we’re here to help.</p>
          </div>
          <a href="#" className='white-btn'>Get in touch</a>
        </div>
          
      </div>
    </section>


     
    </>
  );
}
