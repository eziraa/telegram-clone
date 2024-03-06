import Hamburger from "./Hamburger";
import { Folder } from "./Folder";
import { Edit } from "./Edit";
import { useState } from "react";
import { useDisplayContext } from "../context/context";
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

// interface Props {
//   toggleMenu: () => void;
//   handleDisplay: (index: number) => void;
// }
const LeftSideBar = () => {
  const [activeIndex, setActiveIndex] = useState(-8);
  const display = useDisplayContext();
  const makeActive = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <nav className="left-nav ">
      <div
        className={`left-nav__link ${
          activeIndex == -1 && "left-nav__link--active"
        }`}
        onClick={() => {
          display.toggleMenu();
          display.handleDisplay(-1);
        }}
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
          <Folder active={index === activeIndex} />
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
