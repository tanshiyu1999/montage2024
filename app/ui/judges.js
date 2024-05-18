'use client'

import Image from "next/image";
import Popup from "reactjs-popup";

export default function Judges() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl text-center m-10">Judges</h1>
      <div className="grid grid-cols-3 gap-3 w-9/12 bg-pink-100 justify-items-center">
        <div className="border-4 border-black rounded-lg">
          <Image 
            src="/first-prize.webp"
            width={250}
            height={250}
            alt="First Place Prize Image"
          />
          <h2 className="bg-red-500">Judge's Name</h2>
          <p>Judge's Description</p>
          <hr 
            className="w-3/4 border-t-2 border-black mx-auto"
          />
          
          <Popup 
            trigger={
              <p className="text-center cursor-pointer">Learn More</p>
            } 
            modal={true}
          >
            <div>Popup content here !!</div>
          </Popup>
        </div>

        <div className="bg-green-200">Row 2</div>

        <div className="bg-blue-200">Row 3</div>
      </div>
    </div>
  );
}
