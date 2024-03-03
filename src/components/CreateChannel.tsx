import { FaCamera } from "react-icons/fa";
import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}
export const CreateChannel = ({
  displayItemIndex,
  handleDisplayNone,
}: Props) => {
  return (
    <Fragment>
      <Overlay display={displayItemIndex == 0} toggleMenu={handleDisplayNone} />
      <div
        className={`new-channel ${
          displayItemIndex !== 0 && "new-channel--hidden"
        }`}
      >
        <div className="upper">
          <div className="new-channel__image">
            <FaCamera className="icon" color="white" />
          </div>
          <div className="input-field">
            <label htmlFor="channel-name" className="new-channel__name-label">
              Channel name
            </label>
            <input type="text" className="new-channel__name-input" />
          </div>
        </div>
        <div className="new-channel__description">
          <input
            type="text"
            className="new-channel__description-input"
            placeholder="Description Optional"
          />
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
