import { BsThreeDotsVertical } from "react-icons/bs";
import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import p9 from "../assets/images/p9.jpg";
import p10 from "../assets/images/p10.jpg";
import {
  MdCall,
  MdCallMissed,
  MdCallMissedOutgoing,
  MdCallReceived,
} from "react-icons/md";
import { FcCallTransfer, FcCallback } from "react-icons/fc";
import { SlCallOut } from "react-icons/sl";
import { VscCallOutgoing } from "react-icons/vsc";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}

const list_of_calls = [
  {
    name: "Jack",
    last_seen: "February 15, 2016 at 10:23 PM",
    image: p1,
    type: "called",
  },

  {
    name: "Stephen",
    last_seen: "February 25, 2016 at 00:23 PM",
    image: p2,
    type: "missed",
  },
  {
    name: "Solomon",
    last_seen: "February 1, 2016 at 10:53 AM",
    image: p3,
    type: "missed",
  },
  {
    name: "Ezira",
    last_seen: "January 15, 2016 at 04:23 PM",
    image: p4,
    type: "received",
  },

  {
    name: "Ela Barra",
    last_seen: "March 05, 2016 at 09:34 AM",
    image: p5,
    type: "called",
  },
  {
    name: "Ellis",
    last_seen: "February 25, 2016 at 04:23 PM",
    image: p6,
    type: "missed",
  },
  {
    name: "Ellis Barra",
    last_seen: "February 05, 2015 at 10:23 PM",
    image: p7,
    type: "called",
  },
  {
    name: "Stok",
    last_seen: "June 23, 2016 at 10:23 AM",
    image: p8,
    type: "missed",
  },
  {
    name: "Erik",
    last_seen: "July 05, 2016 at 06:23 AM",
    image: p9,
    type: "received",
  },
  {
    name: "Gtag",
    last_seen: "March 29, 2016 at 10:03 AM",
    image: p10,
    type: "received",
  },
  {
    name: "Dirk",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p1,
    type: "called",
  },
  {
    name: "Jack",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p1,
    type: "missed",
  },

  {
    name: "Stephen",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p2,
    type: "received",
  },
  {
    name: "Solomon",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p3,
    type: "called",
  },
  {
    name: "Ezira",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p4,
    type: "missed",
  },

  {
    name: "Ela Barra",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p5,
    type: "received",
  },
  {
    name: "Ellis",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p6,
    type: "missed",
  },
  {
    name: "Ellis Barra",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p7,
    type: "canceled",
  },
  {
    name: "Stok",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p8,
    type: "called",
  },
  {
    name: "Jack",
    last_seen: "February 15, 2016 at 10:23 PM",
    image: p1,
    type: "called",
  },

  {
    name: "Stephen",
    last_seen: "February 25, 2016 at 00:23 PM",
    image: p2,
    type: "missed",
  },
  {
    name: "Solomon",
    last_seen: "February 1, 2016 at 10:53 AM",
    image: p3,
    type: "missed",
  },
  {
    name: "Ezira",
    last_seen: "January 15, 2016 at 04:23 PM",
    image: p4,
    type: "received",
  },

  {
    name: "Ela Barra",
    last_seen: "March 05, 2016 at 09:34 AM",
    image: p5,
    type: "called",
  },
  {
    name: "Ellis",
    last_seen: "February 25, 2016 at 04:23 PM",
    image: p6,
    type: "missed",
  },
  {
    name: "Ellis Barra",
    last_seen: "February 05, 2015 at 10:23 PM",
    image: p7,
    type: "called",
  },
  {
    name: "Stok",
    last_seen: "June 23, 2016 at 10:23 AM",
    image: p8,
    type: "missed",
  },
  {
    name: "Erik",
    last_seen: "July 05, 2016 at 06:23 AM",
    image: p9,
    type: "received",
  },
  {
    name: "Gtag",
    last_seen: "March 29, 2016 at 10:03 AM",
    image: p10,
    type: "received",
  },
  {
    name: "Dirk",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p1,
    type: "called",
  },
  {
    name: "Jack",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p1,
    type: "missed",
  },

  {
    name: "Stephen",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p2,
    type: "received",
  },
  {
    name: "Solomon",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p3,
    type: "called",
  },
  {
    name: "Ezira",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p4,
    type: "missed",
  },

  {
    name: "Ela Barra",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p5,
    type: "received",
  },
  {
    name: "Ellis",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p6,
    type: "missed",
  },
  {
    name: "Ellis Barra",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p7,
    type: "canceled",
  },
  {
    name: "Stok",
    last_seen: "May 15, 2016 at 05:23 AM",
    image: p8,
    type: "called",
  },
];

export const Calls = ({ displayItemIndex, handleDisplayNone }: Props) => {
  const getCallType = (type: string) => {
    if (type === "received") return <MdCallReceived color="green" />;
    else if (type === "called") return <SlCallOut color="green" />;
    else if (type === "missed") return <MdCallMissed color="red" />;
    else return <FcCallback color="red" />;
  };
  return (
    <Fragment>
      <Overlay display={displayItemIndex == 3} toggleMenu={handleDisplayNone} />
      <div
        className={`calls-container ${
          displayItemIndex !== 3 && "calls-container--hidden"
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
          <button className="btn btn-close" onClick={handleDisplayNone}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
};
