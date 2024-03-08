import { BsArrowLeft, BsDeviceSsd } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useDisplayContext } from "../context/context";
import { GoKey } from "react-icons/go";
import { CiTimer } from "react-icons/ci";
import { MdLockOutline, MdOutlineDevices } from "react-icons/md";
import { TbHandStop } from "react-icons/tb";
import { Toggle } from "./Toggle";

export const Privacy = () => {
  const display = useDisplayContext();
  return (
    <div className="privacy">
      <div className="privacy__header">
        <BsArrowLeft
          size={15}
          className="back icon"
          onClick={() => display.handleDisplay(4)}
        />
        <p className="title">Info</p>
        <LiaTimesSolid
          className="close icon"
          onClick={() => display.handleDisplay(-2)}
        />
      </div>

      <div className="section">
        <div className="section__security">
          <h3 className="header">Security</h3>
          <div className="section__security__content">
            <div className="content-item">
              <GoKey className="icon " />
              <p className="text">Two-Step Verification</p>
              <p className="switch">Off</p>
            </div>
            <div className="content-item">
              <CiTimer />
              <p className="text">Auto-Delete Messages</p>
              <p className="switch">Off</p>
            </div>
            <div className="content-item">
              <MdLockOutline className="icon" />
              <p className="text">Local pass code</p>
              <p className="switch">Off</p>
            </div>
            <div className="content-item">
              <TbHandStop />
              <p className="text">Blocked users</p>
            </div>
            <div className="content-item">
              <MdOutlineDevices className="icon" />
              <p className="text">Active Sessions</p>
            </div>
          </div>
          <div className="footer">
            <p className="text">Manage your sessions on all your devices</p>
          </div>
        </div>
        <div className="section__privacy">
          <h3 className="header">Privacy</h3>
          <div className="content-item">
            <p className="type">Phone number</p>
            <p className="value">Nobody (+14)</p>
          </div>
          <div className="content-item">
            <p className="type">Last seen & online</p>
            <p className="value">Everybody</p>
          </div>
          <div className="content-item">
            <p className="type">Profile photos</p>
            <p className="value">My contacts</p>
          </div>
          <div className="content-item">
            <p className="type">Bio </p>
            <p className="value">Everybody</p>
          </div>
          <div className="content-item">
            <p className="type">Forwarded messages</p>
            <p className="value">Everybody</p>
          </div>
          <div className="content-item">
            <p className="type">Calls</p>
            <p className="value">Everybody</p>
          </div>
          <div className="content-item">
            <p className="type">Groups and Channels</p>
            <p className="value">Everybody</p>
          </div>
          <div className="content-item">
            <p className="type">Voice messages</p>
            <p className="value">Everybody</p>
          </div>
          <div className="content-item">
            <p className="type">Messages</p>
            <p className="value">Everybody</p>
          </div>
        </div>
        <div className="section__sensitive-content">
          <h3 className="header">Sensitive content</h3>
          <div className="content-item">
            <p className="title">Disable filtering</p>
            <Toggle />
          </div>
          <div className="footer">
            <p className="text">
              Display sensitive media in public channels on all your Telegram
              devices
            </p>
          </div>
        </div>
        <div className="section__bot-and-websites">
          <h3 className="header">Bots and websites</h3>
          <div className="content-item">
            <p className="clear-payment">Clear Payment and Shipping info</p>
          </div>
        </div>
        <div className="section__delete-my-account">
          <div className="content-item">
            <p className="type">If away for...</p>
            <p className="value">1 year</p>
          </div>
        </div>
      </div>
    </div>
  );
};
