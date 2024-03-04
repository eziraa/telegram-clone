import Channel from "./Channel";
import { Search } from "./Search";
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
