import { PiSortAscendingLight } from "react-icons/pi";
import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
import { IoSearchOutline } from "react-icons/io5";

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
import p11 from "../assets/images/p11.jpg";
import p12 from "../assets/images/p12.jpg";
import p13 from "../assets/images/p13.jpg";
import p14 from "../assets/images/p14.jpg";
import p15 from "../assets/images/p15.jpg";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}

const list_of_contacts = [
  {
    name: "Jack",
    last_seen: "Last seen 3 minutes ago",
    image: p1,
  },

  {
    name: "Stephen",
    last_seen: "Last seen 23 minutes ago",
    image: p2,
  },
  {
    name: "Solomon",
    last_seen: "Last seen 10 minutes ago",
    image: p3,
  },
  {
    name: "Ezira",
    last_seen: "Last seen 2 minutes ago",
    image: p4,
  },

  {
    name: "Ela Barra",
    last_seen: "Last seen 3 hour ago",
    image: p5,
  },
  {
    name: "Ellis",
    last_seen: "Last seen 1 hour ago",
    image: p6,
  },
  {
    name: "Ellis Barra",
    last_seen: "Last seen 3 days ago",
    image: p7,
  },
  {
    name: "Stok",
    last_seen: "Last seen with in a week",
    image: p8,
  },
  {
    name: "Erik",
    last_seen: "Last seen with in a month",
    image: p9,
  },
  {
    name: "Gtag",
    last_seen: "Last seen 3 minutes ago",
    image: p10,
  },
  {
    name: "Dirk",
    last_seen: "Last seen 13 minutes ago",
    image: p1,
  },
  {
    name: "Jack",
    last_seen: "Last seen 3 minutes ago",
    image: p1,
  },

  {
    name: "Stephen",
    last_seen: "Last seen 23 minutes ago",
    image: p2,
  },
  {
    name: "Solomon",
    last_seen: "Last seen 10 minutes ago",
    image: p3,
  },
  {
    name: "Ezira",
    last_seen: "Last seen 2 minutes ago",
    image: p4,
  },

  {
    name: "Ela Barra",
    last_seen: "Last seen 3 hour ago",
    image: p5,
  },
  {
    name: "Ellis",
    last_seen: "Last seen 1 hour ago",
    image: p6,
  },
  {
    name: "Ellis Barra",
    last_seen: "Last seen 3 days ago",
    image: p7,
  },
  {
    name: "Stok",
    last_seen: "Last seen with in a week",
    image: p8,
  },
  {
    name: "Erik",
    last_seen: "Last seen with in a month",
    image: p9,
  },
  {
    name: "Gtag",
    last_seen: "Last seen 3 minutes ago",
    image: p10,
  },
  {
    name: "Dirk",
    last_seen: "Last seen 13 minutes ago",
    image: p1,
  },
  {
    name: "Jack",
    last_seen: "Last seen 3 minutes ago",
    image: p1,
  },

  {
    name: "Stephen",
    last_seen: "Last seen 23 minutes ago",
    image: p2,
  },
  {
    name: "Solomon",
    last_seen: "Last seen 10 minutes ago",
    image: p3,
  },
  {
    name: "Ezira",
    last_seen: "Last seen 2 minutes ago",
    image: p4,
  },

  {
    name: "Ela Barra",
    last_seen: "Last seen 3 hour ago",
    image: p5,
  },
  {
    name: "Ellis",
    last_seen: "Last seen 1 hour ago",
    image: p6,
  },
  {
    name: "Ellis Barra",
    last_seen: "Last seen 3 days ago",
    image: p7,
  },
  {
    name: "Stok",
    last_seen: "Last seen with in a week",
    image: p8,
  },
  {
    name: "Erik",
    last_seen: "Last seen with in a month",
    image: p9,
  },
  {
    name: "Gtag",
    last_seen: "Last seen 3 minutes ago",
    image: p10,
  },
  {
    name: "Dirk",
    last_seen: "Last seen 13 minutes ago",
    image: p1,
  },
];
export const Contacts = ({ displayItemIndex, handleDisplayNone }: Props) => {
  const colors = [
    "#0ff000",
    "#928524",
    "#98aa45",
    "#98aaf5",
    "#f8aa45",
    "#abb78e",
    "#ee845a",
    "#ee4583",
    "#eeb583",
    "#ee4583",
    "#ee45f3",
    "#fe0f03",
    "#0040f0",
    "#febf03",
    "#f980f0",
  ];
  return (
    <Fragment>
      <Overlay display={displayItemIndex == 2} toggleMenu={handleDisplayNone} />
      <div
        className={`contact-container ${
          displayItemIndex !== 2 && "contact-container--hidden"
        }`}
      >
        <div
          className="three-dots"
          style={{
            top: "2%",
          }}
        >
          <PiSortAscendingLight size={20} />
        </div>
        <div className="contacts__header">
          <p className="contacts__header__text">Contacts</p>
        </div>
        <div className="search">
          <IoSearchOutline size={15} />
          <input
            type="text"
            className="search-input"
            placeholder="Search Contacts"
          />
        </div>
        <div className="scroll-container">
          <div className="contacts__list">
            {list_of_contacts.map((contact, index) => {
              return (
                <div className="contact" key={index}>
                  <div
                    className="contact__profile"
                    // style={{
                    //   backgroundColor: colors[index],
                    // }}
                  >
                    <img src={contact.image} alt="" className="image" />
                  </div>
                  <div className="contact__info">
                    <p className="contact__name"> {contact.name} </p>
                    <p className="contact__last-seen"> {contact.last_seen} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contacts__footer">
          <button className="btn btn-add">Add contact</button>
          <button className="btn btn-close" onClick={handleDisplayNone}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
};
