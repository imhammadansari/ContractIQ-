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
      <div className="w-full bg-black lg:px-10">
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between px-4 py-4 lg:hidden">
          <div className="flex items-center">
            
            <img className="w-16" src='/logo1.png' />
          </div>

          <div className="flex items-center ">
          <ul className="flex items-center text-gray-400 pt-1 gap-4 text-xs">
              <li>
                <Link to="">Telegram</Link>
              </li>
              <li>
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Whitepaper</Link>
              </li>
              <li>
                <Link to="">E-mail</Link>
              </li>
            </ul>
          </div>

        


        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center px-4 py-4 text-lg lg:text-xl xl:text-xl">
          {/* Left: Logo */}
          <div className="flex flex-grow justify-start items-center">
            <h1 className="md:text-xl lg:text-2xl xl:text-2xl text-gray-400">
              <img className="w-20" src='/logo1.png' />
            </h1>
          </div>

          {/* Center: Navbar Links */}
          <div className="flex flex-grow justify-center items-center text-gray-400">
            <ul className="flex items-center pt-1 gap-12 text-base">
              <li>
                <Link to="">Telegram</Link>
              </li>
              <li>
                <Link to="">Twitter</Link>
              </li>
              <li>
                <Link to="">Whitepaper</Link>
              </li>
              <li>
                <Link to="">E-mail</Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-gray-400 text-sm border border-gray-400 rounded px-2 py-1">ContractIQ Bot</h1>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {showMobileNavbar && (
        <MobileNavbar onClose={toggleMobileNavbar} /> // Pass toggle function
      )}
    </div>
  );
};

export default Header;
