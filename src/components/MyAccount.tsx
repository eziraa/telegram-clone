import { BsArrowLeft } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineAccountCircle } from "react-icons/md";
import profile from "../assets/images/p17.jpg";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaAt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useDisplayContext } from "../context/context";
import { EditName } from "./EditName";
import { Fragment } from "react/jsx-runtime";
export const MyAccount = () => {
  const display = useDisplayContext();
  return (
    <Fragment>
      <EditName />
      <div
        className={`my-account ${
          !display.displayItem.toString().startsWith("40") &&
          "my-account--hidden"
        }`}
      >
        <div className="my-account__header">
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
        <div className="my-account__profile">
          <img src={profile} className="image" />
          <p className="name">Ezira</p>
          <p className="login-time">Last seen 3 minutes ago</p>
        </div>
        <div className="bio">
          <p className="bio__text">" We us our" </p>
          <p className="bio__text-counter">55</p>
        </div>
        <div className="details">
          <p className="details__header">
            Any details sech as age, occupation, or city <br />
            Example: 23 y.o designer from Bahir Dar
          </p>
          <div className="details__list">
            <div
              className="detail-item"
              onClick={() => {
                display.overlayBringToFront();
                display.handleDisplay(400);
              }}
            >
              <MdOutlineAccountCircle size={15} className="icon" />
              <p className="title">Name</p>
              <p className="value">Ezira</p>
            </div>
            <div className="detail-item" onClick={display.overlayBringToFront}>
              <HiOutlinePhone className="icon" />
              <p className="title">Phone Number</p>
              <p className="value">+251 93464242</p>
            </div>
            <div className="detail-item" onClick={display.overlayBringToFront}>
              <FaAt className="icon" />
              <p className="title">User Name</p>
              <p className="value">@ezrawi</p>
            </div>
          </div>
          <div className="details__footer">
            <p className="text">
              Username lets people contact you on Telegram without needing you
              phone number
            </p>
          </div>
          <div className="add-account">
            <IoIosAdd className="icon" />
            <div className="text">Add account</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
