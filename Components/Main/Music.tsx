import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Music = (props: { bild: string; songtitle: string; artist: string }) => {
  return (
    <div className="flex justify-between w-3/4 bg-gray-400 text-white items-center px-8 py-6 rounded-3xl shadow-2xl">
      <div className="flex gap-8 items-center">
        <img src={props.bild} className="w-24 h-24 rounded-full" />
        <div className="flex flex-col gap-2">
          <span>{props.songtitle}</span>

          <span>{props.artist}</span>
        </div>
      </div>

      <FaPlayCircle className="w-12 h-12" />
    </div>
  );
};

export default Music;
