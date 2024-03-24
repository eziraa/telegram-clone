import { useDisplayContext } from "../context/context";
import { AnimatedInput } from "./AnimatedInput";
import { Button } from "./Button";

export const EditUsername = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`edit-username ${
        display.displayItem !== 401 && "edit-username--hidden"
      }`}
    >
      <h3 className="header">Username</h3>
      <AnimatedInput name="username" label_text="User Name" />
      <div className="info">
        <div className="upper">
          <p className="text">
            You can choose a user name on Telegram. If you do, other people will
            be able to find your by this username and contact you without
            knowing your phone number.
          </p>
        </div>
        <div className="lower">
          <p className="text">You can use a-z, 0-9 and underscores.</p>
          <p className="text">Minimum length is 5 characters.</p>
        </div>
      </div>
      <div className="actions">
        <Button
          text="Cancel"
          handleDisplay={() => {
            display.handleDisplay(40);
            display.overlayBringToFront();
          }}
        />
        <Button
          text="Save"
          handleDisplay={() => {
            display.handleDisplay(40);
            display.overlayBringToFront();
          }}
        />
      </div>
    </div>
  );
};
