import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const navigate = useNavigate();

  const toggleMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="w-full lg:px-10" style={{background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)"}}>
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
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center px-4 pt-2 pb-4 text-lg lg:text-xl xl:text-xl">
          {/* Left: Logo */}
          <div className="flex flex-grow justify-start items-center">
            <h1 className="md:text-xl lg:text-2xl xl:text-2xl text-gray-600">
              <Link to='/'>
                <img className="w-[6rem]" src='/logo1.png' alt="Logo" />
              </Link>
            </h1>
          </div>

          {/* Center: Navbar Links */}
          <div className="flex flex-grow justify-end items-center text-gray-600">
            <ul className="flex items-center gap-8 text-base lg:text-lg">
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

      {/* Mobile Navbar */}
      {showMobileNavbar && (
        <MobileNavbar onClose={toggleMobileNavbar} />
      )}
    </div>
  );
};

export default Header;