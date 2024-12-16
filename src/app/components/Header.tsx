"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { TiCog } from "react-icons/ti";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">MORENT</div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md flex items-center mx-4">
      <FaSearch className="w-5 h-5 absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search something here"
          className="w-full pl-10 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* Heart Icon */}
        <IoIosHeart  className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />

        {/* Bell Icon with Red Dot */}
        <div className="relative">
        <FaBell  className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* Gear Icon */}
        <TiCog  className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />

        {/* Profile Image */}
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <Image
            src="/Profil.png" // Change this path to your profile image
            alt="Profile"
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
