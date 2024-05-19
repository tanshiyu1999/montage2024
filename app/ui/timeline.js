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
          className="card-container grid grid-cols-1 xl:grid-cols-5 place-items-center my-2
            bg-yellow-50 shadow shadow-black rounded-md pt-5"
        >
          <div className="col-span-1 flex justify-center items-center mx-10 ">
            <h1 className="text-4xl">24 May</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center self-center w-9/12">
            <h1 className="self-start text-2xl">The Beginning of Montage 2024</h1>
            <p className="self-start">From now til 13 July, you can submit your Montage submission here:</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
              Submission
            </button>
          </div>
        </div>
        <div 
          className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
          bg-yellow-50 shadow shadow-black rounded-md pt-5"
        >
          <div className="col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">1 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
            <Image 
              src="/second-prize.webp"
              width={250}
              height={100}
              alt="Portrait workshop Image"
            />
            <h1 className="self-start text-2xl">Workshop 1: Portraiture & Lighting</h1>
            <p className="self-start">This long ass text will be for the portraiturtext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituree and lighting workshop</p>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button>
          </div>
        </div>
        <div className="card-container grid grid-cols-5">
          <div className="bg-blue-200 col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">15 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center">
            <Image 
              src="/second-prize.webp"
              width={250}
              height={100}
              alt="Portrait workshop Image"
            />
            <h1 className="self-start text-2xl">Workshop 2: Street Photography</h1>
            <p className="self-start">This long ass text will be for the portraiturtext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituree and lighting workshop</p>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button>
          </div>
        </div>
        <div className="card-container grid grid-cols-5">
          <div className="bg-blue-200 col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">29 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center">
            <Image 
              src="/second-prize.webp"
              width={250}
              height={100}
              alt="Portrait workshop Image"
            />
            <h1 className="self-start text-2xl">Workshop 3: Landscape Photography for Travel</h1>
            <p className="self-start">This long ass text will be for the portraiturtext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituree and lighting workshop</p>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
              Sign Up
            </button>
          </div>
        </div>
        <div className="card-container grid grid-cols-5">
          <div className="bg-blue-200 col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">13 July</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center">
            <Image 
              src="/second-prize.webp"
              width={250}
              height={100}
              alt="Portrait workshop Image"
            />
            <h1 className="self-start text-2xl">Submission Close</h1>
            <p className="self-start">This long ass text will be for the portraiturtext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituree and lighting workshop</p>
          </div>
        </div>
        <div className="card-container grid grid-cols-5">
          <div className="bg-blue-200 col-span-1 flex justify-center items-center mx-10">
            <h1 className="text-4xl">27 July</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center">
            <Image 
              src="/second-prize.webp"
              width={250}
              height={100}
              alt="Portrait workshop Image"
            />
            <h1 className="self-start text-2xl">Prize Presentation Day</h1>
            <p className="self-start">This long ass text will be for the portraiturtext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituretext will be for the portraituree and lighting workshop</p>
          </div>
        </div>
  
      </div>
    </section>
  );
}
