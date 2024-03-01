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
    <nav className="left-nav ">
      <Hamburger />
      {list_of_folders.map((folder) => (
        <div key={folder} className="left-nav__link">
          <Folder />
          <div className="left-nav__text ">{folder}</div>
        </div>
      ))}
      <div className="left-nav__link">
        <Edit />
        <div className=" left-nav__text">Edit</div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
