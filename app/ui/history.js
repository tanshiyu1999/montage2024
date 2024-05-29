import Image from "next/image";


export default function History() {
  return (
    <div className="flex flex-col items-center my-1 relative">
      <div className="relative w-full h-[50vh]">
        <Image 
          src="https://i.imgur.com/MevrnAQ.png"
          layout="fill"
          objectFit="cover"
          className="opacity-100 brightness-50"
          alt="First Place Prize Image"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-5xl text-white font-bold">The Montage Journey</h2>
        </div>
      </div>


      {/* <h2 className="text-5xl my-10 text-center">The Montage Journey</h2> */}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-9/12 pt-5 max-w-[1150px] place-items-center">

        <div className="max-w-[500px] history-text:max-w-none order-1">
          <p className="text-xl">Since its inception in 1969, NUSPS has held an annual photography competition for the benefit of the local photographic community. Initially known as the International Photographic Salon, it transitioned to its current form, Montage in 1999.</p>
          <br/>
          <p className="text-xl" >Since then, Montage has gone from strength to strength, inspiring more aspiring and passionate photographers every year.</p>
        </div>
        <Image 
          src="https://i.imgur.com/o2vTdBl.png"
          width={500}
          height={300}
          alt="First Place Prize Image"
          className="order-2"
        />

        <Image 
          src="https://i.imgur.com/OdGc9GM.png"
          width={500}
          height={300}
          alt="First Place Prize Image"
          className="order-4 lg:order-3"
        />  

        <div className="max-w-[500px] history-text:max-w-none order-3 lg:order-4">
          <p className="text-xl">Founded in 1969, The Photographic Society of National University of Singapore (NUSPS) is one of the earliest photographic interests groups formed.</p>
          <br/>
          <p className="text-xl">Our society is actively involved in connecting like-minded individuals with a passion for photography to meet and pursue photography together. We plan and organize many courses, workshops, and photo walks to keep members engaged.</p>
        </div>
      </div>
    </div>
  );}
