import Hamburger from "./Hamburger";
import { Folder } from "./Folder";
import { Edit } from "./Edit";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(-8);

  const makeActive = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <nav className="left-nav ">
      <div
        className={`left-nav__link ${
          activeIndex == -1 && "left-nav__link--active"
        }`}
      >
        <Hamburger />
      </div>
      {list_of_folders.map((folder, index) => (
        <div
          key={folder}
          className={`left-nav__link ${
            index === activeIndex && "left-nav__link--active"
          }`}
          onClick={() => makeActive(index)}
        >
          <Folder />
          <div className="left-nav__text ">{folder}</div>
        </div>
      ))}
      <div
        className={`left-nav__link ${
          activeIndex == -2 && "left-nav__link--active"
        }`}
        onClick={() => makeActive(-2)}
      >
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
