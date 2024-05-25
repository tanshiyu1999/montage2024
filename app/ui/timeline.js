'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Chrono } from "react-chrono";
import Image from 'next/image';


export default function Timeline() {
  return (
    <section id="Timeline" className="flex justify-center">
      <div className="flex flex-col items-left w-11/12 lg:w-9/12 max-w-[1200px]">
        <h1 className="self-center text-7xl m-10">Timeline</h1>
        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5 place-items-center
            bg-yellow-50 shadow shadow-black rounded-md pt-5 my-3"
        >
          <div className="col-span-1 flex justify-center items-center mx-10 ">
            <h1 className="text-4xl">25 May</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center self-center w-9/12">
            <h1 className="self-start text-2xl mb-3">The Beginning of Montage 2024</h1>
            <Image 
              src="/montage-opens.jpg"
              width={750}
              height={100}
              alt="Portrait workshop Image"
            />
            <p className="self-start text-xl mt-5">From now til 13 July, you can submit your Montage submission here:</p>
            <a href="https://nus.campuslabs.com/engage/submitter/form/start/640898" target="_blank">
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Submission
              </button>
            </a>

          </div>
        </div>
        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
          bg-yellow-50 shadow shadow-black rounded-md pt-5 my-3"
        >
          <div className="col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">1 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
            <h1 className="self-start text-2xl mb-3">Workshop 1: Portraiture & Lighting</h1>
            <Image 
              src="/montage-event-1.png"
              width={750}
              height={100}
              alt="Portrait workshop Image"
            />
            {/* <p className="self-start text-xl mb-3">Details to be announced</p> */}

            <a href="https://nus.campuslabs.com/engage/submitter/form/start/640774" target="_blank">
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Sign Up
              </button>
            </a>

          </div>
        </div>

        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
          bg-yellow-50 shadow shadow-black rounded-md pt-5 my-3"
        >
          <div className="col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">15 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
            {/* <Image 
              src="/montage-event-1.jpg"
              width={750}
              height={100}
              alt="Portrait workshop Image"
            /> */}
            <h1 className="self-start text-2xl">Workshop 2: Street Photography</h1>
            <p className="self-start text-xl mb-3">Details to be announced</p>

            {/* <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button> */}
          </div>
        </div>

        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
          bg-yellow-50 shadow shadow-black rounded-md pt-5 my-3"
        >
          <div className="col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">29 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
            {/* <Image 
              src="/montage-event-1.jpg"
              width={750}
              height={100}
              alt="Portrait workshop Image"
            /> */}
            <h1 className="self-start text-2xl">Workshop 3: Landscape Photography for Travel</h1>
            <p className="self-start text-xl mb-3">Details to be announced</p>

            {/* <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button> */}
          </div>
        </div>

        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
          bg-yellow-50 shadow shadow-black rounded-md pt-5 my-3"
        >
          <div className="col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">13 July</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
            {/* <Image 
              src="/montage-event-1.jpg"
              width={750}
              height={100}
              alt="Portrait workshop Image"
            /> */}
            <h1 className="self-start text-2xl">Submission Close</h1>
            <p className="self-start text-xl mb-3">Details to be announced</p>

            {/* <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button> */}
          </div>
        </div>

        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
          bg-yellow-50 shadow shadow-black rounded-md pt-5 my-3"
        >
          <div className="col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">27 July</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
            {/* <Image 
              src="/montage-event-1.jpg"
              width={750}
              height={100}
              alt="Portrait workshop Image"
            /> */}
            <h1 className="self-start text-2xl">Prize Presentation</h1>
            <p className="self-start text-xl mb-3">Details to be announced</p>

            {/* <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button> */}
          </div>
        </div>
  
      </div>
    </section>
  );
}
