// import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Profile } from "./Profile";
import { AccountsContainer } from "./AccountsContainer";
import { MenuItem } from "./MenuItem";
import { CreateGroup } from "./CreateGroup";
import { CreateChannel } from "./CreateChannel";
import { Contacts } from "./Contacts";
import { Calls } from "./Calls";
import { Setting } from "./Setting";
import {  useDisplayContext } from "../context/context";

export const Menu = () => {
  const display = useDisplayContext();
  return (
    <Fragment>
      <CreateGroup />
      <CreateChannel />
      <Contacts />
      <Calls />
      <Setting />
      <div
        className={`menu ${display.displayItem !== -1 && "menu--hidden"} ${
          display.animated && "menu--animated"
        }`}
      >
        <Profile />
        <AccountsContainer />
        <MenuItem />
      </div>
      ;
    </Fragment>
  );
};
