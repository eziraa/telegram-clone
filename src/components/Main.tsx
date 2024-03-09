import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
import image from "../assets/images/back-1.png";
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
    if (index < 10) toggleMenu();
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
      <div
        className="main"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Overlay />
        <Menu />
        <LeftSideBar />
        <Container />
      </div>
    </DisplayContext.Provider>
  );
};

export default Main;
