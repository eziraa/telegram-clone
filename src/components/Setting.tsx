import { BsThreeDotsVertical, BsToggleOff } from "react-icons/bs";
import profile from "../assets/images/p17.jpg";
import { PiBatteryChargingLight } from "react-icons/pi";
import { FaFolder, FaRegUserCircle, FaTimes } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";

import {
  HiLanguage,
  HiOutlineEye,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Toggle } from "./Toggle";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}
export const Setting = ({ displayItemIndex, handleDisplayNone }: Props) => {
  return (
    <div
      className={`setting-container ${
        displayItemIndex !== 4 && "setting-container__hidden"
      }`}
    >
      <div className="setting-container__header">
        <p className="text">Settings</p>
        <div className="actions">
          <BsThreeDotsVertical className="icon" />
          <FaTimes className="icon" onClick={handleDisplayNone} />
        </div>
      </div>
      <div
        className="scroll-container"
        style={{ borderRadius: "0 1rem 1rem 1rem" }}
      >
        <div className="setting">
          <div className="user__profile">
            <img src={profile} alt="" className="image" />
            <div className="user__info">
              <p className="name">Ezira</p>
              <p className="phone-number">+251 958 25...</p>
              <p className="username">@ezrawi</p>
            </div>
          </div>
          <div className="setting__body">
            <div className="setting-item">
              <FaRegUserCircle size={15} className="icon" />
              <p className="text">My Account</p>
            </div>
            <div className="setting-item">
              <IoIosNotificationsOutline size={15} className="icon" />
              <p className="text">Notifications and Sounds</p>
            </div>
            <div className="setting-item">
              <RiLockPasswordFill size={15} className="icon" />
              <p className="text">Privacy and Security</p>
            </div>
            <div className="setting-item">
              <IoChatbubbleOutline size={15} className="icon" />
              <p className="text">Chat Setting</p>
            </div>
            <div className="setting-item">
              <FaFolder
                size={15}
                className="icon"
                stroke="gray"
                color="transparent"
                style={{ strokeWidth: "40" }}
              />
              <p className="text">Folders</p>
            </div>
            <div className="setting-item">
              <GiSettingsKnobs size={15} className="icon" />
              <p className="text">Advanced</p>
            </div>
            <div className="setting-item">
              <HiOutlineSpeakerWave size={15} className="icon" />
              <p className="text">Speakers and Cameras</p>
            </div>
            <div className="setting-item">
              <PiBatteryChargingLight size={15} className="icon" />
              <p className="text">Battery and Animations</p>
            </div>
            <div className="setting-item">
              <HiLanguage size={15} className="icon" />
              <p className="text">Language</p>
            </div>
          </div>
          <div className="setting__scale">
            <HiOutlineEye size={20} className="icon" />
            <p className="text">Default interface scale</p>
            <Toggle  />
          </div>
          <div className="telegram-features">
            <div className="faq">
              <HiOutlineQuestionMarkCircle size={20} className="icon" />
              <p className="text">Telegram FAQ</p>
            </div>
            <div className="feature">
              <HiOutlineLightBulb size={20} className="icon" />
              <p className="text">Telegram features</p>
            </div>
            <div className="question">
              <BiMessageRoundedDots size={20} className="icon" />
              <p className="text">Telegram Question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
