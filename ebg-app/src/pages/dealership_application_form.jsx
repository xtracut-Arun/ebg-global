import React, { useEffect } from 'react';
import Cta from '../component/cta';
import HeroImage from '../images/dealership/delearship-banner.webp';

export default function DealershipApplicationForm() {
  useEffect(() => {
    // Append URL query parameters to the iframe src on component mount
    const iframe = document.getElementById('myiframe');
    if (iframe) {
      iframe.src += window.location.search;
    }
  }, []);

  return (
    <>
      {/* Optional: You can move these styles to an external CSS file */}
      <style jsx>{`
        iframe {
          width: 100%;
          height: 100vh;
          max-height: 1000px; 
          border: none; 
        }

       
        @media (max-width: 768px) {
          iframe {
            height: 80vh;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 py-8">
        <iframe
          id="myiframe"
          aria-label="Ebikego-global dealership application form"
          src="https://forms.zohopublic.com/ebikego/form/Ebikegoglobaldealershipapplicationform/formperma/sVJ0CC5h4Ypotvi7Xd5QerD-YJ1nC-iPtz7ven9UuD8"
          title="Dealership Application Form"
        ></iframe>
      </div>

      <Cta title="Discover Your Favorite Bike" link="#" />
    </>
  );
}
