import type {StaticImageData} from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
     <div className="absolute -z-10 inset-0 ">
      <Image className=""
        src = {props.imgData}
        alt = {props.imgAlt}
        fill
        style = {{ objectFit: 'cover'}} 
      />
     </div>
     <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/50 to-stone-800/50 -z-10 " ></div>
     <div className="pt-48 flex justify-center items-center">
       <h1 className="text-white text-6xl z-20">{props.title}</h1>
     </div>
     <div className="flex justify-center mt-10">
        <a href="/personal" >
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Ver Curriculum
    </button>
        </a>
        </div>
    </div>
  );
}