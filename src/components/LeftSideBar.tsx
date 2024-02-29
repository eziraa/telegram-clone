import Hamburger from "./Hamburger";
import { Folder } from "./Folder";
import { Edit } from "./Edit";
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
        <div className="bg-slate-600 w-20 h-16 grid place-content-center text-xs font-sans text-gray-400 font-semibold fs-">
          <Folder />
          <div className=" min-w-6 m-auto ">{folder}</div>
        </div>
      ))}
      <Edit />
    </nav>
  );
};

export default LeftSideBar;
