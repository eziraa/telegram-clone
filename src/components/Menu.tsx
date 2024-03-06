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
      <CreateGroup
        displayItemIndex={display.displayItem}
        handleDisplayNone={display.handleDisplayNone}
        handleDisplay={display.handleDisplay}
      />
      <CreateChannel
        displayItemIndex={display.displayItem}
        handleDisplayNone={display.handleDisplayNone}
      />
      <Contacts
        displayItemIndex={display.displayItem}
        handleDisplayNone={display.handleDisplayNone}
      />
      <Calls
        displayItemIndex={display.displayItem}
        handleDisplayNone={display.handleDisplayNone}
      />
      <Setting
        displayItemIndex={display.displayItem}
        handleDisplayNone={display.handleDisplayNone}
      />
      <div
        className={`menu ${display.displayItem !== -1 && "menu--hidden"} ${
          display.animated && "menu--animated"
        }`}
      >
        <Profile />
        <AccountsContainer />
        <MenuItem handleDisplay={display.handleDisplay} />
      </div>
      ;
    </Fragment>
  );
};
