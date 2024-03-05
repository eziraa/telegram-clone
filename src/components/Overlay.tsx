interface Props {
  display_index: number;
  toggleMenu: () => void;
}
export const Overlay = ({ display_index, toggleMenu }: Props) => {
  return (
    <div
      className={`overlay ${display < 0 && "overlay--hidden"} `}
      onClick={toggleMenu}
    ></div>
  );
};
