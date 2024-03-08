import { BsArrowLeft } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useDisplayContext } from "../context/context";
import folderImage from "../assets/images/folder.png";
import { Folder } from "./Folder";
import { FaPlusCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export const Folders = () => {
  const display = useDisplayContext();
  return (
    <div className="folders">
      <div className="folders__header">
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
      <div className="folders__body">
        <div className="header">
          <img src={folderImage} alt="" className="image" />
          <p className="fig-caption">
            Create folders for different groups of chats and quickly switch
            between them
          </p>
        </div>
        <div className="section">
          <h3 className="header">My folders</h3>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">Classical</p>
              <p className="number-of-chats">5 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">Channels</p>
              <p className="number-of-chats">296 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">Private</p>
              <p className="number-of-chats">233 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">Unread</p>
              <p className="number-of-chats">97 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">Groups </p>
              <p className="number-of-chats">29 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">SAD</p>
              <p className="number-of-chats">5 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">ML</p>
              <p className="number-of-chats">5 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <Folder active={true} />
            <div className="folder-data">
              <p className="title">Data science</p>
              <p className="number-of-chats">13 chats</p>
            </div>
            <MdDeleteOutline className="icon last" />
          </div>
          <div className="section-item">
            <FaPlusCircle className="icon" />
            <p className="title">Create new folder</p>
          </div>
        </div>
      </div>
    </div>
  );
};
