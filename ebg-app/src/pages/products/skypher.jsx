import React from 'react';
import HeroSection from '../../component/hero-section';
import Productmilestone from "../../component/Productmilestone"
import Leftright_products from "../../component/leftright_product"
import Cards_product from "../../component/cards_product"

// images 
import skypherbg from '../../images/skypher/skypher.webp'
import girlincycle from '../../images/skypher/girlincycle.webp'

const LRcontent = [
    {img : girlincycle , title: 'Built for Compactness, Designed for Performance', text : "With Electrus Pro, you don't have to choose between power and portability.",  text2: "Engineered with precision, this eCycle delivers the best ride while being easy to fold and carry along wherever your journey takes you."},
    {img : girlincycle , title: 'Built for Compactness, Designed for Performance', text : "With Electrus Pro, you don't have to choose between power and portability.",  text2: "Engineered with precision, this eCycle delivers the best ride while being easy to fold and carry along wherever your journey takes you."},
    {img : girlincycle , title: 'Built for Compactness, Designed for Performance', text : "With Electrus Pro, you don't have to choose between power and portability.",  text2: "Engineered with precision, this eCycle delivers the best ride while being easy to fold and carry along wherever your journey takes you."},

]

const cardsproduct =[
    {img : girlincycle , value: '2425 km/h', text : "With Electrus Pro, you don't have to choose between power and portability."},
    {img : girlincycle , value: '2425 km/h', text : "With Electrus Pro, you don't have to choose between power and portability."},
    {img : girlincycle , value: '2425 km/h', text : "With Electrus Pro, you don't have to choose between power and portability."},
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
            col4_metric="km/h"
            col4_text="in seconds for easy storage and transport"
        />

        
        <Leftright_products LRcontent={LRcontent} />


        <Cards_product cardsproduct={cardsproduct} />

</>
    )}