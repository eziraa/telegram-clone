import { BsArrowLeft } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { Toggle } from "./Toggle";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiBoxes } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { MdOutlineAccountCircle, MdOutlineGroup } from "react-icons/md";
import { GoTelescope } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { VscCallOutgoing, VscPinned } from "react-icons/vsc";
import screen from "../assets/screen.png";
import { useDisplayContext } from "../context/context";
export const Notification = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`notification ${
        display.displayItem !== 41 && "notification--hidden"
      }`}
    >
      <div className="notification__header">
        <BsArrowLeft
          size={15}
          className="back icon"
          onClick={() => display.handleDisplay(4)}
        />
        <p className="title">Notification and sounds</p>
        <LiaTimesSolid
          className="close icon"
          onClick={() => display.handleDisplayNone()}
        />
      </div>
      <div className="scroll-container">
        <div className="notification__body">
          <div className="notification__global-setting">
            <p className="header">Global Setting</p>
            <div className="setting-item">
              <IoMdNotificationsOutline size={15} className="icon" />
              <p className="title">Desktop notifications</p>
              <Toggle />
            </div>
            <div className="setting-item">
              <CiBoxes size={15} className="icon" />
              <p className="title">Flash on taskbar icon</p>
              <Toggle />
            </div>
            <div className="setting-item">
              <HiOutlineSpeakerWave size={15} className="icon" />
              <p className="title">Allow sound</p>
              <Toggle />
            </div>
          </div>
          <div className="notification__chat-notification">
            <p className="header">Notifications and chats</p>
            <div className="chat-item">
              <MdOutlineAccountCircle size={15} className="icon" />
              <div className="chat-type">
                <p className="chat-type__title">Chat</p>
                <p className="exception">On, 32 exceptions</p>
              </div>
              <Toggle />
            </div>
            <div className="chat-item">
              <MdOutlineGroup size={15} className="icon" />
              <div className="chat-type">
                <p className="chat-type__title">Groups</p>
                <p className="exception">On, 12 exceptions</p>
              </div>
              <Toggle />
            </div>
            <div className="chat-item">
              <GoTelescope size={15} className="icon" />
              <div className="chat-type">
                <p className="chat-type__title">Channels</p>
                <p className="exception">On, 20 exceptions</p>
              </div>
              <Toggle />
            </div>
          </div>
          <div className="notification__events">
            <p className="header">Events</p>
            <div className="event">
              <FiUserPlus className="icon" />
              <p className="title">Contact joined telegram</p>
              <Toggle />
            </div>
            <div className="event">
              <VscPinned className="icon" />
              <p className="title">Pinned messages</p>
              <Toggle />
            </div>
          </div>
          <div className="notification__calls">
            <p className="header">Calls</p>
            <div className="call-setting">
              <VscCallOutgoing className="icon" />
              <p className="title">Accept calls on this device</p>
              <Toggle />
            </div>
          </div>
          <div className="notification__badge">
            <p className="header">Badge counter</p>
            <div className="badge-item">
              <p className="title">Include muted chats in unread count</p>
              <Toggle />
            </div>
            <div className="badge-item">
              <p className="title">Count unread messages</p>
              <Toggle />
            </div>
          </div>
          <div className="notification__native">
            <p className="header">Native notifications</p>
            <div className="native-item">
              <p className="title">Use Window notifications</p>
              <Toggle />
            </div>
          </div>
          <div className="notification__screen">
            <p className="header">Location on screen</p>
            <img src={screen} alt="" className="image" />
          </div>
          <div className="notification__count">
            <p className="header">Notification count</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
