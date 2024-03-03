import { FaCamera } from "react-icons/fa";

export const CreateGroup = () => {
  return (
    <div className="new-group">
      <div className="upper">
        <div className="new-group__image">
          <FaCamera className="icon" color="white" />
        </div>
        <div className="input-field">
          <label htmlFor="group-name" className="new-group__name-label">
            Group name
          </label>
          <input type="text" className="new-group__name-input" />
        </div>
      </div>
      <div className="lower">
        <button className="btn btn-cancel">Cancel</button>
        <button className="btn btn-next">Next</button>
      </div>
    </div>
  );
};
