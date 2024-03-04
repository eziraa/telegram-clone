// import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Profile } from "./Profile";
import { AccountsContainer } from "./AccountsContainer";
import { MenuItem } from "./MenuItem";
import { Overlay } from "./Overlay";
import { useState } from "react";
import { CreateGroup } from "./CreateGroup";
import { CreateChannel } from "./CreateChannel";
import { Contacts } from "./Contacts";
import { Calls } from "./Calls";
interface Props {
  displayMenu: boolean;
  animated: boolean;
  toggleMenu: () => void;
}
export const Menu = ({ displayMenu, toggleMenu, animated }: Props) => {
  const [displayItem, setDisplayItem] = useState(-1);

  const handleDisplay = (index: number) => {
    setDisplayItem(index);
    toggleMenu();
  };

  const handleDisplayNone = () => {
    setDisplayItem(-1);
  };
  return (
    <Fragment>
      <Overlay toggleMenu={toggleMenu} display={displayMenu} />
      <CreateGroup
        displayItemIndex={displayItem}
        handleDisplayNone={handleDisplayNone}
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
      <div
        className={`menu ${!displayMenu && "menu--hidden"} ${
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
