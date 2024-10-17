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
    {   title:"Ride With Confidence",
        image: SKYPHERcta,
        point1:"Seamless Riding Experience",
        point2:"Smooth, Comfortable Rides",
        point3:"Convenient Charging On-the-Go",
        text : "Engineered with an aluminum alloy frame, Skypher Pro offers unparalleled durability without adding unnecessary weight. Perfect for city cruising or outdoor adventures."},]
    
const cardsproduct =[
    {img : image2 , value: '36V 250W Motor', text : "Seamlessly conquer hills and rough terrains"},
    {img : image2 , value: 'Shimano 7-Speed Gear System', text : "Allows smooth and effortless transitions between gears to match any pace."},
    {img : image2 , value: 'Lightweight & Durable', text : "23.8 kg aluminum alloy frame makes for easy handling without compromising on strength."},
    {img : image2 , value: 'Long-Range Capability', text : "Cover up to 35 km on electric mode and 55 km on pedal assist, ensuring you reach your destination efficiently."},
]

const LRcontent = [
    {img : image , title: 'Crafted for Performance, Built for You', text : "With Nexara, experience the synergy of smart design and precision engineering. Whether you're navigating the urban jungle or venturing into nature, Nexara's superior build ensures every ride is a smooth one."},
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


export default function skypher_pro() {
    return (
    <>
        <HeroSection
        backgroundImage={herobg}
        hasOverlay={false}
        />
        
        <Productmilestone 
            title="The Ultimate eCycle for Every Terrain" 
            discription="Unleash the power of technology with precision engineering. Skypher Pro takes your ride to the next level."
            distance="55"
            mode="Pedal assist*"
            slogan="Keep riding. Further than ever."
            // col-1
            col1_num="25"
            col1_metric="km/h"
            col1_text="Efficient motor for seamless commuting."
            // col-2 
            col2_num="36V "
            col2_metric="10Ah"
            col2_text="36V 10Ah removable battery—charge it anywhere."
            // col-3 
            col3_num="4hrs"
            col3_metric="+"
            col3_text="Fast charging "
            // col-4 
            col4_num="Shimano 7"
            // col4_metric="km/h"
            col4_text="Speed Gear System" 
        />
        
        <section style={{ backgroundImage: `url(${image3})`}} className='bg-cover bg-right text-center'>
            <h1 className='py-40 text-white leading-none text-2xl md:text-[50px]'>Built for Adventures, <br/>
            Made for You</h1>
        </section>


        {/* <Leftright_products LRcontent={LRcontent}/> */}

        <Cards_product cardsproduct={cardsproduct} />

        <CombinedSection slides={sliderproducts} backgroundImage={slider_bg} />

        <Product_cta product_cta_content={product_cta_content} />

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}