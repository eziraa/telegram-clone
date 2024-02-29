import React from "react";
import image1 from "../assets/images/profiles/image1.jpg";
import image2 from "../assets/images/profiles/image2.jpg";
import image3 from "../assets/images/profiles/image3.jpg";
import image4 from "../assets/images/profiles/image4.jpg";
import image5 from "../assets/images/profiles/image5.jpg";
const images = [image1, image2, image3, image4, image5];
import channels from "./data/channels";
const Channel = () => {
  return channels.map((channel, index) => (
    <div key={channel.id} className=" w-full border-spacing-1 ">
      <img
        src={images[index >= 5 ? index - 5 : index >= 10 ? index - 10 : index]}
        alt=""
        className=" h-12 w-12 rounded-full"
      />
      <div className=" grid-flow-col ">
        <p className=" bg-slate-300"> {channel.title} </p>
      </div>
    </div>
  ));
};

export default Channel;
