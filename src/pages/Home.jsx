import { Line } from "react-chartjs-2";

import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

// Import images
import emilyImage from "../assets/emilywilliams.jpg";
import ryanImage from "../assets/ryanjohnson.jpg";
import brandonImage from "../assets/brandonmitchell.jpg";
import jessicaImage from "../assets/jessicataylor.jpg";
import ArrowUp from "../assets/arrow-up.svg";
import ArrowDown from "../assets/arrow-down.svg";
import HeartBPM from "../assets/HeartBPM.svg";
import respiratoryrate from "../assets/respiratory rate.svg";
import temperature from "../assets/temperature.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsuranceIcon from "../assets/InsuranceIcon.svg";
import BirthIcon from "../assets/BirthIcon.svg";
import icon from "../assets/icon.svg";
// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const patients = [
  { name: "Jessica Taylor", age: 28, gender: "Female", image: jessicaImage },
];

const chartData = {
  labels: [
    "Oct, 2023",
    "Nov, 2023",
    "Dec, 2023",
    "Jan, 2024",
    "Feb, 2024",
    "Mar, 2024",
  ],
  datasets: [
    {
      label: "Systolic",
      data: [130, 160, 140, 120, 150, 160],
      borderColor: "#E91E63",
      backgroundColor: "rgba(233, 30, 99, 0.2)",
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: "Diastolic",
      data: [80, 78, 85, 70, 75, 78],
      borderColor: "#9C27B0",
      backgroundColor: "rgba(156, 39, 176, 0.2)",
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

const getPatientDetails = () => {};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 180,
    },
  },
};

const Home = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    // <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100 h-screen">
    //   {/* Left Section: Patients */}
    //   <div className="col-span-1 bg-white p-4 rounded-lg shadow">
    //     <h2 className="text-lg font-bold mb-4">Patients</h2>
    //     <ul className="space-y-4">
    //       {patients.map((patient, index) => (
    //         <li
    //           key={index}
    //           className={`p-2 rounded-lg flex items-center space-x-4 ${
    //             patient.name === "Jessica Taylor" ? "" : ""
    //           }`}
    //           onClick={getPatientDetails()}
    //         >
    //           <img
    //             src={patient.image}
    //             alt={patient.name}
    //             className="h-10 w-10 rounded-full object-cover"
    //           />
    //           <div className="flex items-center justify-center gap-24">
    //             <div>
    //               <p className="font-medium text-xs w-32">{patient.name}</p>
    //               <p className="text-sm text-gray-500">
    //                 {patient.gender}, {patient.age}
    //               </p>
    //             </div>
    //             <img src={icon} alt="icon" className="h-4 w-4" />
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100 h-screen">
      {/* Left Section: Patients */}
      <div className="col-span-1 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Patients</h2>
        <ul className="space-y-4">
          {patients.map((patient, index) => (
            <li key={index} className="relative">
              <div className="p-2 rounded-lg flex items-center justify-between space-x-4 cursor-pointer hover:bg-gray-200">
                <div className="flex items-center space-x-4">
                  <img
                    src={patient.image}
                    alt={patient.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-xs">{patient.name}</p>
                    <p className="text-sm text-gray-500">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => toggleDropdown(index)}
                >
                  <FaEllipsisV />
                </button>
              </div>
              {/* Dropdown */}
              {activeDropdown === index && (
                <div className="absolute right-0 top-12 bg-white shadow-lg border rounded-md p-4 z-10 w-48">
                  <p className="text-sm font-medium">Selected Patient:</p>
                  <p className="text-gray-700">{patient.name}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Center Section: Diagnosis History */}
      <div className="col-span-2 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Diagnosis History</h2>

        <div className="bg-purple-100 p-4 rounded-lg mb-6">
          <div className="flex h-full">
            {/* Header and Chart Section */}
            <div className="w-[80%]">
              <div className="flex justify-between items-center mb-4 w-[90%]">
                <h3 className="text-xl font-bold">Blood Pressure</h3>
                <p className="text-sm text-gray-600">Last 6 Months</p>
              </div>

              <div className="h-full">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col items-center gap-4 w-[30%]">
              {/* Systolic */}
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[#E66FD2] rounded-full"></div>
                  <span className="text-gray-700">Systolic</span>
                </div>
                <p className="text-2xl font-semibold mt-2">160</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src={ArrowUp} alt="Up Arrow" className="h-4 w-4" />
                  <p>Higher than Average</p>
                </div>
              </div>

              {/* Divider */}
              <hr className="w-40 border border-gray-300 my-2" />

              {/* Diastolic */}
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[#8C6FE6] rounded-full"></div>
                  <span className="text-gray-700">Diastolic</span>
                </div>
                <p className="text-2xl font-semibold mt-2">78</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src={ArrowDown} alt="Down Arrow" className="h-4 w-4" />
                  <p>Lower than Average</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vitals */}
        <div className="grid grid-cols-3 gap-4 h-[228px]">
          <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center gap-4">
            <img src={respiratoryrate} alt="Heart Bpm" className="h-20 w-20" />
            <p className="text-sm text-gray-500">Respiratory Rate</p>
            <p className="text-3xl font-bold">20 bpm</p>
            <p className="text-sm text-gray-500">Normal</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg flex flex-col items-center gap-4">
            <img src={temperature} alt="temperature" className="h-20 w-20" />
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="text-3xl font-bold">98.6°F</p>
            <p className="text-sm text-gray-500">Normal</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg flex flex-col items-center gap-4">
            <img src={HeartBPM} alt="Heart Bpm" className="h-20 w-20" />
            <p className="text-sm text-gray-500">Heart Rate</p>
            <p className="text-3xl font-bold">78 bpm</p>
            <div className="flex items-center gap-1">
              <img src={ArrowDown} alt="Dropdown Icon" className="h-4 w-4" />
              <p className="text-sm text-gray-500">Lower than Average</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Jessica Taylor Profile */}
      <div className="col-span-1 bg-white p-4 rounded-lg shadow gap-4">
        <img
          src={jessicaImage}
          alt="Jessica Taylor"
          className="h-32 w-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-center font-bold text-lg ">Jessica Taylor</h3>
        <ul className="mt-4 space-y-2">
          <li className="flex items-start">
            <img
              src={FemaleIcon}
              alt="Female icon"
              className="text-gray-500  mr-2 mt-1"
            />
            <div>
              <span className="font-semibold">Date Of Birth:</span>
              <span className="block">August 23, 1996</span>
            </div>
          </li>
          <li className="flex items-start">
            <img
              src={BirthIcon}
              alt="Female icon"
              className="text-gray-500  mr-2 mt-1"
            />
            <div>
              <span className="font-semibold">Gender:</span>
              <span className="block">Female</span>
            </div>
          </li>
          <li className="flex items-center">
            {/* <FaPhone className="text-gray-500 mr-2" /> */}
            <img
              src={PhoneIcon}
              alt="Female icon"
              className="text-gray-500  mr-2 mt-1"
            />
            <span>+91-9876543210</span>
          </li>
          <li className="flex items-center">
            <img
              src={PhoneIcon}
              alt="Female icon"
              className="text-gray-500  mr-2 mt-1"
            />
            <div>
              <span className="font-semibold">Emergency Contacts</span>
              <span className="block">+91-9876543210</span>
            </div>
          </li>

          <li className="flex items-center">
            <img
              src={InsuranceIcon}
              alt="Female icon"
              className="text-gray-500  mr-2 mt-1"
            />
            <div>
              <span className="font-semibold">Insurance Provider</span>
              <span className="block">Sunrise Health Assurance</span>
            </div>
          </li>
        </ul>
        <button className="bg-teal-500 text-white top-24 justify-between   left-11 relative items-center py-2 px-4 rounded-2xl hover:bg-teal-600">
          Show All Information
        </button>
      </div>
      {/* Lab Results Section */}
      {/* Lab Results Section */}
      {/* Parent Container */}
      <div className="flex justify-between relative    end-10 flex-col   ">
        {/* Left Section */}
        <div className="w-full">{/* Your other content or left section */}</div>

        {/* Lab Results Section (Right Section) */}
        <div className="relative left-[1144px]">
          <div className=" relative bg-white mt-6 right-5 p-4 rounded-lg  bottom-7  w-[80] h-[300px]  z-50">
            <h3 className="text-lg font-bold mb-4">Lab Results</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Blood Tests</span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16.707 10.293a1 1 0 00-1.414 0L11 14.586V3a1 1 0 10-2 0v11.586L4.707 10.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                  </svg>
                </button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">CT Scans</span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16.707 10.293a1 1 0 00-1.414 0L11 14.586V3a1 1 0 10-2 0v11.586L4.707 10.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                  </svg>
                </button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">
                  Radiology Reports
                </span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16.707 10.293a1 1 0 00-1.414 0L11 14.586V3a1 1 0 10-2 0v11.586L4.707 10.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                  </svg>
                </button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">X-Rays</span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16.707 10.293a1 1 0 00-1.414 0L11 14.586V3a1 1 0 10-2 0v11.586L4.707 10.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                  </svg>
                </button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Urine Test</span>
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M16.707 10.293a1 1 0 00-1.414 0L11 14.586V3a1 1 0 10-2 0v11.586L4.707 10.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
