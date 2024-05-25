'use client'

import { useState } from "react";

export default function TncRules() {
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
        Rules and Regulations
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
              <h2 className="text-xl font-semibold">Rules & Regulations</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>

            {/* Modal content */}
            <div className="p-4 overflow-y-auto max-h-96">
              <h1 className="mb-4">To qualify and have your entry considered valid for Montage 2024, participants must satisfy ALL of the below requirements:</h1>
              <ol className="list-decimal ml-5">
                <li className="mb-4">
                  <p>All registered participants who have submitted the sign-up form for Montage 2024 have automatically agreed to the Rules and Regulations unconditionally and irrevocably, as well as all registered participants have agreed to adhere to the Rules and Regulations set up by the NUSPS committee.</p>
                </li>
                <li className="mb-4">
                  <p>Participation in the Montage 2024 Competition is free of charge. Any publicity material stating otherwise is fraudulent and should be reported to the Organisers at your soonest convenience.</p>
                </li>
                <li className="mb-4">
                  <p>NUSPS is a Registered Society under the Registry of Societies (RoS), governed by the Singapore Constitution and Singapore Law.</p>
                </li>
                <li className="mb-4">
                  <p>NUSPS is not liable for any loss incurred throughout the duration of the Montage 2024 event. NUSPS does kindly advise that all participants prioritise their safety, health, and the environment throughout the duration of Montage 2024. NUSPS will not be responsible for any negligence, irresponsible or illegal actions conducted by the registered participants and are reminded that they are fully responsible for their own actions. NUSPS is also not responsible for any property loss or injuries incurred during participation in Montage 2024. NUSPS is neither an insurance company nor a social service enterprise.</p>
                </li>
                <li className="mb-4">
                  <p>The Competition is open for entry from 25th May 2024 at 17:00 hours (Singapore Time) to 13th July 2024 at 23:59 hours (Singapore Time). Only submissions posted during this period will be considered. The Competition Period is subject to change without prior notice at the discretion of the Organiser (NUSPS).</p>
                </li>
                <li className="mb-4">
                  <p>Montage 2024 only accepts still images taken on any camera. Videos, GIFs, digital artwork, illustrations, animations, or any other formats will not be accepted. The image submitted must also be in the aspect ratio of 3:2, 4:3 and/or 1:1. Participants may consider adding borders to their images should their photo be in any other aspect ratio.</p>
                </li>
                <li className="mb-4">
                  <p>Photos submitted need not be taken during the period of competition. However, you must ensure that the original image file (e.g. camera RAW, DNG, JPEG/JPG file with EXIF data, etc.) are retained and retrievable. You are required to submit these items for verification purposes upon request. Failure to do so will result in disqualification.</p>
                </li>
                <li className="mb-4">
                  <p>Please note that you are not allowed to submit photographs that have won or been shortlisted for any other photographic competitions in Singapore or any other country previously. Such entries will be disqualified immediately upon discovery.</p>
                </li>
                <li className="mb-4">
                  <p>NUSPS reserves the right to announce the judges publicly after receiving written non-disclosure agreements from the individuals involved who are representing Montage 2024 as judges. The disclosure of any information relating to the judges will be kept confidential unless otherwise stated.</p>
                </li>
                <li className="mb-4">
                  <p>All entries will be selected for the judging review.</p>
                </li>
                <li className="mb-4">
                  <p>The winners of the Montage 2024 Competition will be personally contacted by NUSPS committee members and given further information regarding the prize-giving ceremony and any other required details for administrative purposes. Each participant can only win one prize.</p>
                </li>
                <li className="mb-4">
                  <p>Tentatively, three working days (72 hours) will be given for shortlisted winners to respond after being contacted by the secretaries within 2 weeks after submission closes, unless otherwise announced. In the event that the shortlisted winner does not respond within three days (72 hours), a new shortlisted winner will be contacted instead. At the same time, NUSPS will send an email to the uncontactable shortlisted winner that he/she has been voided due to unresponsiveness.</p>
                </li>
                <li className="mb-4">
                  <p>If you are overseas or at ICT for servicemen, do ensure that you are still contactable via mobile, email, or Instagram. Your original files should be readily available via Google Drive, DropBox, etc., or any other means whereby you are able to send them over to NUSPS for verification. If you are overseas/at ICT and are uncontactable or if you are unable to send over the original files for verification within the specified period (i.e. three working days after notification of your win), you will be voided as a winner.</p>
                </li>
                <li className="mb-4">
                  <p>For the submission of drone photographs, Participants will be required to submit proof of compliance with CAAS regulations regarding drone flight in Singapore airspace to secretary@nusps.org.sg, including, but not limited to the type of drone used, the area where the photo was taken, maximum altitude achieved, date and time.</p>
                </li>
                <li className="mb-4">
                  <p>Participants may submit up to 3 photos, with each photo counting as 1 entry. All competition requirements must be fulfilled in order for the submission to be valid:</p>
                  <ul className="list-disc ml-5">
                    <li className="mb-4">Appropriate category hashtags must be used (i.e. in the submitted Klick post).</li>
                    <li className="mb-4">The accompanying hashtags must also to be used: #NUSPS, #Montage2024, #CanonSingapore, #CathayPhoto, #nycsg, and #youngchangemakers.</li>
                    <li className="mb-4">The participant must retain the original image files (e.g. camera RAW, DNG, JPEG/JPG file with EXIF data, etc.). Shortlisted participants will be required to submit these items for verification purposes. If you fail to produce the files upon request during the stipulated grace period, your entry will be disqualified.</li>
                    <li className="mb-4">The participant must be following @nusps, @canonsingapore, @nycsg and @cathayphoto on Instagram.</li>
                    <li className="mb-4">Submitted entries must not be watermarked. Watermarked entries will be disqualified.</li>
                    <li className="mb-4">Only minimal editing (including but not limited to exposure, colour adjustments, and cropping) in reasonable amounts to be determined at the sole discretion of the judges should be done on the submitted photographs.</li>
                    <li className="mb-4">Late submissions past the official deadline of 13th July 2024, 23:59 hours will NOT be recognized or entertained by NUSPS, the judging panel, or any other relevant parties. Any appeals pertaining to the subject will not be entertained. Please make your submissions before the deadline.</li>
                    <li className="mb-4">All photographs submitted should be taken legally and in compliance with intellectual property laws in the Republic of Singapore. If you are found to have plagiarised your submission, you will be immediately disqualified from the Montage 2024 competition and blacklisted from all future NUSPS events and Montage competitions. If you are found to have plagiarised a winning submission after taking possession of any of the prizes, you are compelled by law to relinquish your prize to a NUSPS officer immediately upon written demand. Failure to do so constitutes both a breach of contract and theft of intellectual property, which may result in legal action taken against you at the discretion of NUSPS.</li>
                    <li className="mb-4">The judges’ decision is final and no correspondence or appeals pertaining to the judging process will be entertained. Judges are chosen strictly by NUSPS and the committee reserves the right to amend, change and switch judges accordingly as deemed appropriate without prior notice.</li>
                    <li className="mb-4">Prizes are subject to change without prior notice under the full discretion of NUSPS and the Sponsors.</li>
                    <li className="mb-4">Registered participants are responsible for any negligence in their own actions and in the submission of their own entries on Klick. Any complaints and special requests relating to Montage 2024 will not be entertained by NUSPS and all affiliated parties.</li>
                  </ul>
                </li>
                <li className="mb-4">
                  <p>Montage 2024 Workshops are not compulsory. You are not required to have already submitted your entry on Klick to the Montage competition in order to join a Montage Workshop.</p>
                </li>
                <li className="mb-4">
                  <p>Montage 2024 is only open to participants residing in Singapore.</p>
                </li>
                <li className="mb-4">
                  <p>Participants must submit their entries using their own public Klick account. Please ensure that your profile is set to public to ensure we are able to view your entry for verification purposes. If your account is set to private, your entry will be disqualified.</p>
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






