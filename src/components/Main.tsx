import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
import image from "../assets/images/back-1.png";
import { Menu } from "./Menu";
import { useState } from "react";
const Main = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Menu displayMenu={displayMenu} toggleMenu={toggleMenu}/>
      <LeftSideBar toggleMenu={toggleMenu} />
      <Container />
    </div>
  );
};

export default Main;
