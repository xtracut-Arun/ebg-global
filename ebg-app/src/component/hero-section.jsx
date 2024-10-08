import React from 'react';

export default function HeroSection({ backgroundImage, title, description, buttons, hasOverlay = true }) {
  return (
    <div
      className="h-[90vh] relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      {hasOverlay && (
        <div className="absolute inset-0" style={{background: "linear-gradient(90deg, rgba(0,0,0,0.8239670868347339) 18%, rgba(255,255,255,0) 100%)"}}></div>
      )}
      
      {/* Content */}
      {hasOverlay && (
        <div className="container mx-auto relative  z-10 h-full flex flex-col items-start justify-center px-8 text-white">
        <div className=" md:w-1/2">
          <h1 className="mb-4 ">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <div className="space-x-3 md:space-x-6">
            {buttons?.map((button, index) => (
              <a
                key={index}
                href={button.href}
                target={button.newTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={button.class}
              >
                {button.text}
              </a>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
