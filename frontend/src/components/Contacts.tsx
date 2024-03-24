import { PiSortAscendingLight } from "react-icons/pi";
import { Fragment } from "react/jsx-runtime";
import { IoSearchOutline } from "react-icons/io5";
import contacts from "../../public/Data/contacts";
import list_of_contacts from "./data/contacts";

import { useDisplayContext } from "../context/context";
const contac = list_of_contacts;

export const Contacts = () => {
  const list_of_contacts = contacts;
  const display = useDisplayContext();
  return (
    <Fragment>
      <div
        className={`contact-container ${
          display.displayItem !== 2 && "contact-container--hidden"
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
          <IoSearchOutline className="icon" />
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
                  <div className="contact__profile">
                    <img
                      src={contac[index % contac.length].image}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="contact__info">
                    <p className="contact__name">
                      {" "}
                      {contact.first_name} {contact.last_name}{" "}
                    </p>
                    <p className="contact__last-seen"> {contact.date} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="contacts__footer">
          <button className="btn btn-add">Add contact</button>
          <button className="btn btn-close" onClick={display.handleDisplayNone}>
            Close
          </button>
        </div>
      </div>
    </Fragment>
  );
};
