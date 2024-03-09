import { BsArrowLeft } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useDisplayContext } from "../context/context";

export const ActiveSessions = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`active-sessions ${
        display.displayItem !== 421 && "active-sessions--hidden"
      }`}
    >
      <div className="active-sessions__header">
        <BsArrowLeft
          size={15}
          className="back icon"
          onClick={() => display.handleDisplay(42)}
        />
        <p className="title">Info</p>
        <LiaTimesSolid
          className="close icon"
          onClick={() => display.handleDisplay(-2)}
        />
      </div>
      <div className="active-sessions__body">
        <div className="section-item">Loading</div>
      </div>
    </div>
  );
};
