import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const HeaderForHome = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div
        className="w-full h-[120vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner-01-01.jpg')",
        }}
      >
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between px-4 py-4 lg:hidden">
          <div className="flex items-center">
            <Link to='/'>
              <img className="w-16" src='/logo1.png' alt="Logo" />
            </Link>
          </div>

          <div className="flex items-right">
            <ul className="flex items-right text-gray-600 pt-1 gap-4 text-xs">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
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

        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center px-14 py-4 text-lg lg:text-xl xl:text-xl">
          {/* Left: Logo */}
          <div className="flex flex-grow justify-start items-center">
            <h1 className="md:text-xl lg:text-2xl xl:text-2xl text-gray-600">
              <Link to='/'>
                <img className="w-20" src='/logo1.png' alt="Logo" />
              </Link>
            </h1>
          </div>

          {/* Center: Navbar Links */}
          <div className="flex flex-grow justify-center items-center text-gray-600">
            <ul className="flex items-center pt-1 gap-12 text-base lg:text-lg">
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

          <div>
            <h1 className="text-gray-600 text-sm lg:text-base border border-gray-600 rounded px-2 py-1">
              ContractIQ Bot
            </h1>
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
