import Image from "next/image";

export default function Theme() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl bg-blue-200 ">Theme: Youth in Focus</h1>
      <p>lorem </p>
      <p>Longer paragraph</p>
      <br/>
      <p width="">Even Longer</p>
      <div className="grid grid-cols-3 gap-3 w-9/12 bg-pink-100">
        <div className="bg-blue-200 flex flex-col items-center p-3 rounded ">
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
          Second Prize
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
