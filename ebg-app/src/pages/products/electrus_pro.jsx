import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import Cards_product from "../../component/cards_product"
import Product_cta from "../../component/product_cta"
import Cta from '../../component/cta';
import CombinedSection from '../../component/CombinedSection';

// images 
import Electrusbg from '../../images/Electrus/Electrus.webp'
import skypersliderimg from '../../images/skypher/skypersliderimg.webp'
import girlincycle from '../../images/skypher/girlincycle.webp'
import Product1 from '../../images/Electrus/ELECTRUSProduct-(1).png'
import Product2 from '../../images/Electrus/ELECTRUSProduct-(2).png'
import Product3 from '../../images/Electrus/ELECTRUSProduct-(3).png'
import Product4 from '../../images/Electrus/ELECTRUSProduct-(4).png'
import Product5 from '../../images/Electrus/ELECTRUSProduct-(5).png'
import Product6 from '../../images/Electrus/ELECTRUSProduct-(6).png'

import SKYPHERcta from '../../images/skypher/SKYPHERcta.png'


const LRcontent = [
    {img : girlincycle , title: 'Built for Compactness, Designed for Performance', text : "With Electrus Pro, you don't have to choose between power and portability.",  text2: "Engineered with precision, this eCycle delivers the best ride while being easy to fold and carry along wherever your journey takes you."},
]

const product_cta_content =[
    {   title:"Lightweight, Built to Last",
        image: SKYPHERcta,
        point1:"Seamless Riding Experience",
        point2:"Smooth, Comfortable Rides",
        point3:"Convenient Charging On-the-Go",
        text : "Crafted with a precision-engineered aluminum alloy frame, the Skypher eCycle offers unmatched durability while ensuring a lightweight and agile ride for effortless maneuverability, whether in the city or on rugged terrains."},]
    
const cardsproduct =[
    {img : Product6 , value: '36V 250W Motor', text : "Provides efficient, seamless assistance for daily commutes and weekend adventures."},
    {img : Product5 , value: 'Folding Capability', text : "The Electrus Pro folds effortlessly for easy storage in small spaces like apartments or car trunks."},
    {img : Product3 , value: 'Lightweight Magnesium Alloy Frame', text : " A durable yet ultra-light frame ensures maximum agility without sacrificing strength."},
    {img : Product4 , value: 'Max Speed of 25 km/h', text : "Experience the thrill of riding while staying safe on every journey."},
    {img : Product2 , value: 'Smooth Riding Experience', text : "Equipped with disc brakes, robust tires, and shock absorption to glide over any terrain effortlessly."},
    {img : Product1 , value: 'Removable Battery', text : "Charge your eCycle anywhere with the convenient 36V 10Ah removable battery."},
]

const skyperproducts = [
    {
      title: 'Effortless Folding Mechanism',
      description: 'Fold your Electrus Pro in seconds, making it perfect for small apartments, car trunks, and office storage. When you’re ready to ride again, just unfold and go.'
    },
    {
      title: 'Smooth Ride with Shock Absorption',
      description: 'Tackle any path with confidence. The shock absorption system ensures a smooth and comfortable ride on rough city streets or off-road paths.'
    },
    {
      title: 'Confidence in Every Turn ',
      description: 'Sturdy handlebars and precision steering allow you to navigate sharp turns or rugged trails with ease, giving you the ultimate control on every ride.'
    },
    {
      title: 'Tailored Seat Elevation for Ultimate Comfort ',
      description: 'The adjustable seat offers a perfect ergonomic fit for riders of all sizes, enhancing both comfort and pedaling efficiency for longer rides.'
    },
  
  ];

export default function electrus_pro() {
    return (
<>
        <HeroSection
        backgroundImage={Electrusbg}
        hasOverlay={false}
        />
        
        <Productmilestone 
            title="The Ultimate Foldable e-Cycle for Every Journey" 
            discription="Compact, powerful, and ready to roll—the Electrus Pro redefines portability and performance. Ideal for urban riders who value compact design without compromising on performance, the Electrus Pro is the perfect ride to take on the world."
            distance="55"
            mode="Pedal assist mode*"
            slogan="Go farther with Electrus Pro, designed to offer an impressive range for all your adventures."
            // col-1
            col_heading="First things first:"           
            col1_num="25"
            col1_metric="km/h"
            col1_text="Max Speed"
            // col-2 
            col2_num="36V "
            col2_metric="10Ah"
            col2_text="Battery Capacity"
            // col-3 
            col3_num="4-5hrs"
            col3_metric="+"
            col3_text="Fast charging "
            // col-4 
            col4_num="Effortless Folding"
            // col4_metric="km/h"
            col4_text="in seconds for easy storage and transport"
        />


        <Leftright_products LRcontent={LRcontent} />

        <Cards_product cardsproduct={cardsproduct} />

        <CombinedSection slides={skyperproducts} backgroundImage={skypersliderimg} />

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}