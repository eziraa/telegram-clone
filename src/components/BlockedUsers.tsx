import { BsArrowLeft } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useDisplayContext } from "../context/context";
import { TbHandStop } from "react-icons/tb";

export const BlockedUsers = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`blocked-users ${
        display.displayItem !== 420 && "blocked-users--hidden"
      }`}
    >
      <div className="blocked-users__header">
        <BsArrowLeft
          size={15}
          className="back icon"
          onClick={() => display.handleDisplay(42)}
        />
        <p className="title">Info</p>
        <LiaTimesSolid
          className="close icon"
          onClick={() => display.handleDisplay(-2)}
        />
      </div>
      <div className="blocked-users__body">
        <div className="section-item">
          <TbHandStop className="icon" color="#3456cc" />
          <p className="text">Block user</p>
        </div>
        <div className="section-item section-item--info">
          <p className="text">
            Blocked users can not send you messages or add you to groups, They
            will not see your profile, photos, stories, online and last seen
            status
          </p>
        </div>
        <div className="section-item">Loading</div>
      </div>
    </div>
  );
};
