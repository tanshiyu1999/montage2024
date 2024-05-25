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
                  <p>Any clarifications regarding the Rules & Regulations as stated below may be directed to secretary@nusps.org.sg.</p>
                </li>
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
                  <p>The winners of the Montage 2024 Competition will be personally contacted by NUSPS committee members and given further information regarding the prize-giving ceremony and any other required details for administrative purposes.</p>
                </li>
                <li className="mb-4">
                  <p>Each participant can only win one prize.</p>
                </li>
                <li className="mb-4">
                  <p>Tentatively, three working days (72 hours) will be given for shortlisted winners to respond after being contacted by the secretaries within 2 weeks after submission closes, unless otherwise announced. In the event that the shortlisted winner does not respond within three days ( 72 hours), a new shortlisted winner will be contacted instead. At the same time, NUSPS will send an email to the uncontactable shortlisted winner that he/she has been voided due to unresponsiveness.</p>
                </li>
                <li className="mb-4">
                  <p>If you are overseas or at ICT for servicemen, do ensure that you are still contactable via mobile, email, or Instagram. Your original files should be readily available via Google Drive, DropBox, etc., or any other means whereby you are able to send them over to NUSPS for verification. If you are overseas/at ICT and are uncontactable or if you are unable to send over the original files for verification within the specified period (i.e. three working days after notification of your win), you will be voided as a winner.</p>
                </li>
                <li className="mb-4">
                  <p>For the submission of drone photographs, Participants will be required to submit proof of compliance with CAAS regulations regarding drone flight in Singapore airspace to secretary@nusps.org.sg, including, but not limited to the type of drone used, the area where the photo was taken, maximum altitude achieved, date and time.</p>
                </li>
                <li className="mb-4">
                  <p>Participants may submit up to 3 photos, with each photo counting as 1 entry.</p>
                </li>
                <li className="mb-4">
                  <p>All competition requirements must be fulfilled in order for the submission to be valid:</p>
                  <ol className="list-decimal ml-5">
                    <li className="mb-4">
                      <p>Appropriate category hashtags must be used (i.e.) in the submitted Klick post.</p>
                    </li>
                    <li className="mb-4">
                      <p>The accompanying hashtags must also be used: #NUSPS, #Montage2024, #CanonSingapore #CathayPhoto, #nycsg, and #youngchangemakers.</p>
                    </li>
                    <li className="mb-4">
                      <p>The participant must retain the original image files (e.g. camera RAW, DNG, JPEG/JPG file with EXIF data, etc.). Shortlisted participants will be required to submit these items for verification purposes. If you fail to produce the files upon request during the stipulated grace period, your entry will be disqualified.</p>
                    </li>
                    <li className="mb-4">
                      <p>The participant must be following @nusps, @canonsingapore, @nycsg and @cathayphoto on Instagram.</p>
                    </li>
                  </ol>
                </li>

                <li className="mb-4">
                  <p>Submitted entries must not be watermarked. Watermarked entries will be disqualified.</p>
                </li>
                <li className="mb-4">
                  <p>Only minimal editing (including but not limited to exposure, colour adjustments, and cropping) in reasonable amounts to be determined at the sole discretion of the judges should be done on the submitted photographs.</p>
                </li>
                <li className="mb-4">
                  <p>Late submissions past the official deadline of 13th July 2024, 2359hrs will NOT be recognized or entertained by NUSPS, the judging panel, or any other relevant parties. Any appeals pertaining to the subject will not be entertained. Please make your submissions before the deadline.</p>
                </li>
                <li className="mb-4">
                  <p>All photographs submitted should be taken legally and in compliance with intellectual property laws in the Republic of Singapore. If you are found to have plagiarised your submission, you will be immediately disqualified from the Montage 2024 competition and blacklisted from all future NUSPS events and Montage competitions.</p>
                </li>
                <ol className="list-decimal ml-5">
                  <li className="mb-4">
                    <p>If you are found to have plagiarised a winning submission after taking possession of any of the prizes, you are compelled by law to relinquish your prize to a NUSPS officer immediately upon written demand. Failure to do so constitutes both a breach of contract and theft of intellectual property, which may result in legal action taken against you at the discretion of NUSPS.</p>
                  </li>
                </ol>
                <li className="mb-4">
                  <p>The judges’ decision is final and no correspondence or appeals pertaining to the judging process will be entertained. Judges are chosen strictly by NUSPS and the committee reserves the right to amend, change and switch judges accordingly as deemed appropriate without prior notice.</p>
                </li>
                <li className="mb-4">
                  <p>Prizes are subject to change without prior notice under the full discretion of NUSPS and the Sponsors.</p>
                </li>
                <li className="mb-4">
                  <p>Registered participants are responsible for any negligence in their own actions and in the submission of their own entries on Klick. Any complaints and special requests relating to Montage 2024 will not be entertained by NUSPS and all affiliated parties.</p>
                </li>
                <li className="mb-4">
                  <p>Montage 2024 Workshops are not compulsory. You are not required to have already submitted your entry on Klick to the Montage competition in order to join a Montage Workshop.</p>
                </li>
                <li className="mb-4">
                  <p>By signing up for Montage Workshops and Montage Competition, participants are consenting to any photos and videos that will be taken of them for publicity purposes.</p>
                </li>
                <li className="mb-4">
                  <p>Montage 2024 Workshops are intended to be purely educational. No advantages will be granted to Montage 2024 Competition participants for attending workshops. Similarly, no disadvantages will be imposed on Montage 2024 Competition Participants if they do not attend the Workshops. However, Montage 2024 Participants are strongly encouraged to sign up and participate in the Workshops for personal enrichment.</p>
                </li>
                <li className="mb-4">
                  <p>Montage 2024 Workshop(s) Participants are expected to:</p>
                  <ul className="list-disc ml-5">
                    <li className="mb-4">
                      <p>Be punctual and arrive 15 minutes before the start of the workshop to facilitate administrative processes.</p>
                    </li>
                    <li className="mb-4">
                      <p>Be respectful in attitude and manner to the guest photographer, host, and other participants at all times.</p>
                    </li>
                    <li className="mb-4">
                      <p>No inappropriate language is allowed during the Montage Workshops, including but not limited to profanities, racial and religious slurs, as well as any and all derogatory language. NUSPS reserves the right to eject any participant found in breach of this rule and/or take any action, legal or otherwise in accordance with the Laws of the Republic of Singapore.</p>
                    </li>
                    <li className="mb-4">
                      <p>Respect the intellectual property of the guest photographers. Refrain from making unauthorized copies of the Workshop material. NUSPS, and the guest photographer(s) reserve the right to take any action, legal or otherwise, against participants who use unauthorized copies of the Workshop for any commercial purpose whatsoever.</p>
                    </li>
                  </ul>
                </li>
                <li className="mb-4">
                  <p>NUSPS and all affiliated parties reserve the right to use the information presented by the registered participants during registration and throughout the entire duration of Montage 2024.</p>
                </li>
                <li className="mb-4">
                  <p>Registered participants are fully responsible for their own safety and well-being.</p>
                </li>
                <li className="mb-4">
                  <p>NUSPS reserves the right to amend, update and add any additional rules and regulations without prior notice to registered participants. By doing so, NUSPS will not be liable for any wrongdoings with the effect of such action. Any amendments will be published on this page, and it is the participant’s responsibility to check this page for any updates.</p>
                </li>
                <li className="mb-4">
                  <p>If a registered participant is discovered to have either directly or indirectly contravened the Terms & Conditions and the Rules & Regulations implemented by NUSPS, NUSPS reserves the right to disqualify and/or terminate the respective registered participant and their entries without prior notice with immediate effect.</p>
                </li>
                <li className="mb-4">
                  <p>All entries must be the original work of the participant who also owns the full copyright of the images. You will be required to submit proof that you own the copyright to your work upon request in the form of original image files (e.g. camera RAW, CR2, NEF, ARW, DNG file, JPEG/JPG file with EXIF data, film negatives, etc.) or photos submitted.</p>
                </li>
                <li className="mb-4">
                  <p>By entering the Montage 2024 competition, the participant is granting us (the organizer NUSPS, and all affiliated parties) the non-exclusive right to use, display, publish, print, edit, distribute, and reproduce the submitted photographs (along with the relevant credit to the photographer) for the purpose of marketing and promotion of Montage 2024.</p>
                </li>
                <li className="mb-4">
                  <p>By submitting an entry to this competition, participants agree that they will not receive any form of reimbursement, payment or compensation for their submission, regardless of whether their submission is selected as a winner or not.</p>
                </li>
                <li className="mb-4">
                  <p>It is the legal responsibility of the participant, not the organizer or its partner, to ensure compliance with all ownership and copyright requirements, and own the rights to reproduce the photos.</p>
                </li>
                <li className="mb-4">
                  <p>The participant agrees to be fully liable to the organizer for any violation of confidentiality, patent, copyright, or any other intellectual property rights in the photographs and materials submitted. The participant also agrees to defend, indemnify and hold the organizer NUSPS, and all affiliated parties harmless from and against any actions, claims, loss or damages for infringement or alleged infringement of such confidentiality, patent, copyright, or any other intellectual property rights.</p>
                </li>
                <li className="mb-4">
                  <p>Personal particulars collected in this competition will be kept managed in accordance with the Personal Data Protection Act (PDPA). Participants who enter into this competition shall agree to release their particulars to the organizer NUSPS, and all affiliated parties for the purpose of identification, contractibility, responding/handling queries from you and sending you marketing information about goods and services including notifying you about events, initiatives, and other promotions.</p>
                </li>
                <ol className="list-decimal ml-5">
                  <li className="mb-4">
                    <p>The purposes listed in the above clause may continue to apply even in situations where your relationship with us (for example, the end of Montage 2024) has been terminated or altered in any way, for a reasonable period thereafter.</p>
                  </li>
                  <li className="mb-4">
                    <p>The consent that you provide for the collection, use, and disclosure of your personal data will remain valid until such time it is withdrawn by you in writing. You may withdraw consent and request us to stop using and/or disclosing your personal data for any or all of the purposes listed above by submitting your request via email to secretary@nusps.org.sg.</p>
                  </li>
                  <li className="mb-4">
                    <p>To safeguard your personal data from unauthorized access, collection, use, disclosure, copying, modification, disposal, or similar risks, we have introduced appropriate administrative, physical, and technical measures to secure all storage and transmission of personal data by us. You should be aware however that no method of transmission over the Internet or method of electronic storage is completely secure. While security cannot be guaranteed, we strive to protect the security of your information and are constantly reviewing and enhancing our information security measures.</p>
                  </li>
                  <li className="mb-4">
                    <p>We generally rely on personal data provided by you (or your authorized representative). In order to ensure that your personal data is current, complete, and accurate, please contact us via secretary@nusps.org.sg to correct or amend any incomplete or inaccurate information.</p>
                  </li>
                  <li className="mb-4">
                    <p>We may retain your personal data for as long as it is necessary to fulfill the purpose for which it was collected, or as required or permitted by applicable laws. We will cease to retain your personal data or remove the means by which the data can be associated with you, as soon as it is reasonable to assume that such retention no longer serves the purpose for which the personal data was collected, and is no longer necessary for legal or business purposes.</p>
                  </li>
                </ol>
                <li className="mb-4">
                  <p>The organizer NUSPS, and all affiliated parties reserve the sole and absolute discretion to exclude or disqualify any participant and/or entry from the competition, if the submitted entries do not meet the requirements stated herein, or are in breach of the rules and regulations.</p>
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






