import Channel from "./Channel";
import { Search } from "./Search";
import "./scroll-bar.css";
// [calc(100% - 20rem)]
export const Container = () => {
  return (
    <div className="body-container">
      <Search />
      <div className="scroll-container">
        <div className="chats-container">
          <Channel />
        </div>
      </div>
    </div>
  );
};
