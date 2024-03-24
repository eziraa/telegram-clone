interface Props {
  text: string;
  handleDisplay: () => void;
}
export const Button = ({ text, handleDisplay }: Props) => {
  return (
    <button className="btn btn-next" onClick={() => handleDisplay()}>
      {text}{" "}
    </button>
  );
};
