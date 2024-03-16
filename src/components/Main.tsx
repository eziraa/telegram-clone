import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
import { Menu } from "./Menu";
import { useState } from "react";
import { Overlay } from "./Overlay";
import { DisplayContext } from "../context/context";
export interface Display {
  displayMenu: boolean;
  animated: boolean;
  handleDisplayNone: () => void;
  toggleMenu: () => void;
  overlayBringToFront: () => void;
  handleDisplay: (index: number) => void;
  displayItem: number;
}
const GetDisplay = () => {
  const overlay = document.querySelector(".overlay");

  const [displayMenu, setDisplayMenu] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [displayItem, setDisplayItem] = useState(-2);
  const overlayBringToFront = () => {
    if (overlay) overlay.classList.toggle("overlay--front");
  };
  const handleDisplay = (index: number) => {
    setDisplayItem(index);
    if (index < 9) toggleMenu();
  };

  const handleDisplayNone = () => {
    setDisplayItem(-2);
  };

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
    setAnimated(true);
  };

  return {
    displayItem,
    animated,
    handleDisplay,
    handleDisplayNone,
    displayMenu,
    toggleMenu,
    overlayBringToFront,
  };
};

const Main = () => {
  return (
    <DisplayContext.Provider value={GetDisplay()}>
      <div className="main">
        <Overlay />
        <Menu />
        <LeftSideBar />
        <Container />
      </div>
    </DisplayContext.Provider>
  );
};

export default Main;
