'use client'

import Image from "next/image";
import Popup from "reactjs-popup";
import React, { useState } from 'react';


export default function Theme() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background') {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center my-10" id="Theme">
      <h1 className="text-7xl px-5">Perspective:</h1>
      <h1 className="text-7xl px-5">Youth in Focus</h1>

      <p className="max-w-[1100px] text-xl mt-7 text-center px-5">This competition is for Singaporean citizen and/or currently resides in Singapore, aged between 13 to 28.</p>
      <br/>
      <p className="max-w-[1100px] text-xl mb-7 mt-5 text-center px-5">Montage 2024 aims to amplify the perspectives of young individuals through photography, exploring themes of youth culture, identity, and aspirations. Through our series of workshops, we hope you will pick up useful photography skills and unleash your creative potential in our competition!</p>
      <div className="flex flex-row flex-wrap min-w-96 max-w-[85%] items-center justify-center">
        <div className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-96 m-2 bg-yellow-50 shadow shadow-black 
        ">
          <p className="text-3xl">First Prize</p>
          <p className="text-2xl">Canon R10 (18-45mm Kit)</p>
          <Image 
            src="/first-prize.webp"
            width={300}
            height={300}
            alt="First Place Prize Image"
          />
          <p className="text-2xl">&</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          <hr className="w-64 border-t-2 border-black m-1" />
          <p className="text-2xl">Worth $1609</p>
        </div>

        <div className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-96 m-2 bg-yellow-50 shadow shadow-black 
        ">
          <p className="text-3xl">Second Prize</p>
          <p className="text-2xl">Canon R50 (18-45mm Kit)</p>
          <Image 
            src="/second-prize.webp"
            width={250}
            height={100}
            alt="Second Place Prize Image"
          />
          <p className="text-2xl">&</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          <hr className="w-64 border-t-2 border-black m-1" />
          <p className="text-2xl">Worth $1099</p>
        </div>

        <div className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-96 m-2 bg-yellow-50 shadow shadow-black 
        ">
          <p className="text-3xl">Third Prize</p>
          <p className="text-2xl">Canon G7X (Mark ii)</p>
          <Image 
            src="/third-prize.png"
            width={300}
            height={300}
            alt="Third Place Prize Image"
          />
          <p className="text-2xl">&</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          <hr className="w-64 border-t-2 border-black m-1" />
          <p className="text-2xl">Worth $899</p>
        </div>
      </div>
      
      <div className="flex flex-col min-w-96 max-w-[1180px] items-center justify-center bg-yellow-50 shadow shadow-black rounded-xl mt-3 py-4 mx-10">
        <h1 className="text-3xl">Hourable Mentions (x3)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 min-w-96 w-full place-items-center px-5">
          <div className="flex flex-col items-center order-2 lg:order-1">
            <h1 className="text-2xl">Manfrotto</h1>
            <p className="text-xl">Advanced Shoulder Bag M III</p>
          </div>
          <Image 
            src="/bag.png"
            width={300}
            height={300}
            alt="Hourable Mention Prizes"
            className="order-1 lg:order-2"
          />
          <Image 
            src="/joby.png"
            width={300}
            height={300}
            alt="Hourable Mention Prizes"
            className="order-3 lg:order-3"
          />
          <div className="flex flex-col items-center order-4 lg:order-4">
            <h1 className="text-2xl">Joby</h1>
            <p className="text-xl">Compact Action Kit</p>
          </div>
        </div>
        <hr className="w-64 lg:w-3/4 border-t-2 border-black m-1 my-3" />
        <p className="text-2xl">Worth $218</p>
      </div>


      {/* Modal structure */}
      <div>
        {/* Button to open modal */}
        <button 
          type="button" 
          className="m-5 w-44 text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none 
            focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 
            me-2 mb-2 dark:bg-yellow-800 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700"
          onClick={openModal}
        >
          Register Now
        </button>

        {/* Modal structure */}
        {isOpen && (
          <div 
            id="modal-background" 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50" 
            onClick={handleOutsideClick}
          >
            <div className="relative w-full max-w-3xl mx-4 bg-white rounded shadow-lg">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">How to Register</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">&times;</button>
              </div>

              {/* Modal content */}
              <div className="p-4 overflow-y-auto max-h-96">
                <h1 className="mb-4">To qualify and have your entry considered valid for Montage 2024, participants must satisfy ALL of the below requirements:</h1>
                <ol className="list-decimal ml-5">
                  <li className="mb-4">
                    <p>Be within the age range of 13 and 28 (inclusive) as of 1st Jan 2024</p>
                  </li>
                  <li className="mb-4">
                    <p>Create an account on the Klick Photography application.</p>
                  </li>
                  <li className="mb-4">
                    <p>Add #Montage2024 to your Klick post.</p>
                  </li>
                  <li className="mb-4">
                    <p>Additionally, hashtag all of the following: #NUSPS, #Canon, #CanonSingapore, #CathayPhoto, #nycsg, #ycmsg, and #youngchangemakers.</p>
                  </li>
                  <li className="mb-4">
                    <p>Ensure you retain the original image file (e.g. camera RAW, DNG, JPEG/JPG file with EXIF data, etc.) and/or film negatives for photos submitted. Shortlisted participants will be required to submit these items for verification purposes.</p>
                  </li>
                  <li className="mb-4">
                    <p>Klick account used to post the participating work must be public. Your account must be following @NUSPS, @Canon, @CanonSingapore, @CathayPhoto on Klick</p>
                  </li>
                </ol>
              </div>

              {/* Modal footer */}
              <div className="flex items-center justify-end p-4 border-t">
                <button onClick={closeModal} className="px-4 py-2 text-white bg-gray-400 hover:bg-gray-500 rounded">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
