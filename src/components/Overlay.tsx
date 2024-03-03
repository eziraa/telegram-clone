interface Props {
  display: boolean;
  toggleMenu: () => void;
}
export const Overlay = ({ display, toggleMenu }: Props) => {
  return (
    <div
      className={`overlay ${!display && "overlay--hidden"} `}
      onClick={toggleMenu}
    ></div>
  );
};
