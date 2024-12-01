import React from "react";
import { FaHome, FaUserFriends, FaCalendarAlt, FaEnvelope, FaWallet, FaCog } from "react-icons/fa";
import logo from "../assets/logo.svg"; // Replace with your logo
import profilePic from "../assets/profile.jpg"; // Replace with your profile picture

const Navbar = () => {
  return (
    <div className="bg-white  shadow-md rounded-full top-9  px-6 py-4 grid grid-cols-3 items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Tech.Care Logo" className="h-8" />
        
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8">
        <div className="text-gray-600 hover:text-gray-800 flex items-center space-x-2 cursor-pointer">
          <FaHome className="text-lg" />
          <span>Overview</span>
        </div>
        <div className="text-white bg-teal-500 px-4 py-2 rounded-md flex items-center space-x-2 cursor-pointer">
          <FaUserFriends className="text-lg" />
          <span>Patients</span>
        </div>
        <div className="text-gray-600 hover:text-gray-800 flex items-center space-x-2 cursor-pointer">
          <FaCalendarAlt className="text-lg" />
          <span>Schedule</span>
        </div>
        <div className="text-gray-600 hover:text-gray-800 flex items-center space-x-2 cursor-pointer">
          <FaEnvelope className="text-lg" />
          <span>Message</span>
        </div>
        <div className="text-gray-600 hover:text-gray-800 flex items-center space-x-2 cursor-pointer">
          <FaWallet className="text-lg" />
          <span>Transactions</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex justify-end items-center space-x-4">
        <img
          src={profilePic}
          alt="Dr. Jose Simmons"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="text-right">
          <p className="text-gray-800 font-medium">Dr. Jose Simmons</p>
          <p className="text-sm text-gray-500">General Practitioner</p>
        </div>
        <FaCog className="text-gray-600 text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
