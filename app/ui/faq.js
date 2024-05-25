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
      <h1 className="text-5xl my-3">FAQ Details:</h1>
      <p className="max-w-[1100px] text-xl mb-7 mt-5 text-center px-5">In light of the qualitative and quantitative indicators as stated above, NUSPS has constructed a robust Frequently Asked Questions (FAQs) section as follows:</p>
      <div
        className="flex flex-row"
      >
        <FaqComp />
        <FaqWorkshop />
      </div>

    </div>
  );}
