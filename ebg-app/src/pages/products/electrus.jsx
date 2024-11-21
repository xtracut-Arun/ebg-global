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
import SKYPHERcta from '../../images/skypher/SKYPHERcta.png'



const product_cta_content =[
    {   title:"Durable Frame Built for Every Adventure",
        image: SKYPHERcta,
        point1:"7-Speed Gear Shifter for Versatile Rides",
        point2:"Effortless Suspension for Comfort",
        point3:"Removable Battery for On-the-Go Charging",
        text : "The precision-engineered aluminum frame delivers a lightweight yet robust structure, giving riders the confidence to explore new paths while ensuring durability for the long haul."},]
    
const cardsproduct =[
    {img : image2 , value: 'Foldable and Portable for Every Occasion', text : "ELECTRUS transforms in seconds to a compact size, making it effortless to carry or store. It’s designed to deliver maximum portability without sacrificing power."},
    {img : image2 , value: 'Lightweight Magnesium Frame', text : "Built with precision-engineered magnesium, the frame ensures both durability and agility. Perfect for navigating urban landscapes or hitting the open road."},
    {img : image2 , value: 'Effortless Suspension for Smooth Rides', text : "ELECTRUS offers a superior riding experience with advanced suspension. Tackle any terrain with ease, knowing the bumps and shocks are absorbed for a smooth journey."},
    {img : image2 , value: 'Powerful Performance with Every Pedal', text : "Whether you use pedal assist or throttle, the high-performance motor and reliable battery offer a seamless and powerful ride. No more worrying about range or speed—just enjoy the journey."},
]

const LRcontent = [
    {img : image , title: 'Crafted for Performance, Built for You', text : "With Nexara, experience the synergy of smart design and precision engineering. Whether you're navigating the urban jungle or venturing into nature, Nexara's superior build ensures every ride is a smooth one."},
]

const sliderproducts = [
    {
      title: 'Disc Brakes for Maximum Safety',
      description: 'With front and rear disc brakes, Nexara offers superior stopping power for maximum safety and control on all types of terrain.'
    },
  ];


export default function electrus() {
    return (
    <>
        <HeroSection
        backgroundImage={herobg}
        hasOverlay={false}
        />
        
        <Productmilestone 
            title="Unmatched Portability. Maximum Efficiency" 
            discription="Experience the future of cycling with ELECTRUS. Compact, powerful, and engineered for versatility, it's your go-to eCycle for urban adventures and beyond."
            distance="40"
            mode="Pedal assist mode*"
            slogan="Ride further with ease. Designed to keep you moving, whether you're on city streets or a long journey."
            // col-1
            col1_num="25"
            col1_metric="km/h"
            col1_text="Max Speed"
            // col-2 
            col2_num="48V"
            col2_metric="7.5Ah"
            col2_text="Battery Capacity"
            // col-3 
            col3_num="3-4 hrs"
            col3_metric="+"
            col3_text="Fast charging "
            // col-4 
            col4_num="Foldable Design"
            // col4_metric="km/h"
            col4_text="for unparalleled portability" 
        />
        
        {/* <Leftright_products LRcontent={LRcontent}/> */}

        <Cards_product cardsproduct={cardsproduct} />

        <CombinedSection slides={sliderproducts} backgroundImage={slider_bg} />

        {/* <Product_cta product_cta_content={product_cta_content} /> */}

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}