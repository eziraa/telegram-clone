import { FaCamera } from "react-icons/fa";
import { Overlay } from "./Overlay";
import { Fragment } from "react/jsx-runtime";
interface Props {
  displayItemIndex: number;
  handleDisplayNone: () => void;
}
export const CreateGroup = ({ displayItemIndex, handleDisplayNone }: Props) => {
  return (
    <Fragment>
      <Overlay display={displayItemIndex == 1} toggleMenu={handleDisplayNone} />
      <div
        className={`new-group ${displayItemIndex !== 1 && "new-group--hidden"}`}
      >
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
          <button className="btn btn-cancel" onClick={handleDisplayNone}>
            Cancel
          </button>
          <button className="btn btn-next">Next</button>
        </div>
      </div>
    </Fragment>
  );
};
