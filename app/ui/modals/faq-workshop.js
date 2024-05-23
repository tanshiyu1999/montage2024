'use client'

import { useState } from "react";

export default function FaqWorkshop() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-background') {
      closeModal();
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <button 
        type="button" 
        className="m-5 w-44 text-white bg-yellow-800 hover:bg-yellow-900 focus:outline-none 
          focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 
          me-2 mb-2 dark:bg-yellow-800 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700"
        onClick={openModal}
      >
        Workshops
      </button>

      {/* Modal structure */}
      {isOpen && (
        <div 
          id="modal-background" 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50" 
          onClick={handleOutsideClick}
        >
          <div className="relative w-full max-w-3xl mx-4 bg-white rounded shadow-lg">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold">How to Register</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>

            {/* Modal content */}
            <div className="p-4 overflow-y-auto max-h-96">
              <h1 className="mb-4">To qualify and have your entry considered valid for Montage 2024, participants must satisfy ALL of the below requirements:</h1>
              <ol className="list-decimal ml-5">
                <li className="mb-4">
                  <p>Be within the age range of 13 and 28 (inclusive) as of 1st Jan 2024</p>
                </li>
                <li className="mb-4">
                  <p>Create an account on the Klick Photography application.</p>
                </li>
                <li className="mb-4">
                  <p>Add #Montage2024 to your Klick post.</p>
                </li>
                <li className="mb-4">
                  <p>Additionally, hashtag all of the following: #NUSPS, #Canon, #CanonSingapore, #CathayPhoto, #nycsg, #ycmsg, and #youngchangemakers.</p>
                </li>
                <li className="mb-4">
                  <p>Ensure you retain the original image file (e.g. camera RAW, DNG, JPEG/JPG file with EXIF data, etc.) and/or film negatives for photos submitted. Shortlisted participants will be required to submit these items for verification purposes.</p>
                </li>
                <li className="mb-4">
                  <p>Klick account used to post the participating work must be public. Your account must be following @NUSPS, @Canon, @CanonSingapore, @CathayPhoto on Klick</p>
                </li>
              </ol>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 border-t">
              <button onClick={closeModal} className="px-4 py-2 text-white bg-red-400 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






