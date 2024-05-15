import Image from "next/image";

export default function Theme() {
  return (
    <div class="flex flex-col bg-pink-100 items-center">
      <h1 class="text-7xl bg-blue-200 ">Theme: Youth in Focus</h1>
      <p>lorem </p>
      <p>Longer paragraph</p>
      <br/>
      <p width="">Even Longer</p>
      <div class="grid grid-cols-3 gap-3 w-9/12 bg-black">
        <div class="bg-blue-200 flex flex-col items-center p-3">
          <p>First Prize</p>
          <Image 
            src="/vercel.svg"
            width={300}
            height={300}
            alt="First Place Prize Image"
          />
          <p>Canon D50 4-Section Go Pro Tripod</p>
          <p>Worth $1000</p>
        </div>
        <div class="bg-blue-200">
          Second Prize
        </div>
        <div class="bg-blue-200">
          Third Prize
        </div>
      </div>
      
      <h2>
        Register Now
      </h2>
    </div>
  );
}
