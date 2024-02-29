import React, { Fragment } from "react";
import LeftSideBar from "./LeftSideBar";
import { Container } from "./Container";
const Main = () => {
  return (
    <div className="w-full h-full">
      <LeftSideBar />
      <Container />
    </div>
  );
};

export default Main;
