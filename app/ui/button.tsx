import { cn } from "@/libs/cn";
import Link from "next/link";
import React from "react";

export default function Button({
  word,
  action,
  style,
  isLink,
  href,
}: {
  word: string;
  action?: () => void;
  style?: string;
  isLink?: boolean;
  href?: string;
}) {
  return (
    <>
      {isLink ? (
        <Link 
        className={cn( "px-[12px] flex h-8 flex-none  items-center justify-center    py-[4px] md:px-[24px]  font-[17px] md:text-[20px]   text-dark_green bg-white  rounded-md md:rounded-lg hover:bg-black hover:text-lime_green  font-lato",style)}
        href={href as string}>
        {word ? word : "Button"}
        </Link>
      ) : (
        <button
          onClick={action}
          className={cn("px-[12px] flex flex-none  py-[4px] md:px-[24px]  font-[17px] md:text-[20px]   text-dark_green bg-white  rounded-md md:rounded-lg hover:bg-black hover:text-lime_green  font-lato",style)} >
          {word ? word : "Button"}
        </button>
      )}
    </>
  );
}
