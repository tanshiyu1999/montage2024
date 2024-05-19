'use client'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Chrono } from "react-chrono";
import Image from 'next/image';


export default function Timeline() {
  return (
    <section id="Timeline" className="flex justify-center">
      <div className="flex flex-col items-left w-9/12 max-w-[1200px] bg-blue-100">
        <h1 className="self-center text-7xl m-10">Timeline</h1>
        <div 
          className="card-container bg-blue-300"
        >
          <h1>24 May</h1>
          <div className="">
            <h1 className="">The Start of Montage</h1>
            <p>From now til 13 July, you can submit your Montage submission here:</p>
            <button>Submission Button</button>
          </div>
        </div>
        <div className="card-container grid grid-cols-5">
          <div className="bg-blue-200 col-span-1 flex justify-end items-center mx-10">
            <h1 className="text-4xl">1 June</h1>
          </div>
          <div className="col-span-4 m-5 flex flex-col items-center">
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
      </div>
    </section>
  );
}
