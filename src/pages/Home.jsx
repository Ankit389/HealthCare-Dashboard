import React from "react";
import { FaCalendarAlt, FaHeart, FaThermometerHalf, FaLungs, FaPhone, FaEnvelope } from "react-icons/fa";

// Import images
import emilyImage from "../assets/emilywilliams.jpg";
import ryanImage from "../assets/ryanjohnson.jpg";
import brandonImage from "../assets/brandonmitchell.jpg";
import jessicaImage from "../assets/jessicataylor.jpg";

const patients = [
  { name: "Emily Williams", age: 18, gender: "Female", image: emilyImage },
  { name: "Ryan Johnson", age: 45, gender: "Male", image: ryanImage },
  { name: "Brandon Mitchell", age: 36, gender: "Male", image: brandonImage },
  { name: "Jessica Taylor", age: 28, gender: "Female", image: jessicaImage },
];

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Section: Patients */}
      <div className="col-span-1 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Patients</h2>
        <ul className="space-y-4">
          {patients.map((patient, index) => (
            <li
              key={index}
              className={`p-2 rounded-lg flex items-center space-x-4 ${
                patient.name === "Jessica Taylor" ? "bg-teal-100" : ""
              }`}
            >
              <img
                src={patient.image}
                alt={patient.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{patient.name}</p>
                <p className="text-sm text-gray-500">
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <button className="ml-auto">
                <FaCalendarAlt className="text-gray-400" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Center Section: Diagnosis History */}
      <div className="col-span-2 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Diagnosis History</h2>
        {/* Chart Placeholder */}
        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <h3 className="text-sm font-bold mb-2">Blood Pressure</h3>
          <div className="text-center h-32">[Chart Placeholder]</div>
        </div>
        {/* Vitals */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
            <FaLungs className="text-3xl text-blue-600 mb-2" />
            <p className="text-lg font-bold">20 bpm</p>
            <p className="text-sm text-gray-500">Respiratory Rate</p>
            <p className="text-sm text-gray-500 start-4">Nurmal</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg flex flex-col items-center">
            <FaThermometerHalf className="text-3xl text-pink-600 mb-2" />
            <p className="text-lg font-bold">98.6°F</p>
            <p className="text-sm text-gray-500 ">Temperature</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg flex flex-col items-center">
            <FaHeart className="text-3xl text-red-600 mb-2" />
            <p className="text-lg font-bold">78 bpm</p>
            <p className="text-sm text-gray-500">Heart Rate</p>
          </div>
        </div>
      </div>

      {/* Right Section: Jessica Taylor Profile */}
      <div className="col-span-1 bg-white p-4 rounded-lg shadow">
        <img
          src={jessicaImage}
          alt="Jessica Taylor"
          className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-center font-bold text-lg">Jessica Taylor</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <span>Date Of Birth: August 23, 1996</span>
          </li>
          <li className="flex items-center">
            <FaHeart className="text-gray-500 mr-2" />
            <span>Gender: Female</span>
          </li>
          <li className="flex items-center">
            <FaPhone className="text-gray-500 mr-2" />
            <span>Contact Info: (415) 555-1234</span>
          </li>
          <li className="flex items-center">
            <FaPhone className="text-gray-500 mr-2" />
            <span>Emergency Contact: (415) 555-5678</span>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-2" />
            <span>Insurance Provider: Sunrise Health Assurance</span>
          </li>
        </ul>
        <button className="mt-4 w-full bg-teal-500 text-white p-2 rounded-lg">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default Home;
