import Channel from "./Channel";
import MessageBoard from "./MessageBoard";
import { Search } from "./Search";
import chat from "../../public/Data/chat";

export const Container = () => {
  return (
    <div className="body-container">
      <div className="left-aside">
        <Search />
        <div className="scroll-container">
          <div className="chats-container">
            <Channel />
          </div>
        </div>
      </div>
      <MessageBoard chat={chat} />
    </div>
  );
};
