"use client";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

export default function Timeline() {
  return (
    <div>
      <section id="Timeline" className="flex justify-center">
        <div className="flex flex-col items-left w-11/12 lg:w-9/12 max-w-[1200px]">
          <h1 className="self-center text-5xl mt-4">Workshops</h1>
          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
           pt-5 my-1">
            <div className="col-span-1 flex justify-center items-center mx-5">
              <h1 className="text-4xl">1 June</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Portraiture & Lighting Workshop
              </h1>
              <Image
                src="https://i.imgur.com/GuthkTF.png"
                width={600}
                height={600}
                alt="Portrait workshop Image"
              />
              <div className="mt-2">
                <p>
                  Dive into the world of professional portraiture at our
                  workshop! Learn how to master lighting setups and backdrop
                  selections to dramatically enhance your subject's features and
                  emotions.
                </p>
                <br />
                <p className="font-bold">Time</p>
                <p>09:00 - 12:00 (Session 1)</p>
                <p>15:00 - 18:00 (Session 2)</p>
                <br />
                <p className="font-bold">Venue</p>
                <p>Haste Studio (6 Ubi Road 1, #02-03, S408726)</p>
              </div>
              <a
                href="https://nus.campuslabs.com/engage/submitter/form/start/640774"
                target="_blank">
                <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                  Sign Up
                </button>
              </a>
            </div>
          </div>

          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
           pt-5 my-3">
            <div className="col-span-1 flex justify-center items-center mx-10">
              <h1 className="text-4xl">15 June</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Street Photography Workshop
              </h1>
              {/* <Image
              src="TBA"
              width={600}
              height={600}
              alt="Portrait workshop Image"
            /> */}
              <div className="mt-2">
                <p>
                  Hit the streets with confidence! This workshop will enhance
                  your skills in capturing candid moments and engaging quickly
                  with subjects, ensuring you never miss a shot.
                </p>
                <br />
                <p>Stay tuned for more details.</p>
              </div>
              {/* <a
              href="TBA"
              target="_blank">
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Sign Up
              </button>
            </a> */}
            </div>
          </div>

          <div
            className="card-container grid grid-cols-1 xl:grid-cols-5	place-items-center
           pt-5 my-3">
            <div className="col-span-1 flex justify-center items-center mx-10">
              <h1 className="text-4xl">29 June</h1>
            </div>
            <div className="col-span-4 m-5 flex flex-col items-center w-9/12 self-center">
              <h1 className="text-3xl mb-3 font-bold">
                Street Photography Workshop
              </h1>
              {/* <Image
              src="TBA"
              width={600}
              height={600}
              alt="Portrait workshop Image"
            /> */}
              <div className="mt-2">
                <p>
                  Capture the world as you see it! Learn to compose and create
                  breathtaking travel narratives, transforming natural and
                  bustling environments into stunning photographic stories.
                </p>
                <br />
                <p>Stay tuned for more details.</p>
              </div>
              {/* <a
              href="TBA"
              target="_blank">
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-5">
                Sign Up
              </button>
            </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
