import { useDisplayContext } from "../context/context";

export const Overlay = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`overlay ${display.displayItem < -1 && "overlay--hidden"} `}
      onClick={display.handleDisplayNone}
    ></div>
  );
};
