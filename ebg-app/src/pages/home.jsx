import React from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSection from '../component/hero-section';
import HeroIMage from '../images/hero-back.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FAQAccordion from "../component/FAQAccordion"

import { text } from '@fortawesome/fontawesome-svg-core';

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Tailwind CSS?",
    answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
  },
  {
    question: "What is an Accordion?",
    answer: "An accordion is a UI pattern where content is shown or hidden based on user interaction.",
  },
];

const carditems = [
  {title: 'Skypher Pro',image:'/src/images/cycle.png', sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'Skypher Pro',image:'/src/images/cycle.png', sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'Skypher Pro',image:'/src/images/cycle.png', sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
]

const ownershipcard =[
  {sno: '1.' , title: 'eBikeGo Battery Protect', text: "Get peace of mind with our 5-year warranty that covers battery health and performance. If the battery capacity drops below 70%, we'll replace it, ensuring a smooth ride for years to come."},
  {sno: '2.' , title: 'eBikeGo Battery Protect', text: "Get peace of mind with our 5-year warranty that covers battery health and performance. If the battery capacity drops below 70%, we'll replace it, ensuring a smooth ride for years to come."},
  {sno: '3.' , title: 'eBikeGo Battery Protect', text: "Get peace of mind with our 5-year warranty that covers battery health and performance. If the battery capacity drops below 70%, we'll replace it, ensuring a smooth ride for years to come."},
  {sno: '4.' , title: 'eBikeGo Battery Protect', text: "Get peace of mind with our 5-year warranty that covers battery health and performance. If the battery capacity drops below 70%, we'll replace it, ensuring a smooth ride for years to come."},
]

const blogs =[
  {image:'/src/images/blog-img.png', link: '#', bloger: 'Ananya', time:'5', date: '1 july, 2024' , title:'Everything You Need to Know About eCycle..', text:'Discover the best ways to maintain and charge your ...'},
  {image:'/src/images/blog-img.png', link: '#', bloger: 'Ananya', time:'5', date: '1 july, 2024' , title:'Everything You Need to Know About eCycle..', text:'Discover the best ways to maintain and charge your ...'},
  {image:'/src/images/blog-img.png', link: '#', bloger: 'Ananya', time:'5', date: '1 july, 2024' , title:'Everything You Need to Know About eCycle..', text:'Discover the best ways to maintain and charge your ...'},
  {image:'/src/images/blog-img.png', link: '#', bloger: 'Ananya', time:'5', date: '1 july, 2024' , title:'Everything You Need to Know About eCycle..', text:'Discover the best ways to maintain and charge your ...'},
]

const accessories = [
  {image: '/src/images/product-2.png', title: 'Accessories', atext: 'Shop Accessories', link: '#', text: 'From storage solutions to performance upgrades, find all the eCycle accessories you need.'},
  {image: '/src/images/product-2.png', title: 'Accessories', atext: 'Shop Accessories', link: '#', text: 'From storage solutions to performance upgrades, find all the eCycle accessories you need.'},
  {image: '/src/images/product-2.png', title: 'Accessories', atext: 'Shop Accessories', link: '#', text: 'From storage solutions to performance upgrades, find all the eCycle accessories you need.'}
]
export default function Home() {
  return (
    <>
    <HeroSection
      backgroundImage={HeroIMage}
      title="Welcome to the World of Premium & Smart eCycles"
      description="The ultimate fusion of style and performance."
      buttons={[
        { class: 'white-btn', text: 'Explore Our Range', href: '/products', newTab: false },
        { class: 'outline-btn', text: 'Shop Now', href: '/shop', newTab: false },
      ]}
      hasOverlay={true}
    />
    <section className='bg-[#F7F7F7] pb-40'>
      <div className="container mx-auto text-center text-dark">
        <div className="flex items-center flex-col py-40  ">
            <h1 className='md:w-1/2'>All Adventure. All Electric</h1>
            <p className='md:w-1/2'>Introducing the Nexara eCycle. Designed to blend rugged performance with eco-friendly technology, the Nexara is your perfect companion for both urban commutes and off-road adventures.</p>
        </div>
        <h2 className='pb-20'>Pick your Bicycle</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {carditems.map((item, index) => (
            <SwiperSlide key={index}> 
              <img src={item.image} alt="" className='h-[220px] object-cover rounded-t-lg w-full'/>
              <div className="p-4 text-start bg-white rounded-b-lg text-dark">
                <h3>{item.title}</h3>
                <p className='text-xs mt-3 text-neutral-500'>Starting at ${item.sprice}</p>
                <div className="flex space-x-6 mt-3 text-neutral-500">
                <p className='text-xs opacity-6'>Or Flexipay ${item.emi} month</p>
                <Popup trigger={<button> <svg className='stroke-neutral-500' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path></svg></button>} position="right center">
                <div className='border p-3 rounded text-xs'>Popup content here !!</div>
                </Popup>
                </div>
                <div className="space-x-6 my-5 mt-10">
                  <a href={item.buttonlink} className='black-btn text-sm'>Book a test ride</a>
                  <a href={item.learnmore} className='underline underline-offset-4'>learn More</a>
                </div>
              </div>   
              </SwiperSlide>
          ))} 
        </Swiper>

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

    {/* locate section  */}
    <div className='h-screen flex items-end mb-[200px]' style={{ backgroundImage: "url(/src/images/bg-cycle.png)", backgroundPosition: 'center',backgroundSize: 'cover', }}>
        <div className="container mx-auto ">
          <div className="bg-[#D8D8D8CC] backdrop-blur-md rounded-lg p-20 backdrop-opacity-95 text-dark mb-[-100px]">
          <h3 className='pb-5'>Our Global Space</h3>
          <div class="flex flex-1 items-center mb-10 ">
            <div class="w-3/5 gap-3">
              <h1>Experience our world.<br></br>Test ride your future eCycle and discover the best of eco-friendly mobility.</h1>
            </div>
            <div class="flex-initial w-1/12"></div>
            <div class="flex-initial w-1/6">
              <h1>50+</h1>
              <p>Cities</p>
            </div>
            <div class="flex-initial w-1/6">
            <h1>100+</h1>
            <p>EBG Global Spaces</p>
            </div>
          </div>
          <a href="#" className='underline-btn  before:border-underline'>Locate your nearest center <FontAwesomeIcon icon="fa-solid fa-house" /></a>
          </div>
        </div>
    </div>          
    {/* locate section end  */} 

    <section style={{ backgroundImage: "url(/src/images/ownership.png)", backgroundPosition: 'center',backgroundSize: 'cover',}}>
      <div className="container mx-auto py-40 text-center text-white">
            <h1 className='pb-20'>Hassle-Free Ownership</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-start">
          {ownershipcard.map((item, index) =>(
            <div className="p-10 rounded-lg grey-gradient">
              <h1 className='pb-20 '>{item.sno}</h1> 
              <h3 className='pb-5 text-2xl'>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          )
          )}
        </div>
      </div>
    </section>



    <section className='bg-[#F7F7F7]'>
      <div className="container text-dark mx-auto py-40 text-center ">
        <h1>Stories at eBikeGo </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-start my-20">
          {blogs.map((item, index) =>(
            <a href={item.link} className="flex items-center gap-5">
              <img src={item.image} alt="" />
              <div>
                <div className="flex"><p>By {item.bloger} • {item.time} min read • {item.date}</p></div>
                <p className='text-2xl py-5 '>{item.title}</p>
                <p className='text-neutral-500'>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="#" className='underline-btn  before:border-underline'>Locate your nearest center </a>
      </div>
    </section>

    <section>
      <div className="container mx-auto py-40">
        <h1 className='text-center'>Enhance Your eBikeGo Experience</h1>
        <div className="flex gap-5 mt-20">
            {accessories.map((item, index) =>(
              <div>
                <img src={item.image} alt="" className='w-96'/>
                <p className='text-2xl py-5'>{item.title}</p>
                <p className='pb-5 w-4/5'>{item.text}</p>
                <a href={item.link} className='underline-btn  before:border-underline '>{item.atext}</a>
              </div>
            ))}
        </div>
      </div>
    </section>

    <section>
      <div className='container mx-auto rounded-lg grey-gradient'>
        <div className="flex items-center justify-between text-white py-10">
          <div className='w-4/5'>
            <h1>Wish to know more about eBG Global?</h1>
            <p>The best way to experience our eCycles is by riding one yourself. If you have any questions about our eCycles, features, or how they can fit into your daily life, we’re here to help.</p>
          </div>
          <a href="#" className='white-btn'>Get in touch</a>
        </div>
          
      </div>
    </section>


      <div className="container mx-auto py-40 flex justify-between">
        <h1>Your doubts?<br></br> Solved!</h1>
        <div className="accordian ">
            <FAQAccordion faqs={faqs} className="w-1/2"/>
        </div>
      </div>
    
    </>
  );
}
