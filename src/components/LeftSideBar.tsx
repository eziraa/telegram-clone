import Hamburger from "./Hamburger";
import { Folder } from "./Folder";
const list_of_folders = [
  "All Chats",
  "Channels",
  "Private",
  "Classical",
  "Unread",
  "Public",
  "Data ",
  "Machine L",
];
const LeftSideBar = () => {
  return (
    <nav className=" w-24 ">
      <Hamburger />
      {list_of_folders.map((folder) => (
        <div className="bg-slate-800 w-20 h-16 grid place-content-center ">
          <Folder />
          <div className=" min-w-6 m-auto ">{folder}</div>
        </div>
      ))}
      <
    </nav>
  );
};

export default LeftSideBar;
