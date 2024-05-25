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
              <h2 className="text-xl font-semibold">Workshop Q&A</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>

            {/* Modal content */}
            <div className="p-4 overflow-y-auto max-h-96">
              <h1 className="mb-4">To qualify and have your entry considered valid for Montage 2024, participants must satisfy ALL of the below requirements:</h1>
              <ol className="list-decimal ml-5">
                <li className="mb-4">
                  <h1>Who can join the Montage Workshops?</h1>
                  <p>Montage Workshops are only open to youths within the age range of 13 and 28 (inclusive) as of 1st Jan 2024. It will be on a first come first serve basis due to a limited number of slots available for the practical workshops.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I join Montage Workshops if I do not plan to submit any photos for the Montage Competition?</h1>
                  <p>Yes you can.</p>
                </li>
                <li className="mb-4">
                  <h1>Am I required to submit my Montage 2024 Competition entry to Klick before joining the Montage Workshops?</h1>
                  <p>No, as long as you have registered for the workshop, you can join the Montage Workshops. You are not required to have already submitted your entry on Klick to join.</p>
                </li>
                <li className="mb-4">
                  <h1>I would like to participate in the Montage 2024 Photography Competition, is it compulsory to join these Montage Workshops?</h1>
                  <p>No, Montage Workshops are optional for all participants. Participation in Montage Workshops has no bearing on the judging process for the Montage 2024 Competition. However, you are highly encouraged to join as we have quite the exciting and enriching line up in store for you, including practical sessions by famous photographers!</p>
                </li>
                <li className="mb-4">
                  <h1>Do I need to pay to join the Montage 2024?</h1>
                  <p>No, both the Montage Photography Competition and Montage workshops are free-of-charge. You can participate in all Montage Workshops as long as you sign up beforehand.</p>
                </li>
                <li className="mb-4">
                  <h1>Do I need to bring my own camera equipment for the workshops?</h1>
                  <p>Yes you may. You may also choose to use the equipment provided by Canon during the workshop.</p>
                </li>
                <li className="mb-4">
                  <h1>How will Montage Workshops be held?</h1>
                  <p>All workshops (Street Photography, Portraiture and Lighting, Landscape Photography) will be held in-person with a theory as well as a practical portion.</p>
                </li>
                <li className="mb-4">
                  <h1>How do I register for a Workshop?</h1>
                  <p>Once you have registered for the workshop via the respective registration forms found on the Montage 2024 Website, a confirmation email will be sent to you.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I register for more than 1 workshop?</h1>
                  <p>Yes, you may participate in more than 1 workshop.</p>
                </li>
                <li className="mb-4">
                  <h1>How long are the Montage Workshops?</h1>
                  <p>Each workshop will take around 3 hours. You may refer to the individual workshops’ details on the Montage 2024 website to find out more about the specific workshops’ programme.</p>
                </li>
                <li className="mb-4">
                  <h1>I’ve registered for the Montage Workshop but I realised I can’t make it any more, what do I do?</h1>
                  <p>Please ensure you are available during the workshop before registering as slots are limited. If extenuating circumstances arise, you can cancel your slot, by emailing us at secretary@nusps.org.sg.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I join the workshop without registering first?</h1>
                  <p>No, only successfully registered participants are allowed to join the session.</p>
                </li>
                <li className="mb-4">
                  <h1>Will the presentation materials used by the guest photographer be published?</h1>
                  <p>As this entails the intellectual property of the guest photographers, the materials will not be made publicly available unless the guest photographers indicate otherwise.</p>
                </li>
                <li className="mb-4">
                  <h1>When do signups for Montage Workshops close?</h1>
                  <p>Signups for a Montage workshop will close on SGT 23:59 TWO days before the workshop, or when the capacity for the workshop has been reached.</p>
                </li>
                <li className="mb-4">
                  <h1>What if I need to leave the Workshop early?</h1>
                  <p>If you need to leave early due to extenuating circumstances, please inform any NUSPS MC member at the workshop before doing so. Otherwise, if you cannot make it for the full duration of the workshop, you can either cancel your slot (if you cannot make it for the start of the event) OR inform us the time you are you leaving (if you can make it for the start of the event but have to leave earlier) by emailing us at secretary@nusps.org.sg TWO days prior to the event.</p>
                </li>
              </ol>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end p-4 border-t">
              <button onClick={closeModal} className="px-4 py-2 text-white bg-gray-400 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}






