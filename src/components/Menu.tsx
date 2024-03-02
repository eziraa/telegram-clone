import { Fragment } from "react/jsx-runtime";

interface Props {
  displayMenu: boolean;
  toggleMenu: () => void;
}

export const Menu = ({ displayMenu, toggleMenu }: Props) => {
  return (
    <Fragment>
      <div
        className={`overlay ${!displayMenu && "overlay--hidden"}`}
        onClick={toggleMenu}
      ></div>
      <div className={`menu ${!displayMenu && "menu--hidden"}`}>Menu</div>;
    </Fragment>
  );
};
