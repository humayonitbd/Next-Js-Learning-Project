import Image from "next/image";
import myImage from '../public/vercel.svg';

export default function LearnUseImage() {

  return (
    <div>
        <Image src={myImage} alt="my image" />
    </div>
  )
}
