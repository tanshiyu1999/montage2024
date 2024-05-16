import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative">
      <Image 
        src="/landing.png"
        layout="responsive"
        width={0}
        height={0}
        className="opacity-100 w-full h-auto brightness-50"
        alt="First Place Prize Image"
      />
      <Image 
        src="/montage-white.png" // Replace with your overlay image path
        layout="intrinsic"
        width={1000}
        height={100}
        alt="Overlay Image"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
