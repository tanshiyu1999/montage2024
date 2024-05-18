import Image from "next/image";

export default function Theme() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl bg-blue-200">Theme: Youth in Focus</h1>
      <p className="w-[1100px] text-xl m-7 text-center">This competition is for Singaporean citizen and/or currently resides in Singapore, aged between 13 to 25.</p>
      <br/>
      <p className="w-[1100px] text-xl m-7 text-center">By showcasing powerful and thought-provoking practices through photography, capture images that depict acts of bravery, resilience, or determination in the face of challenges or adversity. Your entry should seek to inspire Singaporeans to step out of their comfort zones, take risks, and document courageous moments in their everyday lives or in the community.</p>
      <div className="grid grid-cols-3 gap-3 w-[1300px] justify-items-center">
        <div className="flex flex-col items-center p-3 rounded-xl border-4 border-black
          h-96 w-96
        ">
          <p className="text-3xl">First Prize</p>
          <p className="text-2xl">Canon R10 (18-45mm Kit)</p>
          <Image 
            src="/first-prize.webp"
            width={300}
            height={300}
            alt="First Place Prize Image"
            className="bg-"
          />
          <p className="text-2xl">&</p>
          <p className="text-xl">$50 Cathay Photo Vouchers</p>
          <p className="text-2xl">Worth $1609</p>
        </div>

        <div className="flex flex-col items-center p-3 rounded-xl border-4 border-black
          h-96 w-96
        ">
          <p className="text-2xl">First Prize</p>
          <p className="text-xl">Canon R10 (18-45mm Kit)</p>
          <Image 
            src="/first-prize.webp"
            width={300}
            height={300}
            alt="First Place Prize Image"
          />
          <p className="text-lg">&</p>
          <p className="text-base">$50 Cathay Photo Vouchers</p>
          <p className="text-base">Worth $1609</p>
        </div>

        <div className="bg-blue-200">
          Third Prize
        </div>
      </div>
      
      <h2>
        Register Now
      </h2>
    </div>
  );
}
