'use client'

import { useState } from "react";

export default function FaqComp() {
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
        Competition
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
              <h2 className="text-xl font-semibold">Competition FAQ</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>

            {/* Modal content */}
            <div className="p-4 overflow-y-auto max-h-96">
              <h1 className="mb-4">To qualify and have your entry considered valid for Montage 2024, participants must satisfy ALL of the below requirements:</h1>
              <ol className="list-decimal ml-5">
                <li className="mb-4">
                  <h1>Who can take part in the NUSPS Montage 2024 Competition?</h1>
                  <p>You must be within the age range of 13 and 28 (inclusive) as of 1st Jan 2024. Anyone who has submitted their entries via their Klick accounts using all the respective hashtags will be considered for NUSPS’ Montage 2024 Competition.</p>
                </li>
                <li className="mb-4">
                  <h1>Can non-students participate in the workshops and competition? E.g. NSF.</h1>
                  <p>Yes, as long as you are within the age range of 13 and 28 (inclusive) as of 1st Jan 2024.</p>
                </li>
                <li className="mb-4">
                  <h1>Do I need to pay to join the Montage 2024 Competition?</h1>
                  <p>No, participation in the Montage 2024 Competition is free of charge. Any publicity material that claims otherwise is fraudulent and should be treated as such; do also report such incidents to the Organisers if you come across them!</p>
                </li>
                <li className="mb-4">
                  <h1>How do I register and qualify for the Montage 2024 Competition?</h1>
                  <p>To qualify and have your entry considered valid for Montage 2024, participants must satisfy ALL of the below requirements:</p>
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
                </li>
                <li className="mb-4">
                  <h1>When is the competition period?</h1>
                  <p>The Competition is open for entry from 24th May 2024 17:00 hours (Singapore Time) to 13th July 2024 23:59 hours (Singapore Time). Only submissions posted during this period will be considered.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I tag my pre-existing Klick posts?</h1>
                  <p>If you wish to reuse pre-existing Klick posts, please reupload the post with the appropriate caption and hashtags to be considered as an entry. Posts made outside the competition period will not be entertained.</p>
                </li>
                <li className="mb-4">
                  <h1>What can I submit?</h1>
                  <p>Only still images taken on any camera or phone are allowed. Videos, GIFs, digital artwork, illustrations, animations, AI generated images (partially or wholly) or any other formats will not be accepted.</p>
                </li>
                <li className="mb-4">
                  <h1>How many entries can I submit?</h1>
                  <p>Each photograph posted is considered one entry. Each participant can only submit a maximum of three entries. All competition requirements (as stated on the registration page) must be fulfilled in order for the submission to be valid.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I submit multiple photographs per entry (post)?</h1>
                  <p>Yes, in fact we recommend that participants submit multiple photos if they find it more effective in capturing the messages they want to convey. Determination of whether your entry fits the “storyline/message” criteria will be at the sole discretion of the judging panel.</p>
                </li>
                <li className="mb-4">
                  <h1>What is the judging criteria for the Montage 2024 Competition?</h1>
                  <p>Judging will be based primarily on the quality of the entries and its alignment to the theme, ‘Perspective: Youths in Focus’ will be taken into consideration. Judging will be conducted by a panel of professional judges who will score each photo based on a set scoring system to ensure fairness.</p>
                </li>
                <li className="mb-4">
                  <h1>How do I hashtag?</h1>
                  <p>Hashtag #Montage2024 in your Klick post. Please also add the following hashtags to your posts: #NUSPS, #Canon, #CanonSingapore, #CathayPhoto, #nycsg, #ycmsg, and #youngchangemakers.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I watermark the photos I submit?</h1>
                  <p>No, all submitted entries should not be watermarked. This is to ensure that judging is unbiased and based solely on the quality of your work. If your photo is watermarked, your entry will be disqualified.</p>
                </li>
                <li className="mb-4">
                  <h1>Can my entry photos be edited with Lightroom, Photoshop or any related photo editing software?</h1>
                  <p>Yes, however, NUSPS requires participants to submit entries with minimal editing (including but not limited to exposure, colour adjustments and cropping in reasonable amounts). This is a photography competition, hence, the focus is not in the editing but in the storytelling from the photos that is in line with the theme of ‘Perspective: Youths in Focus’.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I submit photographs taken in the past?</h1>
                  <p>Entries submitted need not be taken during the period of competition. However, you must ensure that the original image files (e.g. camera RAW, DNG, JPEG/JPG file with EXIF data, etc.) and/or film negatives are retained and retrievable. If you are unable to submit these items for verification purposes upon request, your entry will be disqualified. 
                  Please note that you are not allowed to submit entries that have won or been shortlisted for other photographic competitions. Such entries will be disqualified immediately upon discovery.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I submit drone photos?</h1>
                  <p>All photographs submitted should be taken legally and in compliance with Singapore Law. You will be required to submit a proof of compliance with CAAS regulations regarding drone flight in Singapore airspace to secretary@nusps.org.sg, including, but not limited to the type of drone used, area where the photo was taken, maximum altitude achieved, date and time.</p>
                </li>
                <li className="mb-4">
                  <h1>Can I still submit my entries on Klick after the specified deadline of submission for Montage 2024?</h1>
                  <p>Late submissions will not be recognized or entertained by NUSPS and all relevant parties. Please submit before the end of the competition.</p>
                </li>
                <li className="mb-4">
                  <h1>How will I be contacted if I win the Montage 2024 competition?</h1>
                  <p>Shortlisted Montage winners will be contacted anytime on 20th July 2024 onwards. Take note that if you do not acknowledge your status as a Montage winner within THREE days of our notification, your winning entry will be voided.
                  If you are overseas or at ICT for servicemen, do ensure that you are still contactable via email. Your original file should be readily available via Google Drive, DropBox, etc. or any other means whereby you are able to send it over to NUSPS for verification.</p>
                </li>
                <li className="mb-4">
                  <h1>What if I cannot produce the original image files (e.g. RAW/DNG/negative) for my submitted photo upon request?</h1>
                  <p>If you fail to submit it within THREE days of our notification, your entry will be disqualified.</p>
                </li>
                <li className="mb-4">
                  <h1>How many prizes can I win?</h1>
                  <p>You can only win one prize.</p>
                </li>
                <li className="mb-4">
                  <h1>Is NUSPS liable for any participants’ claims, loss and individual actions of any nature?</h1>
                  <p>NUSPS is not liable for any loss incurred throughout the duration of the Montage 2024 event. NUSPS does kindly advise that all participants prioritise their safety, health, and the environment throughout the duration of Montage 2024. NUSPS will not be responsible for any negligence, irresponsible or illegal actions conducted by the registered participants and are reminded that they are fully responsible for their own actions. NUSPS is also not responsible for any loss of property or injuries incurred in the course of participation in Montage 2024.</p>
                </li>
                <li className="mb-4">
                  <h1>What happens if I plagiarise?</h1>
                  <p>All photographs submitted should be taken legally and in compliance with intellectual property laws in the Republic of Singapore. If you are found to have plagiarised your submission, you will be immediately disqualified from the Montage 2024 competition and blacklisted from all future NUSPS events and Montage competitions.</p>
                </li>
                <li className="mb-4">
                  <h1>Have any further questions?</h1>
                  <p>You can contact us at secretary@nusps.org.sg.</p>
                </li>
                <li className="mb-4">
                  <h1>How will the winners be announced?</h1>
                  <p>Winners will be contacted through Klick and announced on our social media pages on 27th July 2024 17:00 hours (Singapore Time).</p>
                </li>
                <li className="mb-4">
                  <h1>How can I stay updated on any changes or announcements related to Montage 2024?</h1>
                  <p>You may refer to the Montage website or NUSPS’s social media platforms (Instagram and Telegram)</p>
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






