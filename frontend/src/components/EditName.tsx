import { useDisplayContext } from "../context/context";
import { AnimatedInput } from "./AnimatedInput";
import { Button } from "./Button";

export const EditName = () => {
  const display = useDisplayContext();
  return (
    <div
      className={`edit-name ${
        display.displayItem !== 400 && "edit-name--hidden"
      }`}
    >
      <h3 className="header">Edit your name</h3>
      <AnimatedInput name="first_name" label_text="First Name" />
      <AnimatedInput name="last_name" label_text="Last Name" />

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
