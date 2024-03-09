import { BsArrowLeft, BsEmojiExpressionless } from "react-icons/bs";
import { useDisplayContext } from "../context/context";
import { LiaTimesSolid } from "react-icons/lia";
import { IoBrushOutline } from "react-icons/io5";
import { MdDryCleaning, MdNightlight } from "react-icons/md";
import img from "../assets/images/back-1.png";
import { BiArchiveIn, BiSticker } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
export const ChatSetting = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`chat-setting ${
        display.displayItem !== 43 && "chat-setting--hidden"
      }`}
    >
      <div className="chat-setting__header">
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
      <div className="scroll-container">
        <div className="section">
          <div className="section__theme-setting">
            <h3 className="header">Theme settings</h3>
            <div className="section-item">
              <IoBrushOutline className="icon" />
              <p className="title">Your name color</p>
              <p className="value property">Ezira</p>
            </div>
            <div className="section-item">
              <MdNightlight className="icon" />
              <p className="title">Auto-night mode</p>
              <p className="value">Off</p>
            </div>
          </div>
          <div className="section__custom-theme">
            <h3 className="header">Custom themes</h3>
            <div className="section-item">
              <MdDryCleaning className="icon" />
              <p className="title">Classic</p>
            </div>
          </div>
          <div className="section__wallpaper">
            <h3 className="header">Chat wallpaper</h3>
            <div className="section-item section-item--not">
              <img src={img} alt="" className="image" />
              <div className="choices">
                <p className="choice">Choose from gallery</p>
                <p className="choice">Choose from file</p>
              </div>
            </div>
          </div>
          <div className="section__sticker">
            <h3 className="header">Stickers and emoji</h3>
            <div className="section-item">
              <input type="checkbox" name="" id="" className="check" />
              <label className="title">Large emoji</label>
            </div>
            <div className="section-item">
              <input type="checkbox" name="" id="" className="check" />
              <p className="title">Replace emoji automatically</p>
            </div>
            <div className="section-item">
              <input type="checkbox" name="" id="" className="check" />
              <p className="title">Suggest emoji replacements</p>
            </div>
            <div className="section-item">
              <input type="checkbox" name="" id="" className="check" />
              <p className="title">Suggest popular stickers by emoji</p>
            </div>
            <div className="section-item">
              <input type="checkbox" name="" id="" className="check" />
              <p className="title">Loop animated stickers</p>
            </div>
            <div className="section-item">
              <BiSticker className="icon" />
              <p className="title">Manage stickers sets</p>
            </div>
            <div className="section-item">
              <BsEmojiExpressionless className="icon" />
              <p className="title">Choose emoji set</p>
            </div>
          </div>
          <div className="section__message">
            <h3 className="header">Messages</h3>
            <div className="section-item">
              <input type="radio" name="" id="" className="radio-btn" />
              <p className="title">Send me with enter</p>
            </div>
            <div className="section-item">
              <input type="radio" name="" id="" className="radio-btn" />
              <p className="title">Send with ctrl + Enter</p>
            </div>
            <div className="section-item">
              <input type="radio" name="" id="" className="radio-btn" />
              <p className="title">Reply with double click</p>
            </div>
            <div className="section-item">
              <input type="radio" name="" id="" className="radio-btn" />
              <p className="title">Send reaction with double click</p>
              <FaThumbsUp className="icon value" color="orange" />
            </div>
            <div className="section-item">
              <input type="checkbox" name="" id="" className="check" />
              <p className="title">Reaction button on messages</p>
            </div>
          </div>
          <div className="section__archive">
            <div className="section-item">
              <BiArchiveIn className="icon" />
              <p className="title">Archive setting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
