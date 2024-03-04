import { PiSortAscendingLight } from "react-icons/pi";
import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
import { IoSearchOutline } from "react-icons/io5";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}

const list_of_contacts = [
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "94859892528",
  "948598925",
  "948598925",
  "9485989354",
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
                <div className="contact">
                  <div
                    className="contact__profile"
                    style={{
                      backgroundColor: colors[index],
                    }}
                  >
                    {contact[index]}
                  </div>
                  <div className="contact__info">{contact}</div>
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
