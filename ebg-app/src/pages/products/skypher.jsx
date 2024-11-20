import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import CombinedSection from '../../component/CombinedSection';
import Cards_product from "../../component/cards_product"
import Product_cta from "../../component/product_cta"
import Cta from '../../component/cta';

// images 
import slider_bg from '../../images/galexeon-slider-bg.png'
import skypherbg from '../../images/skypher/skypher.webp'
import girlincycle from '../../images/skypher/girlincycle.webp'
import skyphercard1 from '../../images/skypher/SKYPHERcard-(1).png'
import skyphercard2 from '../../images/skypher/SKYPHERcard-(2).png'
import skyphercard3 from '../../images/skypher/SKYPHERcard-(3).png'
import skyphercard4 from '../../images/skypher/SKYPHERcard-(4).png'
import DyuCycle from '../../images/skypher/DyuCycle.png'
import SKYPHERcta from '../../images/skypher/SKYPHERcta.png'




const product_cta_content =[
    {   title:"Lightweight, Built to Last",
        image: SKYPHERcta,
        point1:"Seamless Riding Experience",
        point2:"Seamless Riding Experience",
        point3:"Convenient Charging On-the-Go",
        text : "Crafted with a precision-engineered aluminum alloy frame, the Skypher eCycle offers unmatched durability while ensuring a lightweight and agile ride for effortless maneuverability, whether in the city or on rugged terrains."},]
    
const cardsproduct =[
    {img : skyphercard2 , value: '25 km/h', text : "Top speed"},
    {img : skyphercard3 , value: '36V 10Ah', text : "Battery capacity*"},
    {img : skyphercard4 , value: 'Shimano 7', text : "Speed Gear System"},
    {img : skyphercard1 , value: '4 Hrs +', text : "Fast Charging"},
]

const skyperproducts = [
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

export default function skypher() {
    return (
<>
        <HeroSection
        backgroundImage={skypherbg}
        hasOverlay={false}
        />
        
        <Productmilestone 
            title="The e-Cycle that redefines your ride" 
            discription="Power and precision for every journey. The Skypher is designed for those who want more from their ride."
            distance="55"
            mode="Pedal assist*"
            slogan="Keep riding. Further than ever."
            col_heading="What matters first?"
            // col-1
            col1_num="25"
            col1_metric="km/h"
            col1_text="Top Speed"
            // col-2 
            col2_num="367v"
            col2_metric="10Ah"
            col2_text="Max Speed"
            // col-3 
            col3_num="4"
            col3_metric=" hrs+"
            col3_text="Fast Charging"
            // col-4 
            // col4_num="Effortless Folding"
            // col4_metric="km/h"
            // col4_text="in seconds for easy storage and transport"
        />

        <section style={{ backgroundImage: `url(${DyuCycle})`}} className='background-cover bg-right text-center'>
            <h1 className='py-40 text-white leading-none text-2xl md:text-[50px]'>Built for Performance<br/>
            Made for the World</h1>
        </section>

        


        <Cards_product cardsproduct={cardsproduct} />

        <CombinedSection slides={skyperproducts} backgroundImage={slider_bg} />

        <Product_cta product_cta_content={product_cta_content} />

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}