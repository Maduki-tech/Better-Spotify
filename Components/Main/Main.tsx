import React, { SetStateAction, useEffect, useState } from "react";
import Music from "./Music";
import Logo from "../../public/images/Logo.png";

interface data {
  image: string;
  title: any;
  artist: string;
}

const Main = (props: { props: data[] }) => {
  console.log(props.props);

  return (
    <div className="flex flex-col items-center gap-8 overflow-y-scroll h-[calc(100%-86px)] ">
      {props.props.map((data, key) => {
        return (
          <Music
            key={key}
            bild={data.image}
            songtitle={data.title}
            artist={data.artist}
          />
        );
      })}
    </div>
  );
};

export default Main;
