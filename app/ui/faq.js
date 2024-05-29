'use client'

import Image from "next/image";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FaqComp from "./modals/faq-comp";
import FaqWorkshop from "./modals/faq-workshop";

export default function Faq() {
  return (
    <div className="flex flex-col items-center w-full" id="FAQ">
      <h1 className="text-5xl my-3 px-5">FAQ, T&C and R&R:</h1>
      <p className="max-w-[1100px] text-xl mb-7 mt-5 text-center px-5">In light of the qualitative and quantitative indicators as stated above, NUSPS has constructed a robust Frequently Asked Questions (FAQs), Terms and Conditions (T&C) and Regulations section as follows:</p>
      <div className="flex flex-row flex-wrap w-full lg:max-w-[85%] items-center justify-center">
        <a href="https://docs.google.com/document/d/e/2PACX-1vTO2D7flLa0mNGlo8r13GUa27S1Y0s-NimCO9r8t9zmheeqYjVsv3gGs3xnO_rITe5yqcpf0GmiVVKG/pub" target="_blank">
          <div className="flex flex-col items-center p-3 rounded-xl
            h-[200px] max-w-96  m-2 bg-yellow-50 shadow shadow-black 
            cursor-pointer"
          >
            <p className="text-2xl mt-5">Competition & Workshops</p>
            <p className="text-lg my-5">Click here for the document to learn more about the FAQs related to the competition and workshop</p>
          </div>
        </a>

        <a href="https://docs.google.com/document/d/e/2PACX-1vQD1I-r-2T2LWCQm1YLehlp2FTvspvdVA5tqVszD3P9R33LLQ0wCdvCw6LnXVJV_qXPO-hnSzYKFLHw/pub" target="_blank">
          <div className="flex flex-col items-center p-3 rounded-xl
            h-[200px] max-w-96 m-2 bg-yellow-50 shadow shadow-black 
            cursor-pointer"
          >
            <p className="text-2xl mt-5">Terms & Conditions</p>
            <p className="text-lg my-5">Click here for the document to learn more about the T&C related to the competition and workshop</p>
          </div>
        </a>

        <a href="https://docs.google.com/document/d/e/2PACX-1vQee291sojT3CZizdnkrv1ZX8_ceh0VMdg4VaC-BUdEKe0V5d3gp1W0QBjG5ub1Yb_4kpJdXxpdhe7r/pub" target="_blank">
          <div className="flex flex-col items-center p-3 rounded-xl
            h-[200px] max-w-96 m-2 bg-yellow-50 shadow shadow-black 
            cursor-pointer"
          >
            <p className="text-2xl mt-5">Rules & Regulations</p>
            <p className="text-lg my-5">Click here for the document to learn more about the Rules & Regulations related to the competition and workshop</p>
          </div>
        </a>
      </div>

    </div>
  );}
