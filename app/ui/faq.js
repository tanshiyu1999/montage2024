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
      <div id="faq-container-holder" className="">
        
      </div>
      <div
        className="flex flex-row"
      >
        <Popup 
          trigger={
            <div 
              className="cursor-pointer bg-pink-50 m-5"
            
            >
              <Image 
                src="/first-prize.webp"
                width={250}
                height={250}
                alt="First Place Prize Image"
              />
              <h1>Competition</h1>
              <p>Click here to know more about the FAQs related to the competition.</p>
            </div>
          } 
          modal={true}  
        >
          <div>Popup content here !!</div>
        </Popup>
        <Popup
          trigger={
            <div
              className="cursor-pointer bg-pink-50 m-5"
            >
              <Image 
                src="/first-prize.webp"
                width={250}
                height={250}
                alt="First Place Prize Image"
              />
              <h1>Workshops</h1>
              <p>Click here to learn about the FAQs related to the Workshops.</p>
            </div>
          }
        >
          <div>Pop content here !!</div>
        </Popup>
      </div>

    </div>
  );}
