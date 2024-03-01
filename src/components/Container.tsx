import Channel from "./Channel";
import { Search } from "./Search";
// [calc(100% - 20rem)]
export const Container = () => {
  return (
    <div className="channel-container">
      <Search />
      <Channel />
    </div>
  );
};
