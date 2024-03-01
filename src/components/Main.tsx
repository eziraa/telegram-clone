import React, { Fragment } from "react";
import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
import image from "../assets/images/back-1.png";
const Main = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <LeftSideBar />
      <Container />
    </div>
  );
};

export default Main;
