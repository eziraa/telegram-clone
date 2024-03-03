import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
import image from "../assets/images/back-1.png";
import { Menu } from "./Menu";
import { useState } from "react";
const Main = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [animated, setAnimated] = useState(false);

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
      <Menu
        displayMenu={displayMenu}
        toggleMenu={toggleMenu}
        animated={animated}
      />
      <LeftSideBar toggleMenu={toggleMenu} />
      <Container />
    </div>
  );
};

export default Main;
