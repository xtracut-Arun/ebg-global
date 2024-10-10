import React from 'react';
import Popup from 'reactjs-popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroSection from '../component/hero-section';
import Cta from '../component/cta';
import FAQAccordion from "../component/FAQAccordion"
import HeroIMage from '../images/hero-back.png'
import { LuArrowRight } from "react-icons/lu";


const faqs = [
  {
    question: "How do I charge an eCycle?",
    answer: "To charge your eCycle, simply connect the charger provided with your eCycle to a standard electrical outlet. Charging times may vary based on the battery capacity but usually take between 3 to 5 hours for a full charge",
  },
  {
    question: "Can I ride an eCycle in the rain?",
    answer: "Yes, our eCycles are designed to be water-resistant and can be safely used in rainy conditions. However, we advise riders to avoid deep water to protect electrical components.",
  },
  {
    question: "Do I need a license or registration to ride an eCycle?",
    answer: "For most eCycles, no license or registration is required, as they fall under non-motorized vehicle categories in many regions. However, local regulations may vary, so it’s recommended to check with local authorities.",
  },
  {
    question: "What is the range of an eCycle on a full charge?",
    answer: "The range of our eCycles typically varies between 40-70 km on a full charge, depending on the model and riding conditions such as terrain and rider weight.",
  },
  {
    question: "How often do I need to service my eCycle?",
    answer: "We recommend servicing your eCycle every 6 months or after 1000 km of riding to ensure optimal performance. Routine checks should include the battery, brakes, and motor.",
  },
  {
    question: "How much does it cost to charge an eCycle?",
    answer: "Charging an eCycle is very affordable. On average, a full charge costs around ₹10-₹20, depending on your local electricity rates.",
  },
  {
    question: "Can I replace the eCycle battery, and what is the battery life?",
    answer: "Yes, eCycle batteries are replaceable. Our eCycle batteries typically last for 3 to 5 years or around 800 full charge cycles, whichever comes first.",
  },
  {
    question: "What accessories are available for my eCycle?",
    answer: "We offer a wide range of accessories including helmets, baskets, and lights to enhance your riding experience. Explore our Accessories page for more details.",
  },
  {
    question: "Are there any financing options available for purchasing an eCycle?",
    answer: "Yes, we provide flexible financing options to make your eCycle purchase more affordable. Check out our financing section for more details.",
  },
  {
    question: "Where can I test ride an eCycle?",
    answer: "You can test ride our eCycles at any of our experience centers or partner stores. Visit our 'Locate Us' page to find the nearest center.",
  },
];

const carditems = [
  {title: 'Skypher Pro',image:'/src/images/home/Skypher-Pro.png', sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'Electrus Pro',image:'/src/images/home/Electrus-Pro.png', sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
  {title: 'Galexeon',image:'/src/images/home/Galexeon.png', sprice:'9898', emi:'999', buttonlink:'#', learnmore:'#'},
]

const ownershipcard =[
  {sno: '1.' , title: 'eBikeGo Battery Protect', text: "Get peace of mind with our 5-year warranty that covers battery health and performance. If the battery capacity drops below 70%, we'll replace it, ensuring a smooth ride for years to come."},
  {sno: '2.' , title: 'Smart Connect', text: "Experience smarter mobility with integrated GPS, theft protection, real-time ride tracking, and seamless smartphone connectivity for on-the-go performance insights."},
  {sno: '3.' , title: '24 x 7 Roadside Assistance', text: "24/7 emergency assistance for breakdowns, punctures, or charging needs. Wherever you ride, we've got you covered."},
  {sno: '4.' , title: 'Assured Care & Protection', text: "Annual service packages that ensure your eCycle stays in top condition, with regular maintenance and priority support for a worry-free experience."},
]

const blogs =[
  {image:'/src/images/home/blog-(4).png', link: '#', bloger: 'Ananya', time:'5', date: '1 july, 2024' , title:'Everything You Need to Know About eCycle..', text:'Discover the best ways to maintain and charge your ...'},
  {image:'/src/images/home/blog-(3).png', link: '#', bloger: 'Rohan P', time:'3', date: '24 Jun, 2024' , title:'How to Choose the Right eCycle...', text:'Explore the key factors to consider when selecting an eCycle that fits your daily commute and fitness needs. ...'},
  {image:'/src/images/home/blog-(1).png', link: '#', bloger: 'Dr. Naina R', time:'7', date: '24 Jun, 2024' , title:'The Health Benefits of Using eCycles...', text:'Learn how integrating eCycles into your routine can enhance your physical fitness..'},
  {image:'/src/images/home/blog-(2).png', link: '#', bloger: 'Aadi S.', time:'3', date: '1 Jul , 2024' , title:'Sustainability and eCycles: Shaping a Green..', text:'Discover how eCycles are playing a crucial role in reducing carbon emissions and promoting sustainable urban mobility....'},
]

const accessories = [
  {image: '/src/images/home/Helmets.png', title: 'Smart Helmets', atext: 'Explore Smart Helmets', link: '#', text: 'Ride with protection and style. Explore our cutting-edge smart helmets designed for safety and comfort.'},
  {image: '/src/images/home/Accessories.png', title: 'Accessories', atext: 'Shop Accessories', link: '#', text: 'From storage solutions to performance upgrades, find all the eCycle accessories you need.'},
  {image: '/src/images/home/Merchandise.png', title: 'Merchandise', atext: 'Shop Merch', link: '#', text: 'Wear your passion. Check out our exclusive eBikeGo apparel and gear.'}
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
                <div className='border p-3 rounded text-xs'>note : content here !!</div>
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
            <h2 className='pb-10 md:pb-[300px]'>Powering eco-friendly commutes worldwide with the largest eCycle network.</h2>
            <a href="#" className='underline underline-offset-8'>Learn more </a>
        </div>
        {/* end map section  */}

      </div>
   </section>

    {/* locate section  */}
    <div className='flex items-end mb-[200px]  bg-center bg-cover' style={{ backgroundImage: "url(/src/images/home/cycle.webp)", }}>
        <div className="container mx-auto pt-[400px]">
          <div className="bg-[#D8D8D8CC] backdrop-blur-md rounded-lg p-10  md:p-20  text-dark mb-[-100px]">
          <h3 className='pb-5'>Our Global Space</h3>
          <div class="flex flex-1 flex-col md:flex-row items-start md:items-center mb-10 ">
            <div class="w-full md:w-3/5 gap-3">
              <h2>Experience our world.<br></br>Test ride your future eCycle and discover the best of eco-friendly mobility.</h2>
            </div>
            <div class="flex-initial w-1/12"></div>
            <div class="flex-initial w-full md:w-1/6 mt-10 md:mt-0">
              <h1>50+</h1>
              <p>Cities</p>
            </div>
            <div class="flex-initial w-full md:w-1/6">
            <h1>100+</h1>
            <p>EBG Global Spaces</p>
            </div>
          </div>  
          <a href="#" className='underline-btn  before:border-underline flex items-center w-fit gap-2'>Locate your nearest center <LuArrowRight /></a>
          </div>
        </div>
    </div>          
    {/* locate section end  */} 

    <section style={{ backgroundImage: "url(/src/images/home/cy-back.webp)", backgroundPosition: 'center',backgroundSize: 'cover',}}>
      <div className="container mx-auto py-40 text-center text-white">
            <h2 className='pb-20'>Hassle-Free Ownership</h2>
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
        <h2>Stories at eBikeGo </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  text-start my-20">
          {blogs.map((item, index) =>(
            <a href={item.link} className="flex flex-col lg:flex-row items-start gap-5">
              <div className='w-full md:min-w-[250px]  md:max-w-[250px] md:min-h-[250px]'>
                <img src={item.image} alt="" className='w-full h-full object-cover  rounded-lg'/>
              </div>
              <div className='py-5'>
                <div className="flex "><p>By {item.bloger} • {item.time} min read • {item.date}</p></div>
                <p className='text-2xl pt-3 pb-1 '>{item.title}</p>
                <p className='text-neutral-500'>{item.text}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center">
        <a href="#" className='underline-btn  before:border-underline flex items-center w-fit gap-2'>View all blogs <LuArrowRight /></a>
        </div>
      </div>
    </section>

    <section>
      <div className="container mx-auto py-40">
        <h2 className='text-center'>Enhance Your eBikeGo Experience</h2>
        <div className="flex  flex-col md:flex-row gap-10 md:gap-10 mt-20">
            {accessories.map((item, index) =>(
              <div className='w-full md:w-1/3 pt-5 md-pt-0'>
                <img src={item.image} alt="" className='w-full  rounded-lg'/>
                <p className='text-2xl py-5'>{item.title}</p>
                <p className='pb-5 '>{item.text}</p>
                <a href={item.link} className='underline-btn flex items-center w-fit gap-2 before:border-underline'>{item.atext} <LuArrowRight /></a>
              </div>
            ))}
        </div>
      </div>
    </section>

    <section>
      <div className='container mx-auto rounded-lg grey-gradient'>
        <div className="flex flex-col md:flex-row  items-center justify-between text-white py-10">
          <div className='w-4/5'>
            <h2 className='mb-10 md:mb-2'>Wish to know more about eBG Global?</h2>
            <p>The best way to experience our eCycles is by riding one yourself. If you have any questions about our eCycles, features, or how they can fit into your daily life, we’re here to help.</p>
          </div>
          <a href="#" className='white-btn mt-10 md:mt-0'>Get in touch</a>
        </div>
          
      </div>
    </section>


      <div className="container flex-col md:flex-row mx-auto py-40 flex justify-between text-dark">
        <h2 className='w-5/6'>Your doubts?<br></br> Solved!</h2>
        <div className="accordian w-full">
            <FAQAccordion faqs={faqs} />  
        </div>
      </div>
    
      <Cta  title='Discover Your Favorite Bike' link="#"/>

    </>
  );
}
    