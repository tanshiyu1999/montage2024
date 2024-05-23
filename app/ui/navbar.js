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
    <nav className="bg-yellow-800 p-4 fixed w-full z-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <div className="text-white text-2xl">Logo</div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 mt-3"
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
        </div>

        <div className={`w-full ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <ul className="lg:flex lg:space-x-4">
            <li><a href="#" className="block lg:inline-block text-white p-2 text-center">Theme</a></li>
            <li><a href="#" className="block lg:inline-block text-white p-2 text-center">Judges</a></li>
            <li><a href="#" className="block lg:inline-block text-white p-2 text-center">Timeline</a></li>
            <li><a href="#" className="block lg:inline-block text-white p-2 text-center">FAQ</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
