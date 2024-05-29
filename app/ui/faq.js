"use client";

import React from "react";
import "reactjs-popup/dist/index.css";

export default function Faq() {
  return (
    <div className="flex flex-col items-center w-full" id="FAQ">
      <div className="flex flex-col items-center w-2/3">
        <hr className="lg:w-4/5 border-2 border-titleGreen mt-8 mb-8 m-1 my-3" />
        <h1 className="text-4xl pb-5 font-eb-garamond font-bold text-titleGreen">FAQs</h1>
        <p className="text-3xl p-3 font-eb-garamond font-bold text-titleGreen">
          Who can take part in the NUSPS Montage 2024 Competition?
        </p>
        <p className="text-xl p-3 text-center">
          You must be within the age range of 13 and 28 (inclusive) as of 1st
          Jan 2024. Anyone who has completed all the steps for submission will
          be considered for NUSPS’ Montage 2024 Competition.
        </p>
        <p className="text-3xl p-3 font-eb-garamond font-bold text-titleGreen">
          Can non-students participate in the workshops and competition? E.g.
          NSF.
        </p>
        <p className="text-xl p-3 text-center">
          Yes, as long as you are within the age range of 13 and 28 (inclusive)
          as of 1st Jan 2024.
        </p>
        <p className="text-3xl p-3 font-eb-garamond font-bold text-titleGreen">
          Do I need to pay to join the Montage 2024 Competition?
        </p>
        <p className="text-xl p-3 text-center">
          No, participation in the Montage 2024 Competition is free of charge.
          Any publicity material that claims otherwise is fraudulent and should
          be treated as such; do also report such incidents by emailing us at
          secretary@nusps.org.sg if you come across them!
        </p>
        <div className="flex flex-row justify-center space-x-20 p-3 pb-5">
          <a
            className="text-2xl no-underline hover:underline text-blue-600"
            href="https://tinyurl.com/montage2024-faqs"
            target="_blank">
            {" "}
            More FAQs here
          </a>
        </div>
        <hr className="lg:lg:w-4/5 border-2 border-black m-1 my-3" />
      </div>
    </div>
  );
}
