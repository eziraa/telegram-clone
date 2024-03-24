import { BsArrowLeft, BsDatabase } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useDisplayContext } from "../context/context";
import { CgSwapVertical } from "react-icons/cg";
import { PiFolderSimple } from "react-icons/pi";
import { BiDownload } from "react-icons/bi";
import { Toggle } from "./Toggle";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Checkbox } from "./Checkbox";

export const AdvancedSetting = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`advanced-setting ${
        display.displayItem !== 45 && "advanced-setting--hidden"
      }`}
    >
      <div className="advanced-setting__header">
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
      <div className="advanced-setting__body">
        <div className="scroll-container">
          <div className="section">
            <div className="section__data-and-storage">
              <h3 className="header">Data and storage</h3>
              <div className="section-item">
                <CgSwapVertical className="icon" />
                <p className="title">Connection type</p>
                <p className="value">Default (connecting) </p>
              </div>
              <div className="section-item">
                <PiFolderSimple className="icon" />
                <p className="title">Download path</p>
                <p className="value">Default folder</p>
              </div>
              <div className="section-item">
                <BsDatabase className="icon" />
                <p className="title">Manage local storage</p>
              </div>
              <div className="section-item">
                <BiDownload className="icon" />
                <p className="title">Downloads</p>
              </div>
              <div className="section-item">
                <p className="title">Ask download path for each file </p>
                <Toggle />
              </div>
            </div>
            <div className="section__automatic-media-download">
              <h3 className="header"> Automatic media download</h3>
              <div className="section-item">
                <MdOutlineAccountCircle className="icon" />
                <p className="title">In private chats</p>
              </div>
              <div className="section-item">
                <MdOutlineAccountCircle className="icon" />
                <p className="title">In groups</p>
              </div>
              <div className="section-item">
                <MdOutlineAccountCircle className="icon" />
                <p className="title">In channels</p>
              </div>
            </div>
            <div className="section__window-title-bar">
              <h3 className="header">Window title bar</h3>
              <div className="section-item">
                <Checkbox />
                <p className="title">Show chat name</p>
              </div>
              <div className="section-item">
                <Checkbox />
                <p className="title">Total unread count</p>
              </div>
              <div className="section-item">
                <Checkbox />
                <p className="title">Use system window frame</p>
              </div>
            </div>
            <div className="section__system-integration">
              <h3 className="header">System integration</h3>
              <div className="section-item">
                <Checkbox />
                <p className="title">Show tray icon</p>
              </div>
              <div className="section-item">
                <Checkbox />
                <p className="title">Use monochrome icon</p>
              </div>
              <div className="section-item">
                <Checkbox />
                <p className="title">Show taskbar icon</p>
              </div>
              <div className="section-item">
                <Checkbox />
                <p className="title">Launch Telegram when system starts</p>
              </div>
              <div className="section-item">
                <Checkbox />
                <p className="title">Place Telegram in "Send to" menu</p>
              </div>
            </div>

            <div className="section__spell-checker">
              <h3 className="header">Spell checker</h3>
              <div className="section-item">
                <p className="title">Use system checker </p>
                <Toggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
