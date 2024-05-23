'use client'

import Image from "next/image";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FaqComp from "./modals/faq-comp";
import TncRules from "./modals/tnc-rules";
import TncConditions from "./modals/tnc-condition";

export default function Tac() {
  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-5xl my-3">T&C and Rules & Regulations:</h1>
      <p className="text-lg">In light of the qualitative and quantitative indicators as stated above, NUSPS has constructed a robust Frequently Asked Questions (FAQs) section as follows:</p>
      <div
        className="flex flex-row"
      >
        <TncRules />
        <TncConditions />
      </div>

    </div>
  );}
