import Image from "next/image";
import Bus from "../ui/bus";

export default function Home() {
  return (
   <div className="w-full flex flex-col items-center pt-[6.5rem] relative z-50">
    <h1 className="font-lato text-[28px] md:text-[45px] lg:text-[60px] xl:text-[65px] text-white font-bold md:leading-[60px] lg:leading-[75px] text-center px-[16px]   md:px-auto leading-[34px] ">Smarter,<span className="text-lime_green"> Safer, </span>and <span className="max-sm:text-lime_green"> Faster </span><br  className="hidden md:flex"/> Transportation for Students</h1>
    <p className="font-lato text-[20px] px-[24px] text-center  md:text-[24px] leading-[22px] md:leading-[34px] my-16 text-white">Search for smarter rides and enjoy a <br className=" hidden md:flex xl:hidden"/> seamless to-and-from trips everyday.</p>
    {/* <Bus/> */}
   </div>
  );
}
