import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import Cards_product from "../../component/cards_product"
import CombinedSection from '../../component/CombinedSection';
import Product_cta from "../../component/product_cta"
import Cta from '../../component/cta';
import Product_details from "../../component/product_details_slider"

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



const product_content =[
  {
    image: SKYPHERcta,
    title: "Durable Frame Built for Every Adventure",
    point1: "7-Speed Gear Shifter for Versatile Rides",
    point2: "Effortless Suspension for Comfort",
    point3: "Removable Battery for On-the-Go Charging",
    text: "The precision-engineered aluminum frame delivers a lightweight yet robust structure, giving riders the confidence to explore new paths while ensuring durability for the long haul."
    },
    {
      image: SKYPHERcta,
      title: "7-Speed Gear Shifter for Versatile Rides",
      point1: "Effortless Suspension for Comfort",
      point2: "Removable Battery for On-the-Go Charging",
      point3: "Durable Frame Built for Every Adventure",
      text: "Transition through gears effortlessly with Nexara's Shimano 7-speed system, designed for both performance and comfort, whether you're cruising city streets or tackling rougher paths."
    },
    {
      image: SKYPHERcta,
      title: "Effortless Suspension for Comfort",
      point1: "Removable Battery for On-the-Go Charging",
      point2: "Durable Frame Built for Every Adventure",
      point3: "7-Speed Gear Shifter for Versatile Rides",
      text: "Experience a smoother ride on any surface. The front fork suspension absorbs shocks and vibrations, delivering a seamless and comfortable cycling experience."
    },
    {
      image: SKYPHERcta,
      title: "Removable Battery for On-the-Go Charging",
      point1: "Durable Frame Built for Every Adventure",
      point2: "7-Speed Gear Shifter for Versatile Rides",
      point3: "Effortless Suspension for Comfort",
      text: "Nexara's removable battery allows you to charge wherever you are. With a fast charge time of 4-5 hours, you'll always be ready for the next adventure."
    },
      
  ]

const cardsproduct =[
    {img : image2 , value: 'Powerful 36V 250W Motor', text : "Designed for efficiency, Nexara’s motor ensures a seamless commute with the perfect balance of power and energy savings."},
    {img : image2 , value: 'Long-Lasting 36V 12.5Ah Battery', text : "Go the extra mile with Nexara’s removable battery that delivers a range of up to 43 km in pure electric mode or 65 km with pedal assist."},
    {img : image2 , value: 'Shimano 7-Speed Gear System', text : "Achieve optimal control with Shimano’s reliable 7-speed shifter, ensuring smooth transitions across terrains."},
    {img : image2 , value: 'Lightweight Aluminum Alloy Frame', text : "Built with an aluminum frame that is both durable and lightweight, Nexara offers exceptional maneuverability without compromising on strength."},
]

const LRcontent = [
    {img : image , title: 'Crafted for Performance, Built for You', text : "With Nexara, experience the synergy of smart design and precision engineering. Whether you're navigating the urban jungle or venturing into nature, Nexara's superior build ensures every ride is a smooth one."},
]

const sliderproducts = [
    {
      title: 'Top Speed of 25 km/h',
      description: 'Feel the rush as you reach speeds up to 25 km/h, providing the perfect balance between performance and safety.'
    },
    {
      title: 'Front and Rear Disc Brakes',
      description: 'Precision braking power with disc brakes ensures smooth stops and ultimate control on any terrain.'
    },  
  ];


export default function nexara() {
    return (
    <>
        <HeroSection
        backgroundImage={herobg}
        hasOverlay={false}
        />
        
        <Productmilestone 
            title="Explore the Freedom of Nexara" 
            discription="Unleash the full potential of your ride with Nexara. Engineered to balance power, control, and convenience, Nexara takes you further than ever before."
            distance="65"
            mode="Pedal assist*"
            slogan="Stay powered longer with Nexara’s extended range. Whether commuting or adventuring, enjoy longer journeys without the need to recharge."
            // col-1
            col1_num="25"
            col1_metric="km/h"
            col1_text="Max Speed"
            // col-2 
            col2_num="36V "
            col2_metric="12.5Ah"
            col2_text="Battery Capacity"
            // col-3 
            col3_num="4-5 hrs"
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