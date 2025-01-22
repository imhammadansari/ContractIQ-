import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users/check-login");
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/users/logout");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleCategorySelect = (category) => {
    navigate(`/products/${category}`);
  };

  const toggleMobileNavbar = () => {
    setShowMobileNavbar((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="w-full bg-black lg:px-10">
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between pl-4 py-4 lg:hidden">
          <div className="flex items-center gap-4">
            <img
              className="w-6 cursor-pointer"
              src="/category.png"
              alt="Menu"
              onClick={toggleMobileNavbar}
            />
            <Link to="/" className="text-lg text-white">
              Logo.
            </Link>
          </div>

          <div className="flex px-4 items-center gap-4">
            <img className="w-6" src="/user.png" alt="User" />
            <Link to="/cart">
              <img className="w-6" src="/shopping-cart.png" alt="Cart" />
            </Link>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full items-center px-4 py-4 text-lg lg:text-xl xl:text-xl">
          {/* Left: Logo */}
          <div className="flex flex-grow justify-start items-center">
            <h1 className="md:text-xl lg:text-2xl xl:text-2xl text-gray-400">
              <Link to="/">Logo.</Link>
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
