import { BsThreeDotsVertical } from "react-icons/bs";
import profile from "../assets/images/p17.jpg";
import {
  PiBatteryChargingLight,
  PiFolderSimple,
  PiLightbulbFilament,
} from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";

import {
  HiLanguage,
  HiOutlineEye,
  HiOutlineQuestionMarkCircle,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Toggle } from "./Toggle";
import { CiLock } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { MyAccount } from "./MyAccount";
import { useDisplayContext } from "../context/context";
import { Fragment } from "react/jsx-runtime";
import { Notification } from "./Notification";
import { Privacy } from "./Privacy";
import { ChatSetting } from "./ChatSetting";
import { FoldersSetting } from "./FoldersSetting";
import { AdvancedSetting } from "./AdvancedSetting";

export const Setting = () => {
  const display = useDisplayContext();
  return (
    <Fragment>
      <MyAccount />
      <Notification />
      <Privacy />
      <ChatSetting />
      <FoldersSetting />
      <AdvancedSetting />
      <div
        className={`setting-container ${
          display.displayItem !== 4 && "setting-container__hidden"
        }`}
      >
        <div className="setting-container__header">
          <p className="text">Settings</p>
          <div className="actions">
            <BsThreeDotsVertical className="icon" />
            <LiaTimesSolid
              size={15}
              className="icon"
              onClick={display.handleDisplayNone}
            />
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
              <div
                className="setting-item"
                onClick={() => display.handleDisplay(40)}
              >
                <MdOutlineAccountCircle size={15} className="icon" />
                <p className="text">My Account</p>
              </div>
              <div
                className="setting-item"
                onClick={() => display.handleDisplay(41)}
              >
                <IoMdNotificationsOutline size={15} className="icon" />
                <p className="text">Notifications and Sounds</p>
              </div>
              <div
                className="setting-item"
                onClick={() => display.handleDisplay(42)}
              >
                <CiLock size={15} className="icon" />
                <p className="text">Privacy and Security</p>
              </div>
              <div
                className="setting-item"
                onClick={() => display.handleDisplay(43)}
              >
                <IoChatbubbleOutline size={15} className="icon" />
                <p className="text">Chat Setting</p>
              </div>
              <div
                className="setting-item"
                onClick={() => display.handleDisplay(44)}
              >
                <PiFolderSimple size={15} className="icon" />
                <p className="text">Folders</p>
              </div>
              <div
                className="setting-item"
                onClick={() => display.handleDisplay(45)}
              >
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
              <Toggle />
            </div>
            <div className="telegram-features">
              <div className="faq">
                <HiOutlineQuestionMarkCircle size={20} className="icon" />
                <p className="text">Telegram FAQ</p>
              </div>
              <div className="feature">
                <PiLightbulbFilament size={20} className="icon" />
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
    </Fragment>
  );
};
