import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import Cards_product from "../../component/cards_product"
import CombinedSection from '../../component/CombinedSection';
import Product_details from "../../component/product_details_slider"
import Cta from '../../component/cta';

// images 
import herobg from '../../images/hero-back.png'
import slider_bg from '../../images/galexeon-slider-bg.png'
import image from '../../images/image.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import SKYPHERcta from '../../images/skypher/SKYPHERcta.png'




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
      title: 'Convenient Basket',
      description: 'Take your essentials with you using the handy front-mounted basket, ideal for quick runs or commuting to work.'
    },  
  ];

  const product_content =[
    {
      image: SKYPHERcta,
      title: "Strength Meets Style",
      point1: "Smooth Sailing",
      point2: "Custom Comfort",
      point3: "Carry Convenience",
      text: "Volitoria’s steel frame doesn’t just offer robust durability; it’s also designed to make a style statement. Whether you’re commuting or taking a leisurely ride, this e-cycle is perfect for any urban setting."
      },
      {
        image: SKYPHERcta,
        title: "Smooth Sailing",
        point1: "Custom Comfort",
        point2: "Carry Convenience",
        point3: "Strength Meets Style",
        text: "Front fork suspension ensures a smooth ride on even the bumpiest streets, absorbing shocks and delivering a stable cycling experience."
      },{
        image: SKYPHERcta,
        title: "Custom Comfort",
        point1: "Carry Convenience",
        point2: "Strength Meets Style",
        point3: "Smooth Sailing",
        text: "The adjustable seat on the Volitoria allows you to tailor your ride to your height, ensuring maximum comfort as you cruise through the city."
      },{
        image: SKYPHERcta,
        title: "Carry Convenience",
        point1: "Strength Meets Style",
        point2: "Smooth Sailing",
        point3: "Custom Comfort",
        text: "The front-mounted basket offers the perfect spot to stash your belongings on the go, making every journey easy and practical."
      }
        
    ]

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

        <div className="pb-20 relative">
          <Product_details slide_content ={product_content} />
        </div>

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}