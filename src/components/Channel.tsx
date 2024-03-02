import { useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import image1 from "../assets/images/profiles/image1.jpg";
import image2 from "../assets/images/profiles/image2.jpg";
import image3 from "../assets/images/profiles/image3.jpg";
import image4 from "../assets/images/profiles/image4.jpg";
import image5 from "../assets/images/profiles/image5.jpg";
const images = [image1, image2, image3, image4, image5];
import channels from "./data/channels";

const Channel = () => {
  const [channelsList, setChannel] = useState(channels);
  const [activeIndex, setActiveIndex] = useState(-1);

  const makeActive = (index: number) => {
    setActiveIndex(index);
  };
  return channelsList.map((channel, index) => (
    <div
      onClick={() => makeActive(index)}
      key={channel.id}
      className={`channel ${
        index === activeIndex && "channel__active"
      }  channel--${index}`}
    >
      <img
        src={images[index >= 5 ? index - 5 : index >= 10 ? index - 10 : index]}
        alt=""
        className="channel__image"
      />
      <div className="channel__info ">
        <div className="channel__header">
          <p className="channel__text"> {channel.title} </p>
          <div className="channel__mute">
            <FaVolumeMute />
          </div>
          <p className="channel__created-at"> Dec 09:34 </p>
        </div>
        <p className="channel__last-post">{channel.description}</p>
      </div>
    </div>
  ));
};

export default Channel;
