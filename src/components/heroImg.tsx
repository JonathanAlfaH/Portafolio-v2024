import { strict } from "assert";
import type {StaticImageData} from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    widthData: number;
    heighData: number;
}

export default function HeroImg(props: HeroProps) {
  return (
     <div className="">
      <Image
        src = {props.imgData}
        alt = {props.imgAlt}
        width={props.widthData}
        height={props.heighData}
      />
     </div>
  );
}