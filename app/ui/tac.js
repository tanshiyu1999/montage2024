'use client'

import Image from "next/image";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Faq() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">FAQ Details:</h1>
      <p>In light of the qualitative and quantitative indicators as stated above, NUSPS has constructed a robust Frequently Asked Questions (FAQs) section as follows:</p>
      <div
        className="flex flex-row"
      >
        <button 
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border 
          border-blue-500 hover:border-transparent rounded
          w-96"
        >
          Outline Button
        </button>
        <button 
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold 
          hover:text-white py-2 px-4 border 
          border-blue-500 hover:border-transparent rounded
          w-96"
        >
          Outline Button
        </button>
      </div>

    </div>
  );}
