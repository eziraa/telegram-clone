import { AiOutlineSound } from "react-icons/ai";
import { BsEmojiExpressionless, BsThreeDotsVertical } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import image from "../assets/images/back-1.png";

import {
  IoEyeOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import img from "../assets/images/p10.jpg";
import { useDisplayContext } from "../context/context";

interface TextEntity {
  type?: string;
  text?: string;
  href?: string;
}

interface Message {
  id: number;
  type?: string;
  date?: string;
  date_unixtime?: string;
  from?: string;
  from_id?: string;
  edited?: string;
  edited_unixtime?: string;
  forwarded_from?: string;
  reply_to_message_id?: number;
  saved_from?: string;
  thumbnail?: string;
  author?: string;
  file?: string;
  photo?: string;
  width?: number;
  height?: number;
  mime_type?: string;
  text?: string | (string | TextEntity)[];
  text_entities?: TextEntity[];
}

interface Chat {
  name: string;
  type: string;
  id: number;
  messages: Message[];
}

interface Props {
  chat: Chat | undefined;
}
const MessageBoard = ({ chat }: Props) => {
  const display = useDisplayContext();
  return (
    <div
      className="msg-board"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="msg-board__header">
        <div className="channel-info">
          <p className="channel-name">{chat && chat.name}</p>
          <p className="channel-subscribers">{chat && "2,456"} subscribers</p>
        </div>
        <div className="last">
          <IoSearchOutline className="icon" />
          <TbLayoutSidebarLeftExpand
            className="icon"
            onClick={() => {
              display.handleDisplay(9);
            }}
          />
          <BsThreeDotsVertical className="icon" />
        </div>
      </div>
      <div className="msg-board__body">
        <div className="scroll-container">
          <div className="messages">
            {chat &&
              chat.messages.map((message) => (
                <div className="message">
                  <div className="header">
                    <h3 className="header__text"> {chat.name} </h3>
                  </div>
                  {<img src={img} alt="" />}

                  <p className="text">
                    {" "}
                    {typeof message.text === "string" && message.text}{" "}
                  </p>

                  <div className="footer">
                    <IoEyeOutline />
                    <span>34</span>
                    <span>{message.author}</span>
                    <span>{message.date && message.date.slice(-8, -2)}AM</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="msg-board__footer">
        <FaFileUpload className="icon" />
        <input placeholder="Broad cast Messages" name="search" />
        <div className="last">
          <IoNotificationsOutline className="icon" />
          <BsEmojiExpressionless className="icon" />
          <AiOutlineSound className="icon" />
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;