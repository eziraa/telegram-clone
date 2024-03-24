import { FaCamera } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import { useDisplayContext } from "../context/context";

export const CreateChannel = () => {
  const display = useDisplayContext();
  return (
    <Fragment>
      <div
        className={`new-channel ${
          display.displayItem !== 0 && "new-channel--hidden"
        }`}
      >
        <div className="upper">
          <div className="new-channel__image">
            <FaCamera className="icon" color="white" />
          </div>
          <div className="input-field">
            <input type="text" className="new-channel__name-input" required />
            <label htmlFor="channel-name" className="new-channel__name-label">
              Channel name
            </label>
          </div>
        </div>
        <div className="new-channel__description input-field">
          <input
            type="text"
            className="new-channel__description-input"
            required
          />
          <label htmlFor="">Description Optional</label>
        </div>
        <div className="lower">
          <button
            className="btn btn-cancel"
            onClick={display.handleDisplayNone}
          >
            Cancel
          </button>
          <button className="btn btn-next">Create</button>
        </div>
      </div>
    </Fragment>
  );
};
