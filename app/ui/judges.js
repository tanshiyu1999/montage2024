"use client";

import Image from "next/image";
import Popup from "reactjs-popup";

export default function Judges() {
  return (
    <div className="flex flex-col items-center" id="Judges">
      <h1 className="text-7xl text-center m-10">Judges</h1>
      <div className="flex flex-row flex-wrap w-full lg:max-w-[85%] items-center justify-center">
        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] max-w-96 m-2">
          <Image
            src="https://i.imgur.com/9xWRkmY.jpg"
            width={175}
            height={300}
            alt="First Place Prize Image"
          />
          <h2 className="text-3xl">Jasper Yu</h2>
          <p className="text-md h-24 px-5">
            Founder of JYU STUDIO, Jasper is a professional photographer of 11
            years with a fine arts background.
          </p>

          <hr className="w-64 border-t-2 border-black m-1" />
          <a href="https://www.jyu.sg/" target="_blank">
            <p className="text-xl cursor-pointer">Learn More!</p>
          </a>
        </div>
        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] max-w-96 m-2">
          <Image
            src="https://i.imgur.com/YA0mIb6.png"
            width={160}
            height={175}
            alt="First Place Prize Image"
          />
          <h2 className="text-3xl">Carlos Monforte</h2>
          <p className="text-md h-24 px-5">
            Carlos is passionate photographer, capturing light and emotions in
            unique portraits and panoramic landscapes.
          </p>

          <hr className="w-64 border-t-2 border-black m-1" />
          <a href="https://www.instagram.com/lightjunker/" target="_blank">
            <p className="text-xl cursor-pointer">Learn More!</p>
          </a>
        </div>
        <div
          className="flex flex-col items-center p-3 rounded-xl
          h-[400px] max-w-96 m-2">
          <Image
            src="https://i.imgur.com/m1556Sf.jpg"
            width={190}
            height={300}
            alt="First Place Prize Image"
          />
          <h2 className="text-3xl">Francis Lee</h2>
          <p className="text-md h-24 px-5">
            Francis is a photographer with 20 plus years of experience, and
            currently an adjunt lecturer on Creative Photography at Orita
            Sinclair School.
          </p>

          <hr className="w-64 border-t-2 border-black m-1" />
          <a href="https://www.instagram.com/francislee62/" target="_blank">
            <p className="text-xl cursor-pointer">Learn More!</p>
          </a>
        </div>
      </div>
    </div>
  );
}
