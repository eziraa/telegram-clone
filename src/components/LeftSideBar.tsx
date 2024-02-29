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
  "Web L",
];
const LeftSideBar = () => {
  return (
    <nav className=" w-24 absolute left-0 top-0 ">
      <Hamburger />
      {list_of_folders.map((folder) => (
        <div
          key={folder}
          className="bg-slate-600 w-20 h-16 grid place-content-center text-xs font-sans text-gray-400 font-semibold fs-"
        >
          <Folder />
          <div className=" min-w-6 m-auto ">{folder}</div>
        </div>
      ))}
      <div className="bg-slate-600 w-20 h-16 grid place-content-center text-xs font-sans text-gray-400 font-semibold fs-">
        <Edit />
        <div className=" min-w-6 m-auto ">Edit</div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
