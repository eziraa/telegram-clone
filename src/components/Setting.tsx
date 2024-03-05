import {
  BsThreeDotsVertical,
  BsToggle2Off,
  BsToggle2On,
  BsToggleOff,
} from "react-icons/bs";
import profile from "../assets/images/p17.jpg";
import { PiBatteryChargingLight, PiToggleLeftFill } from "react-icons/pi";
import { FaFolder, FaRegUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import {
  HiLanguage,
  HiOutlineEye,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";
import { GiSettingsKnobs } from "react-icons/gi";
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
          <BsThreeDotsVertical size={20} />
          <span
            style={{ fontSize: "1.6rem", cursor: "pointer" }}
            onClick={handleDisplayNone}
          >
            X
          </span>
        </div>
      </div>
      <div className="setting">
        <div className="user__profile">
          <img src={profile} alt="" className="image" />
          <div className="user__info">
            <p className="name">Ezira</p>
            <p className="phone-number">+251 958 25...</p>
            <p className="username">@ezrawi</p>
          </div>
        </div>
        <div className="setting-body">
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
          <HiOutlineEye size={20} />
          <p className="text">Default interface scale</p>
          <BsToggleOff size={20} />
        </div>
        <div className="telegram-features"></div>
      </div>
    </div>
  );
};
