'use client'

import Image from "next/image";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FaqComp from "./modals/faq-comp";
import FaqWorkshop from "./modals/faq-workshop";

export default function Faq() {
  return (
    <div className="flex flex-col items-center px-5" id="FAQ">
      <h1 className="text-5xl my-3">FAQ & T&C:</h1>
      <p className="max-w-[1100px] text-xl mb-7 mt-5 text-center px-5">In light of the qualitative and quantitative indicators as stated above, NUSPS has constructed a robust Frequently Asked Questions (FAQs), Terms and Conditions (T&C) and Regulations section as follows:</p>
      <div className="flex flex-row flex-wrap min-w-96 max-w-[85%] items-center justify-center">
        <a href="https://montage2024.vercel.app/faq.pdf">
          <div className="flex flex-col items-center p-3 rounded-xl
            h-[200px] w-96 m-2 bg-yellow-50 shadow shadow-black 
            cursor-pointer"
          >
            <p className="text-2xl mt-5">Competition & Workshops</p>
            <p className="text-lg my-5">Click here for the document to learn more about the FAQs related to the competition and workshop</p>
          </div>
        </a>

        <a href="https://montage2024.vercel.app/tac.pdf">
          <div className="flex flex-col items-center p-3 rounded-xl
            h-[200px] w-96 m-2 bg-yellow-50 shadow shadow-black 
            cursor-pointer"
          >
            <p className="text-2xl mt-5">Terms & Conditions</p>
            <p className="text-lg my-5">Click here for the document to learn more about the T&C related to the competition and workshop</p>
          </div>
        </a>

        <a href="https://montage2024.vercel.app/rar.pdf">
          <div className="flex flex-col items-center p-3 rounded-xl
            h-[200px] w-96 m-2 bg-yellow-50 shadow shadow-black 
            cursor-pointer"
          >
            <p className="text-2xl mt-5">Rules & Regulations</p>
            <p className="text-lg my-5">Click here for the document to learn more about the Rules & Regulations related to the competition and workshop</p>
          </div>
        </a>
      </div>

    </div>
  );}
