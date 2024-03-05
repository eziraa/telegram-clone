import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
import image from "../assets/images/back-1.png";
import { Menu } from "./Menu";
import { useState } from "react";
import { Overlay } from "./Overlay";
const Main = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [displayItem, setDisplayItem] = useState(-2);

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
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Overlay
        handleDisplayNone={handleDisplayNone}
        visible={displayItem >= -1}
      />
      <Menu
        displayItem={displayItem}
        handleDisplay={handleDisplay}
        handleDisplayNone={handleDisplayNone}
        animated={animated}
      />
      <LeftSideBar toggleMenu={toggleMenu} handleDisplay={handleDisplay} />
      <Container />
    </div>
  );
};

export default Main;
