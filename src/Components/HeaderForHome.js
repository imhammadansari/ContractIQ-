import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const HeaderForHome = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div loading='lazy'
        className="hidden md:block w-full h-[90vh] lg:h-[128vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner-for-devices.jpg')",
        }}
      >

        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center px-14 pt-2 pb-4 text-lg lg:text-xl xl:text-xl">
          {/* Left: Logo */}
          <div className="flex flex-grow justify-start items-center">
            <h1 className="md:text-xl lg:text-2xl xl:text-2xl text-gray-800">
              <Link to='/'>
                <LazyLoadImage className="w-[6rem]" src='/logo1.png' alt="Logo" effect='blur' loading='lazy'/>
              </Link>
            </h1>
          </div>

          {/* Center: Navbar Links */}
          <div className="flex flex-grow justify-end text-gray-800">
            <ul className="flex gap-8 text-base lg:text-lg">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Facebook</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div
        className="block w-full h-[75vh] bg-cover bg-center md:hidden"
        style={{
          backgroundImage: "url('/banner-for-mobile.jpg')",
        }}
      >

      {/* Mobile Navbar */}
        <div className="flex items-center justify-between px-4 py-4 lg:hidden">
          <div className="flex items-center">
            <Link to='/'>
              <LazyLoadImage className="w-16" src='/logo1.png' alt="Logo" effect='blur' loading='lazy'/>
            </Link>
          </div>

          <div className="flex items-right">
            <ul className="flex items-right text-gray-800 pt-1 gap-4 text-xs">
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
              <li>
                <Link to="">Twiitter</Link>
              </li>
              <li>
                <Link to="">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
        </div>

      {/* Mobile Navbar */}
      {showMobileNavbar && (
        <MobileNavbar onClose={toggleMobileNavbar} />
      )}
    </div>
  );
};

export default HeaderForHome;
