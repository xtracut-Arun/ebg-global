import React from 'react';
import HeroSection from '../component/hero-section';
import Peopleslide from '../component/peopleslide';
import HeroIMage from '../images/about/about-hero.webp'
import missionicon1 from '../images/about/mission-icons-(1).png'
import missionicon2 from '../images/about/mission-icons-(2).png'
import missionicon3 from '../images/about/mission-icons-(3).png'
import missionicon4 from '../images/about/mission-icons-(4).png'
import Mohinder from '../images/about/Mohinder.png'
import Himanshu from '../images/about/Himanshu.png'
import Hari from '../images/about/Hari.png'
import khan from '../images/about/khan.png'
import Cta from '../component/cta';
import highwayroad from "../images/about/highway-road.webp"
import dyu from "../images/about/Dyu.webp"
import road from "../images/about/road.png"
import aboutimg from "../images/about/about-2.png"


const ownershipcard =[
    {sno: '1.' , title: 'Product Innovation', text: "At the core of your work is groundbreaking product development, pushing EV technology boundaries for urban and commercial use."},
    {sno: '2.' , title: 'Strategic Development', text: "Our team meticulously plans and executes strategies to lead the way in electric mobility across new markets and sectors."},
    {sno: '3.' , title: 'Brand Leadership', text: "We don't just manufacture EVs, we build a brand synonymous with quality, efficiency, and sustainability in transportation."},
    {sno: '4.' , title: 'Global Expansion', text: "With our focus on expanding into Tier 1, 2 and 3 cities worldwide, we aim to make clean mobility accessible to all."},
  ]

  const carditems = [
    {title: 'Meet the CEO, eBikeGo Global', name:'Mohinder Kushwaha', image:Mohinder, text: 'Mohinder Kushwaha is a visionary in the electric mobility industry with over 15 years of experience, specializing in innovative EV solutions and sustainable transportation strategies. He has driven transformation for businesses in India and beyond, delivering high-impact solutions tailored to diverse market needs. Mohinder’s deep understanding of electric vehicle technology and market dynamics enables him to lead teams and clients toward a greener, more connected future.',},
    {title: 'Chief Brand Officer', name:'Himanshu Aditya', image:Himanshu, text: "Himanshu Aditya is a dynamic brand strategist with over a decade of experience in crafting and scaling global brand narratives. His expertise in market positioning and brand development drives EBG Global's vision for impactful and sustainable growth.",},
    {title: 'Chief Operating Officer', name:'Hari Kiran', image:Hari, text: 'Hari Kiran is a seasoned operations leader with deep expertise in electric mobility. His focus on operational efficiency and scalability has been pivotal in transforming EBG Global’s logistics and infrastructure capabilities.',},
    {title: 'Group CEO ', name:'Dr. Irfan Khan', image:khan, text: 'Dr. Irfan Khan is an innovator and leader in the EV space, with over 20 years of experience in developing cutting-edge solutions for the electric mobility sector. His vision for sustainable transport continues to push EBG Global to the forefront of the EV revolution.',},    
  ]

  const missioncards =[
    {img:missionicon1 ,title:'50+', text:'Successful projects'},
    {img:missionicon2 ,title:'50Cr+', text:'Revenue Generated for Clients'},
    {img:missionicon3 ,title:'500Cr+', text:'In Investments'},
    {img:missionicon4 ,title:'30%+', text:'Reduction in Carbon Emissions'}
  ]
export default function About() {
    return (
    <>
        <HeroSection
        backgroundImage={HeroIMage}
        hasOverlay={false}
        />

        <div className="container  mx-auto my-40">
            <div className='bg-[#F9F9F9] rounded-[20px] flex flex-col md:flex-row items-center'>
            <img src={aboutimg} alt="" className='rounded-t-[20px] md:rounded-tr-[0px]  md:rounded-l-[20px] h-auto md:h-96'/>
            <div className='p-10 md:px-10 '>
                <h2>We're Your Global e-Cycle Partners</h2>
                <p className='pb-5 pt-10 '>At eBikeGo Global, we're transforming the electric vehicle industry with innovative solutions that drive sustainable mobility. </p>
                <p>Our team of experts is dedicated to pushing the limits of EV technology, ensuring that you stay ahead in the ever-evolving market. We're here to power your journey towards a cleaner, greener future!</p>
            </div>
            </div> 
        </div>

        <section style={{ backgroundImage: `url(${highwayroad})`, backgroundPosition: 'center',backgroundSize: 'cover',}}>
            <div className="container mx-auto py-40 text-center text-white">
                    <h2 className='pb-10'>What Makes EBG Global Different?</h2>
                    <p className='pb-20'>We deliver innovative electric mobility solutions, customized to meet the unique challenges of each market.<br></br> With data-driven insights and a customer-centric approach, we ensure our solutions accelerate the shift to sustainable transportation globally.</p>
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

        <section style={{backgroundImage: `url(${dyu})`}} className='bg-center bg-cover my-20 relative'>
        <div className="absolute inset-0" style={{background: "linear-gradient(90deg, rgba(0,0,0,0.8239670868347339) 18%, rgba(255,255,255,0) 100%)"}}></div>
                <div className="container mx-auto flex flex-col md:flex-row gap-5 py-20 items-end relative z-10"> 
                    <div className='md:w-2/5 text-white'>
                        <h2>We’re More Than Just a Provider: Your Mobility Partners</h2>
                        <p className='text-white pt-5'>At EBG Global, we go beyond delivering electric mobility solutions—we’re committed to driving the future of transportation. Our innovative strategies fuel sustainable growth and unlock the full potential of your mobility ecosystem.</p>
                    </div>
                    <div className='md:w-4/6 flex gap-5 mb-[-145px] flex-col md:flex-row'>
                        <div className='bg-[#D8D8D8CC] backdrop-blur-md p-4 rounded-lg w-full'>
                            <p className='text-dark text-[24px] font-bold'>Focused on Sustainability</p>
                            <p  className='text-dark'>We tailor solutions to electrify your fleet and reduce carbon emissions, aligning with your long-term sustainability goals.</p>
                        </div>
                        <div className='bg-[#D8D8D8CC] backdrop-blur-md p-4 rounded-lg w-full'>
                            <p className='text-dark text-[24px] font-bold'>Real Innovation, Real Results</p>
                            <p className='text-dark' >We focus on delivering cutting-edge EV solutions that drive measurable impact in both efficiency and profitability.</p>
                        </div>  
                    </div>  
                </div>
        </section>


        {/* testimonial slider  */}
        <section>
            <div className="container mx-auto py-40 ">
                <h2>Our people behind the brand</h2>
                <div className='relative pt-10'>
                <Peopleslide carditems ={carditems} />
                </div>
            </div>
        </section>

        <section >
          <div className="container mx-auto bg-[#F9F9F9] text-center rounded-lg py-20">
            <h1 className='pb-20' ><span className='text-[#7B7B7B] font-bold'>Our Mission:</span><br /> Driving Sustainable Mobility for a Greener Future</h1>
            <p className='text-[#666666]'>At EBG Global, we’re transforming transportation with innovative EV solutions. Our mission is to create sustainable ecosystems that benefit businesses and communities, offering tailored EV options for cleaner, smarter, and more efficient mobility.</p>

                <div className="flex flex-col md:flex-row pt-20">
                {missioncards.map((item, index) =>(
                   <div  key={index}
                   className={`flex flex-col items-center w-full p-10 ${
                     index !== missioncards.length - 1 ? 'md:border-r-2 md:border-b-0 border-b-2' : ''
                   }`} 
                   >
                    <img src={item.img} alt="" className='rounded-lg '/>
                    <p className='text-2xl py-5'>{item.title}</p>
                    <p className='pb-5'>{item.text}</p>
                  </div>
                ))}
                </div>
          </div>
        </section>

        <div className="container mx-auto my-40">
            <div className='bg-[#F9F9F9] rounded-[20px] flex flex-col md:flex-row items-center'>
            <img src={road} alt="" className='rounded-t-[20px] md:rounded-tr-[0px]  md:rounded-l-[20px] h-auto md:h-96'/>
            <div className='p-10 md:px-10 '>
                <h2>Looking to Drive the Future of Mobility?</h2>
                <p className='pb-10 pt-5'>Passionate about making an impact in the EV industry? 
                Whether you're interested in innovation, technology, or simply building a sustainable future, we have a place for you. 
                At EBG Global, we are always looking for driven, creative, and forward-thinking individuals to join our team.
                </p>
                <a href="#!" className='black-btn'>Explore career opprtunities</a>
            </div>
            </div> 
        </div>
        <Cta  title='Discover Your Favorite Bike' link="#"/>
    </>
)}
