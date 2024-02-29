import React, { Fragment } from "react";
import Hamburger from "./Hamburger";
const list_of_folders = [
  "All Chats",
  "Channels",
  "Private",
  "Classical",
  "Unread",
  "Public",
  "Data Science",
  "Machine Learning",
];
const LeftSideBar = () => {
  return (
    <nav className="inline-block w-20">
      <Hamburger />
      {list_of_folders.map((folder) => (
        <div className="bg-blue-800 w-20 h-16 block ">{folder}</div>
      ))}
    </nav>
  );
};

export default LeftSideBar;
