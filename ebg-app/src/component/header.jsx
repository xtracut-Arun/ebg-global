import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from'../images/logo-ebg.png';

const Header = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // State for dropdown menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Location hook to determine active link
  const location = useLocation();

  // Ref for dropdown to detect outside clicks
  const dropdownRef = useRef(null);

  // Menu items array
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  // Dropdown items under "Services"
  const dropdownItems = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Development', path: '/services/mobile-development' },
    { name: 'SEO Optimization', path: '/services/seo-optimization' }
  ];

  // SVG Icon for dropdown
  const dropdownIcon = (
    <svg
      className="w-2.5 h-2.5 ms-2.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  );

  // Effect to handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-white md:py-2  fixed w-full z-20 top-0 start-0 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <a href="/"><img src={mainLogo} alt="" /></a>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="black-btn"
            >
              Shop Bikes
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14" >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M1 1h15M1 7h15M1 13h15" : "M1 1h15M1 7h15M1 13h15"}
                />
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white  ">
              {menuItems.map((item, index) => (
                <li key={index} className="relative" ref={item.name === 'Services' ? dropdownRef : null}>
                  {item.name === 'Services' ? (
                    // Dropdown Trigger
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="py-2 px-3 md:p-0  flex items-center  text-stone-900"
                    >
                      {item.name}
                      {dropdownIcon}    
                    </button>
                  ) : (
                    // Regular Links
                    <Link
                      to={item.path}
                      className={`block py-2 px-3 md:p-0 text-stone-900 ${
                        location.pathname === item.path ? 'border-b-2 border-gray-950' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.name === 'Services' && isDropdownOpen && (
                    <div className="absolute z-10 top-full left-0 mt-2 w-48 bg-white  rounded">
                      <ul className="py-2">
                        {dropdownItems.map((dropdownItem, idx) => (
                          <li key={idx} className="flex items-center space-x-2 px-4 py-2">
                            
                            <Link
                              to={dropdownItem.path}
                              className="block w-full"
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;