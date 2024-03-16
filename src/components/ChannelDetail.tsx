import { LiaTimesSolid } from "react-icons/lia";
import { useDisplayContext } from "../context/context";
import { CiCircleInfo } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { Toggle } from "./Toggle";
import { RiLogoutBoxRLine } from "react-icons/ri";

export const ChannelDetail = () => {
  const display = useDisplayContext();
  return (
    <div className="channel-detail">
      <div className="channel-header">
        <p className="title">Channel Info</p>
        <LiaTimesSolid
          className="close icon"
          onClick={() => display.handleDisplay(-2)}
        />
      </div>
      <div className="channel-info">
        <img src="" alt="" className="image" />
        <div className="description">
          <p className="name">Python Free courses</p>
          <p className="subscribers">16,435 subscribers</p>
        </div>
      </div>
      <div className="channel-setting">
        <div className="section-item">
          <CiCircleInfo className="icon" />
          <div className="links">
            <a href="http://t.me/datasciencefree">t.me/datasciencefree</a>
            <span>Link</span>
          </div>
        </div>
        <div className="section-item">
          <IoNotificationsOutline className="icon" />
          <p className="title">Notification</p>
          <Toggle />
        </div>
      </div>
      <div className="channel__footer">
        <div className="section-item">
          <RiLogoutBoxRLine className="icon" />
          <p className="title">Leave Channel</p>
        </div>
        <div className="section-item">
          <CiCircleInfo className="icon" />
          <p className="text">Report</p>
        </div>
      </div>
    </div>
  );
};
