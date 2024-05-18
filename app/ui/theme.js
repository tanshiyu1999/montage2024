'use client'

import Image from "next/image";
import Popup from "reactjs-popup";

export default function Theme() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl bg-blue-200">Theme: Youth in Focus</h1>
      <p className="w-[1100px] text-xl m-7 text-center">This competition is for Singaporean citizen and/or currently resides in Singapore, aged between 13 to 25.</p>
      <br/>
      <p className="w-[1100px] text-xl m-7 text-center">By showcasing powerful and thought-provoking practices through photography, capture images that depict acts of bravery, resilience, or determination in the face of challenges or adversity. Your entry should seek to inspire Singaporeans to step out of their comfort zones, take risks, and document courageous moments in their everyday lives or in the community.</p>
      <div className="flex flex-row flex-wrap min-w-96 max-w-[85%] items-center justify-center">
        <div className="flex flex-col items-center p-3 rounded-xl
          h-[400px] w-96 m-2 bg-yellow-50 shadow shadow-black 
        ">
          <p className="text-3xl">First Prize</p>
          <p className="text-2xl">Canon R10 (18-45mm Kit)</p>
          <Image 
            src="/first-prize.webp"
            width={300}
            height={300}
            alt="First Place Prize Image"
          />
          <p className="text-2xl">&</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          <hr className="w-64 border-t-2 border-black m-1" />
          <p className="text-2xl">Worth $1609</p>
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
      
      <Popup 
        trigger={
          <button 
            type="button" 
            className="m-5 w-44 text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none 
              focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 
              me-2 mb-2 dark:bg-yellow-800 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700">
            Register Now
          </button>
        } 
        modal={true}
      >
        <div>
          <h1>How to participate</h1>
          <ul>
            <li>
              <p>This is step 1</p>
            </li>
            <li>
              <p>This is step 1</p>
            </li>
            <li>
              <p>This is step 1</p>
            </li>
          </ul>

          <button>
            Link to Registration
          </button>


        </div>
      </Popup>
    </div>
  );
}
