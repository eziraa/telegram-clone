import { FaCamera } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AddMembers } from "./AddMembers";
import { useDisplayContext } from "../context/context";

export const CreateGroup = () => {
  const display = useDisplayContext();
  return (
    <Fragment>
      <AddMembers
        displayItemIndex={display.displayItem}
        handleDisplayNone={display.handleDisplayNone}
      />
      <div
        className={`new-group ${display.displayItem !== 1 && "new-group--hidden"}`}
      >
        <div className="three-dots">
          <BsThreeDotsVertical size={20} />
        </div>
        <div className="upper">
          <div className="new-group__image">
            <FaCamera className="icon" color="white" />
          </div>
          <div className="input-field">
            <input type="text" className="new-group__name-input" required />
            <label htmlFor="group-name" className="new-group__name-label">
              Group name
            </label>
          </div>
        </div>
        <div className="lower">
          <button className="btn btn-cancel" onClick={display.handleDisplayNone}>
            Cancel
          </button>
          <button
            className="btn btn-next"
            onClick={() => {
              display.handleDisplay(10);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
};
