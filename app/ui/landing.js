import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative z-0">
      <Image 
        src="/landing.png"
        layout="responsive"
        width={0}
        height={0}
        className="opacity-100 w-full h-auto brightness-50 z-0"
        alt="First Place Prize Image"
      />
      <Image 
        src="/montage2024.jpg" // Replace with your overlay image path
        layout="intrinsic"
        width={1000}
        height={100}
        alt="Overlay Image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
      />
    </div>
  );
}
