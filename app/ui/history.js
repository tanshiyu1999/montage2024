import Image from "next/image";


export default function History() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-7xl">WE HOST</p>
      <p className="text-7xl">UNFORGETTABLE</p>
      <p className="text-7xl">COMPLETITIONS</p> 
      <p className="text-7xl">HERE AT NUSPS.</p>
      <br/>
      <Image 
        src="/vercel.svg"
        width={300}
        height={300}
        alt="First Place Prize Image"
      />
      <h2>The Montage Journey</h2>
      
      <div className="grid grid-cols-2 gap-5 w-9/12">

        <div className="bg-red-100">
          <p>Since its inception in 1969, NUSPS has held an annual photography competition for the benefit of the local photographic community. Initially known as the International Photographic Salon, it transitioned to its current form, Montage in 1999.</p>
          <br/>
          <p>Since then, Montage has gone from strength to strength, inspiring more aspiring and passionate photographers every year.</p>
        </div>
        <Image 
          src="/first-prize.webp"
          width={300}
          height={300}
          alt="First Place Prize Image"
        />

        <Image 
          src="/first-prize.webp"
          width={300}
          height={300}
          alt="First Place Prize Image"
        />  

        <div className="bg-red-100">
          <p>Founded in 1969, The Photographic Society of National University of Singapore (NUSPS) is one of the earliest photographic interests groups formed.</p>
          <br/>
          <p>Our society is actively involved in connecting like-minded individuals with a passion for photography to meet and pursue photography together. We plan and organize many courses, workshops, and photo walks to keep members engaged.</p>
        </div>
      </div>
    </div>
  );}
