import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import Cards_product from "../../component/cards_product"
import Product_cta from "../../component/product_cta"
import Cta from '../../component/cta';

// images 
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
    {img : skyphercard2 , value: '25 km/h', text : "Efficient motor for seamless commuting."},
    {img : skyphercard3 , value: '36V 10Ah', text : "36V 10Ah removable battery—charge it anywhere."},
    {img : skyphercard4 , value: 'Shimano 7', text : "Speed Gear System"},
    {img : skyphercard1 , value: '4 Hrs', text : "Fast Charging Time"},
]

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
            // col-1
            col1_num="55"
            col1_metric="km/h"
            col1_text="Max Speed"
            // col-2 
            col2_num="55"
            col2_metric="km/h"
            col2_text="Max Speed"
            // col-3 
            col3_num="55"
            col3_metric="km/h"
            col3_text="Max Speed"
            // col-4 
            col4_num="Effortless Folding"
            // col4_metric="km/h"
            col4_text="in seconds for easy storage and transport"
        />

        <section style={{ backgroundImage: `url(${DyuCycle})`}} className='background-cover bg-right text-center'>
            <h1 className='py-40 text-white leading-none text-2xl md:text-[50px]'>Built for Performance<br/>
            Made for the World</h1>
        </section>

        


        <Cards_product cardsproduct={cardsproduct} />

        <Product_cta product_cta_content={product_cta_content} />

        <Cta  title='Discover Your Favorite Bike' link="#"/>

</>
    )}