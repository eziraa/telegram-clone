// import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { Profile } from "./Profile";
import { AccountsContainer } from "./AccountsContainer";
interface Props {
  displayMenu: boolean;
  animated: boolean;
  toggleMenu: () => void;
}
export const Menu = ({ displayMenu, toggleMenu, animated }: Props) => {
  return (
    <Fragment>
      <div
        className={`overlay ${!displayMenu && "overlay--hidden"} `}
        onClick={toggleMenu}
      ></div>
      <div
        className={`menu ${!displayMenu && "menu--hidden"} ${
          animated && "menu--animated"
        }`}
      >
        <Profile />
        <AccountsContainer />
      </div>
      ;
    </Fragment>
  );
};
