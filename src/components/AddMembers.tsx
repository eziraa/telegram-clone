import { Fragment } from "react/jsx-runtime";
import { IoSearchOutline } from "react-icons/io5";
import list_of_contacts from "./data/contacts";

interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}

export const AddMembers = ({ displayItemIndex, handleDisplayNone }: Props) => {
  return (
    <Fragment>
      <div
        className={`contact-container ${
          displayItemIndex !== 10 && "contact-container--hidden"
        }`}
      >
        <div className="contacts__header">
          <p className="contacts__header__text">Add Members 1 / 200000</p>
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
        <div className="lower">
          <button className="btn btn-cancel" onClick={handleDisplayNone}>
            Cancel
          </button>
          <button className="btn btn-next">Create</button>
        </div>
      </div>
    </Fragment>
  );
};
