"use client";

import Image from "next/image";
import Popup from "reactjs-popup";
import React, { useState } from "react";

export default function Theme() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center my-10" id="Theme">
      <h1 className="text-7xl font-bold px-5">Perspective: Youths in Focus</h1>

      <p className="max-w-[1100px] text-xl mt-7 text-center px-5">
        NUS Photographic Society's annual Montage photography NUS Photographic
        Society's annual Montage photography competition is back! From their
        spontaneous adventures to the challenges they overcome, we invite you to
        explore this year's Montage theme "Perspective: Youth in Focus" and
        showcase how the youth of today are shaping tomorrow!
      </p>
      <br />
      <p className="max-w-[1100px] text-xl mb-7 mt-5 text-center px-5">
        Montage 2024 is for Singaporean citizen and/or currently resides in
        Singapore, aged between 13 to 28.
      </p>
      <hr className="lg:w-2/4 border-2 border-black m-1 my-3" />

      <h1 className="text-4xl font-bold">Prizes</h1>
      <div className="flex flex-row flex-wrap w-full lg:max-w-[90%] items-center justify-center pb-2">
        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-max-96 m-6 bg-yellow-0 
        ">
          <p className="text-3xl">Second Prize</p>
          <Image
            src="/second-prize.webp"
            width={250}
            height={100}
            alt="Second Place Prize Image"
          />
          <p className="text-xl">Canon R50</p>
          <p className="text-xl">(18-45mm Kit)</p>
          <p className="text-2xl">+</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          {/* <hr className="w-64 border-t-2 border-black m-1" /> */}
          <p className="text-2xl mt-3 font-bold">Worth $1099</p>
        </div>

        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-max-96 m-2 bg-yellow-0 
        ">
          <p className="text-3xl">First Prize</p>
          <Image
            src="/first-prize.webp"
            width={300}
            height={300}
            alt="First Place Prize Image"
          />
          <p className="text-xl">Canon R10</p>
          <p className="text-xl">(18-45mm Kit)</p>
          <p className="text-2xl">+</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          {/* <hr className="w-64 border-t-2 border-black m-1" /> */}
          <p className="text-2xl mt-3 font-bold">Worth $1609</p>
        </div>

        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-max-96 m-2 bg-yellow-0
        ">
          <p className="text-3xl">Third Prize</p>
          <Image
            src="https://i.imgur.com/FJgilEJ.png"
            width={300}
            height={300}
            alt="Third Place Prize Image"
          />
          <p className="text-xl">Canon PowerShot G7X</p>
          <p className="text-xl">Mark ii</p>
          <p className="text-2xl">+</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          {/* <hr className="w-64 border-t-2 border-black m-1" /> */}
          <p className="text-2xl mt-3 font-bold">Worth $899</p>
        </div>
      </div>

      <hr className="lg:w-2/4 border-2 border-black m-1 my-3" />

      <div className="flex flex-col w-11/12 max-w-96 lg:max-w-[1180px] items-center justify-center bg-yellow-0  rounded-xl mt-10 py-4 mx-10">
        <h1 className="text-3xl">Honourable Mentions ( x 3 )</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-full place-items-center px-5">
          <div className="flex flex-col items-center order-2 lg:order-1"></div>
          <Image
            src="https://i.imgur.com/q2vpqaz.png"
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
          <div className="flex flex-col items-center order-4 lg:order-4"></div>
        </div>
        <p className="text-xl">Manfrotto Shoulder Bag M III</p>
        <p className="text-xl">+</p>
        <p className="text-xl">Joby Compact Action Kit</p>
        <p className="text-2xl mt-3 font-bold">Worth $218</p>
      </div>
      <hr className="lg:w-2/4 border-2 border-black m-1 my-3" />
      {/* Modal structure */}
      <div>
        {/* Button to open modal */}
        {/* <button
          type="button"
          className="m-5 w-44 text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none 
            focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 
            me-2 mb-2 dark:bg-yellow-800 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700"
          onClick={openModal}>
          Register Now
        </button> */}

        {/* Modal structure */}
        {isOpen && (
          <div
            id="modal-background"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
            onClick={handleOutsideClick}>
            <div className="relative w-full max-w-3xl mx-4 bg-white rounded shadow-lg">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">How to Register</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700">
                  &times;
                </button>
              </div>

              {/* Modal content */}
              <div className="p-4 overflow-y-auto max-h-96 flex flex-col items-center">
                <h1 className="mb-4">
                  To qualify and have your entry considered valid for Montage
                  2024, participants must satisfy ALL of the below requirements:
                </h1>
                <ol className="list-decimal ml-5">
                  <li className="mb-4">
                    <p>
                      Be within the age range of 13 and 28 (inclusive) as of 1st
                      Jan 2024
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      Create an account on the Klick Photography application.
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>Add #Montage2024 to your Klick post.</p>
                  </li>
                  <li className="mb-4">
                    <p>
                      Additionally, hashtag all of the following: #NUSPS,
                      #Canon, #CanonSingapore, #CathayPhoto, #nycsg, #ycmsg, and
                      #youngchangemakers.
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      Ensure you retain the original image file (e.g. camera
                      RAW, DNG, JPEG/JPG file with EXIF data, etc.) and/or film
                      negatives for photos submitted. Shortlisted participants
                      will be required to submit these items for verification
                      purposes.
                    </p>
                  </li>
                  <li className="mb-4">
                    <p>
                      Klick account used to post the participating work must be
                      public. Your account must be following @NUSPS, @Canon,
                      @CanonSingapore, @CathayPhoto on Klick
                    </p>
                  </li>
                </ol>
                <a
                  href="https://nus.campuslabs.com/engage/submitter/form/start/640898"
                  target="_blank">
                  <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                    Submission
                  </button>
                </a>
              </div>

              {/* Modal footer */}
              <div className="flex items-center justify-end p-4 border-t">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-white bg-gray-400 hover:bg-gray-500 rounded">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
