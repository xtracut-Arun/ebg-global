import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import Cards_product from "../../component/cards_product"
import CombinedSection from '../../component/CombinedSection';
import Product_cta from "../../component/product_cta"
import Cta from '../../component/cta';

// images 
import herobg from '../../images/hero-back.png'
import slider_bg from '../../images/galexeon-slider-bg.png'
import skyphercard1 from '../../images/skypher/SKYPHERcard-(1).png'
import skyphercard2 from '../../images/skypher/SKYPHERcard-(2).png'
import skyphercard3 from '../../images/skypher/SKYPHERcard-(3).png'
import skyphercard4 from '../../images/skypher/SKYPHERcard-(4).png'
import image from '../../images/image.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import SKYPHERcta from '../../images/skypher/SKYPHERcta.png'



const product_cta_content =[
    {   title:"Strength Meets Style",
        image: SKYPHERcta,
        point1:"Removable Battery for On-the-Go Charging",
        // point2:"Smooth, Comfortable Rides",
        // point3:"Convenient Charging On-the-Go",
        text : "Volitoria’s steel frame doesn’t just offer robust durability; it’s also designed to make a style statement. Whether you’re commuting or taking a leisurely ride, this e-cycle is perfect for any urban setting."},]
    
const cardsproduct =[
    {img : image2 , value: '48V 250W Motor', text : "Efficient motor with enough power to handle urban commutes."},
    {img : image2 , value: 'Battery Capacity', text : "48V 10Ah removable battery—charge anywhere for convenience."},
    {img : image2 , value: 'Max Speed', text : "25 km/h throttle for controlled yet efficient speed."},
    {img : image2 , value: 'Compact Frame', text : "The 22.35 kg steel frame is designed for strength and agility, making your ride as smooth as possible."},
    {img : image2 , value: 'Shimano 7-Speed Gears', text : "Shift smoothly between seven gears for optimal performance on any incline or road condition."},
    {img : image2 , value: 'Comfortable Ride', text : "Front fork suspension ensures smooth, shock-absorbed rides on any terrain."},
]

const LRcontent = [
    {img : image , title: "Designed for Urban Living", text : "The Volitoria’s compact design is perfect for zipping through city streets with ease. Featuring a high-performance steel frame that blends durability with sleek style, this e-cycle is built to turn heads while keeping you moving forward."},
]

const sliderproducts = [
    {
      title: 'Lightweight Aluminum Alloy Frame',
      description: 'Durable, yet easy to handle at just 22 kg.'
    },
    {
      title: 'Disc Brakes ',
      description: 'Front and rear disc brakes for maximum stopping power.'
    },
    {
      title: 'Comfortable Ride ',
      description: '27.5” tires for smooth and stable rides on any terrain.'
    },
    {
      title: 'Fast Charging ',
      description: 'Charge fully in 4-5 hours, ready to go whenever you are.'
    },
  
  ];


export default function voltoria() {
    return (
    <>
        <HeroSection
        backgroundImage={herobg}
        hasOverlay={false}
        />

        <div className="text-center py-20">
          <h1>Elevate Your Urban Commute</h1>
          <p>The ultimate blend of style and power. The Volitoria is your gateway to a smooth, stress-free ride through city streets.</p>
        </div>


        <div className="container mx-auto">
          <section style={{ backgroundImage: `url(${image3})`}} className='py-20 flex justify-end rounded-[20px] bg-cover bg-right relative'>
            <div className="absolute inset-0 rounded-[20px]" style={{background: "linear-gradient(90deg, rgba(88,88,88,0) 60%, rgba(26,26,26,1) 100%)"}}></div>
              <div className="w-full md:w-[45%] px-10 md:px-20 z-10">
                <p className='text-white text-[42px]'>Effortless City Rides</p>
                <p className='text-white py-5'>Throttle Assist</p>
                <p className='text-white'>Navigate the urban jungle with Volitoria’s advanced throttle feature, designed to provide a seamless riding experience.</p>
              </div>
            </section>
        </div>


        <Productmilestone 
            // title="The Ultimate eCycle for Every Terrain" 
            // discription="Unleash the power of technology with precision engineering. Skypher Pro takes your ride to the next level."
            distance="55"
            mode="Pedal assist mode*"
            // slogan="Keep riding. Further than ever."
            // col-1
            col1_num="25"
            col1_metric="km/h"
            col1_text="Max Speed"
            // col-2 
            col2_num="48V "
            col2_metric="10Ah"
            col2_text="Battery Capacity"
            // col-3 
            col3_num="4-5hrs"
            col3_metric="+"
            col3_text="Fast charging "
            // col-4 
            col4_num="Shimano 7"
            // col4_metric="km/h"
            col4_text="Speed Gear System" 
        />
        
        



        <Leftright_products LRcontent={LRcontent}/>

        <Cards_product cardsproduct={cardsproduct} />

        <CombinedSection slides={sliderproducts} backgroundImage={slider_bg} />

        <Product_cta product_cta_content={product_cta_content} />

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}