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
      <h1 className="text-6xl font-bold px-5 lg:max-w-[1100px] font-eb-garamond">Perspective: Youths in Focus</h1>

      <p className="max-w-[1100px] text-xl mt-7 text-center px-5">
        NUS Photographic Society's annual Montage photography NUS Photographic
        Society's annual Montage photography competition is back! From their
        spontaneous adventures to the challenges they overcome, we invite you to
        explore this year's Montage theme <b>"Perspective: Youth in Focus"</b> and
        showcase how the youth of today are shaping tomorrow!
      </p>
      <br />
      <p className="max-w-[1100px] text-xl mb-7 mt-5 text-center px-5">
        Montage 2024 is for Singaporean citizen and/or currently resides in
        Singapore, aged between 13 to 28.
      </p>
      <hr className="lg:w-2/4 border-2 border-black m-1 my-3" />

      <h1 className="text-5xl font-bold font-eb-garamond">Prizes</h1>
      <div className="flex flex-row flex-wrap w-full lg:max-w-[90%] items-center justify-center pb-2">
        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-max-96 m-6 bg-yellow-0 
        ">
          <p className="text-3xl font-eb-garamond font-bold">Second Prize</p>
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
          <p className="text-3xl font-eb-garamond font-bold">First Prize</p>
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
          <p className="text-3xl font-eb-garamond font-bold">Third Prize</p>
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
        <h1 className="text-3xl font-eb-garamond font-bold">Honourable Mentions (x3)</h1>

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
    </div>
  );
}
