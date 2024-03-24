import { BsThreeDotsVertical } from "react-icons/bs";
import { Fragment } from "react/jsx-runtime";

import {
  MdCall,
  MdCallMade,
  MdCallMissed,
  MdCallReceived,
} from "react-icons/md";
import { FcCallback } from "react-icons/fc";
import list_of_calls from "./data/calls";
import { useDisplayContext } from "../context/context";


export const Calls = () => {
  const display = useDisplayContext();
  const getCallType = (type: string) => {
    if (type === "received") return <MdCallReceived color="blue" />;
    else if (type === "called") return <MdCallMade color="green" />;
    else if (type === "missed") return <MdCallMissed color="red" />;
    else return <FcCallback color="red" />;
  };
  return (
    <Fragment>
      <div
        className={`calls-container ${
          display.displayItem !== 3 && "calls-container--hidden"
        }`}
      >
        <div className="three-dots " style={{ top: "2%" }}>
          <BsThreeDotsVertical size={20} />
        </div>
        <div className="calls__header">
          <p className="calls__header__text">Calls</p>
        </div>
        <div className="scroll-container">
          <div className="calls__list">
            {list_of_calls.map((call, index) => {
              return (
                <div className="call" key={index}>
                  <div className="call__profile">
                    <img src={call.image} alt="" className="image" />
                  </div>
                  <div className="call__info">
                    <p className="call__name"> {call.name} </p>
                    <div className="call__data">
                      {getCallType(call.type)}
                      <p className="call__time"> {call.last_seen} </p>
                    </div>
                  </div>
                  <div className="call__icon">
                    <MdCall size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="calls__footer">
          <button className="btn btn-close" onClick={display.handleDisplayNone}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
};
