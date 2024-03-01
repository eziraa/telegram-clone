import Hamburger from "./Hamburger";
import { Folder } from "./Folder";
import { Edit } from "./Edit";
import { MouseEvent } from "react";
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
  const makeActive = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    target.classList.add("left-nav__link--active");
  };
  return (
    <nav className="left-nav ">
      <Hamburger />
      {list_of_folders.map((folder) => (
        <div key={folder} className="left-nav__link">
          <Folder />
          <div className="left-nav__text ">{folder}</div>
        </div>
      ))}
      <div className="left-nav__link" onClick={(_e) => makeActive(_e)}>
        <Edit />
        <div
          className=" left-nav__text"
          style={{
            marginTop: "3px",
          }}
        >
          Edit
        </div>
      </div>
    </nav>
  );
};

export default LeftSideBar;
