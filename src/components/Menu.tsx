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
interface Props {
  displayItem: number;
  animated: boolean;
  handleDisplayNone: () => void;
  handleDisplay: (index: number) => void;
}
export const Menu = ({
  displayItem,
  animated,
  handleDisplay,
  handleDisplayNone,
}: Props) => {
  return (
    <Fragment>
      <CreateGroup
        displayItemIndex={displayItem}
        handleDisplayNone={handleDisplayNone}
        handleDisplay={handleDisplay}
      />
      <CreateChannel
        displayItemIndex={displayItem}
        handleDisplayNone={handleDisplayNone}
      />
      <Contacts
        displayItemIndex={displayItem}
        handleDisplayNone={handleDisplayNone}
      />
      <Calls
        displayItemIndex={displayItem}
        handleDisplayNone={handleDisplayNone}
      />
      <Setting
        displayItemIndex={displayItem}
        handleDisplayNone={handleDisplayNone}
      />
      <div
        className={`menu ${displayItem !== -1 && "menu--hidden"} ${
          animated && "menu--animated"
        }`}
      >
        <Profile />
        <AccountsContainer />
        <MenuItem handleDisplay={handleDisplay} />
      </div>
      ;
    </Fragment>
  );
};
