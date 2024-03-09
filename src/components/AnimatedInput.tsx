interface Props {
  name: string;
  label_text: string;
}
export const AnimatedInput = ({ name, label_text }: Props) => {
  return (
    <div className="last-name input-field">
      <input name={name} type="text" className="last-name-input" required />
      <label htmlFor={name}> {label_text} </label>
    </div>
  );
};
