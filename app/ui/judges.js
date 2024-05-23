'use client'

import Image from "next/image";
import Popup from "reactjs-popup";

export default function Judges() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl text-center m-10">Judges</h1>
      <div className="flex flex-row flex-wrap min-w-96 max-w-[85%] items-center justify-center">
        <div className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-96 m-2 bg-yellow-50 shadow shadow-black 
        ">
          <Image 
            src="/first-prize.webp"
            width={300}
            height={300}
            alt="First Place Prize Image"
          />
          <h2 className="text-3xl">John Doe</h2>
          <p className="text-lg h-24 px-5">
            Jackie Chan is a great photographer and one of the best Please do not This is the number of  (90 characters)
          </p>

          <hr className="w-64 border-t-2 border-black m-1" />
          <p className="text-xl cursor-pointer">Learn More!</p>


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
    </div>
  );
}
