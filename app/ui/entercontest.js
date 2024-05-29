"use client";

import Image from "next/image";
import Popup from "reactjs-popup";

export default function EnterContest() {
  return (
    <div className="flex flex-col items-center" id="EnterContest">
      <h1 className="text-4xl font-bold">How to Participate</h1>
      <p className="text-3xl p-3">
        1. Download and create an account on the Klick Photography App.
      </p>
      <div className="flex flex-row justify-center space-x-20 p-3">
        <Image
          src="/klick-appstore-qr.jpg"
          alt="QR Code 1"
          width={300}
          height={300}
        />
        <Image
          src="/klick-playstore-qr.jpg"
          alt="QR Code 2"
          width={300}
          height={300}
        />
      </div>
      <p className="text-3xl p-3">
        2. Post your photo on Klick with the tag #NUSPSMontage2024.
      </p>
      <p className="text-3xl p-3">
        3. Complete the sign-up form at{" "}
        <a
          className="no-underline hover:underline text-blue-600"
          href="https://nus.campuslabs.com/engage/submitter/form/start/640898"
          target="_blank">
          {" "}
          this link here.
        </a>
      </p>
      <p className="text-3xl p-3">
        4. Follow @nusps, @canonsingapore, @cathayphoto and @nycsg on Instagram.
      </p>
      <div className="flex flex-row justify-center space-x-20 p-3 pb-5">
        <a
          className="text-xl no-underline hover:underline text-blue-600"
          href=""
          target="_blank">
          {" "}
          Rules and Regulations
        </a>
        <a
          className="text-xl no-underline hover:underline text-blue-600"
          href=""
          target="_blank">
          {" "}
          Terms and Conditions
        </a>
      </div>
      <hr className="lg:w-2/4 border-2 border-black m-1 my-3" />
    </div>
  );
}
