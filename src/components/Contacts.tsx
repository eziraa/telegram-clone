import { PiSortAscendingLight } from "react-icons/pi";
import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
import { IoSearchOutline } from "react-icons/io5";
import list_of_contacts from "./data/contacts";

interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}

export const Contacts = ({ displayItemIndex, handleDisplayNone }: Props) => {
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
