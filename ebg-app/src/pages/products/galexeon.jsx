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
    {   title:"Seamless Control with Built-In LCD Display",
        image: SKYPHERcta,
        point1:"Seamless Riding Experience",
        point2:"Smooth, Comfortable Rides",
        point3:"Convenient Charging On-the-Go",
        text : "Stay informed with real-time feedback on speed, battery level, and gear settings. Galexeon’s LCD display keeps you in control of every ride, making adjustments effortless and intuitive."},]
    
const cardsproduct =[
    {img : image2 , value: 'Power-Packed 48V Motor', text : "Elevate your ride with Galexeon’s high-torque 48V motor, offering 250W of power for smooth, seamless transitions."},
    {img : image2 , value: 'Shimano 21-Speed Gears', text : "Versatility at your fingertips with advanced Shimano 21-speed shifters, making every ride a customized experience."},
    {img : image2 , value: 'Robust, Durable Frame', text : "Crafted from high-grade aluminum alloy, Galexeon’s lightweight yet durable frame is engineered for maximum strength and agility."},
    {img : image2 , value: 'Long-Range Battery', text : "Travel farther and charge faster. Galexeon’s 48V battery offers reliable power and quick recharges in 4-5 hours."},
]

const LRcontent = [
    {img : image , title: 'Galexeon eCycle: Unleashing the Power of Performance and Precision', text : "The Galexeon brings together robust engineering and cutting-edge technology, designed for cyclists who demand more from every ride."},
    {img : image , title: 'Performance Meets Versatility',  text2: "Unleash your cycling potential with Galexeon’s pedal-assist and throttle-powered system, designed to keep you ahead of the pack, whether you’re commuting or adventuring."},
    {img : image , title: "35 km Range in Pure Electric Mode",  text2: "Enjoy the freedom to explore with Galexeon’s long-lasting 48V 10Ah battery, delivering up to 35 km in pure electric mode and 55 km with pedal assist."},
]

const galexon_slides = [
    {
      title: 'Top Speed of 25 km/h',
      description: 'Feel the rush as you reach speeds up to 25 km/h, providing the perfect balance between performance and safety.'
    },
    {
      title: 'Front and Rear Disc Brakes',
      description: 'Precision braking power with disc brakes ensures smooth stops and ultimate control on any terrain.'
    },  
  ];


export default function galexeon() {
    return (
    <>
        <HeroSection
        backgroundImage={herobg}
        hasOverlay={false}
        />
        
        <Productmilestone 
            title="Unleashing Power and Performance for Every Ride" 
            discription="The Galexeon eCycle brings the perfect fusion of power and precision, taking your rides to new heights. Whether on city streets or off-road trails, Galexeon is engineered to perform."
            distance="55"
            mode="Pedal assist*"
            slogan="With the Galexeon, experience greater range and control. "
            below_slogan="Designed to keep you going longer, Galexeon helps you conquer every terrain with ease."
            // col-1
            col1_num="25"
            col1_metric="km/h"
            col1_text="Max Speed"
            // col-2 
            col2_num="48V"
            col2_metric="10Ah"
            col2_text="Battery Capacity"
            // col-3 
            col3_num="4-5 hrs"
            col3_metric="+"
            col3_text="Fast charging "
            // col-4 
            col4_num="EShimano 21"
            // col4_metric="km/h"
            col4_text="Speed Gear System    "
        />
        
        <Leftright_products LRcontent={LRcontent}/>

        <Cards_product cardsproduct={cardsproduct} />

        <CombinedSection slides={galexon_slides} backgroundImage={slider_bg} />

        <Product_cta product_cta_content={product_cta_content} />

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}