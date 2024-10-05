import React from 'react';
import HeroSection from '../component/hero-section';
import HeroIMage from '../images/hero-back.png'

export default function Home() {
  return (
    <>
    <HeroSection
      backgroundImage={HeroIMage}
      title="Welcome to the World of Premium & Smart eCycles"
      description="The ultimate fusion of style and performance."
      buttons={[
        { class: 'white-btn', text: 'Explore Our Range', href: '/products', newTab: false },
        { class: 'outline-btn', text: 'Shop Now', href: '/shop', newTab: false },
      ]}
      hasOverlay={true}
    />
<div className="container h-screen bg-black mx-auto">

</div>
    </>
  );
}
