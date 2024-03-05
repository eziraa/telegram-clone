import { FaRegUserCircle } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import {
  IoBookmarkOutline,
  IoCallOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdGroup, MdOutlineNightlight } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";
interface Props {
  handleDisplay: (index: number) => void;
}
export const MenuItem = ({ handleDisplay }: Props) => {
  return (
    <Fragment>
      <div className="menu__item" onClick={() => handleDisplay(0)}>
        <div className="menu__item__icon">
          <GoTelescope size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">New channel </span>
        </div>
      </div>
      <div className="menu__item" onClick={() => handleDisplay(1)}>
        <div className="menu__item__icon">
          <MdGroup size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">Groups</span>
        </div>
      </div>
      <div className="menu__item" onClick={() => handleDisplay(2)}>
        <div className="menu__item__icon">
          <FaRegUserCircle size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">Contacts</span>
        </div>
      </div>
      <div className="menu__item" onClick={() => handleDisplay(3)}>
        <div className="menu__item__icon">
          <IoCallOutline size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">Calls</span>
        </div>
      </div>
      <div className="menu__item">
        <div className="menu__item__icon">
          <IoBookmarkOutline size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">Saved Messages</span>
        </div>
      </div>
      <div className="menu__item" onClick={() => handleDisplay(4)}>
        <div className="menu__item__icon">
          <IoSettingsOutline size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">Setting</span>
        </div>
      </div>
      <div className="menu__item">
        <div className="menu__item__icon">
          <MdOutlineNightlight size={20} color={"#74728c"} />
        </div>
        <div className="menu__item__text">
          <span className="menu__item__title">Night mode</span>
        </div>
      </div>
    </Fragment>
  );
};
