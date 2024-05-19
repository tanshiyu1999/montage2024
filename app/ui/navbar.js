'use client'

import Image from "next/image";
import { Link } from "react-scroll";
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";



export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">Logo</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto transition-transform duration-300 ease-in-out ${
            isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
          } lg:max-h-full`}
        >
          <ul className="lg:flex lg:space-x-4">
            <li><a href="#" className="block lg:inline-block text-white p-2">Home</a></li>
            <li><a href="#" className="block lg:inline-block text-white p-2">About</a></li>
            <li><a href="#" className="block lg:inline-block text-white p-2">Services</a></li>
            <li><a href="#" className="block lg:inline-block text-white p-2">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
