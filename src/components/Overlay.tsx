interface Props {
  visible: boolean;
  handleDisplayNone: () => void;
}
export const Overlay = ({ visible, handleDisplayNone }: Props) => {
  return (
    <div
      className={`overlay ${!visible && "overlay--hidden"} `}
      onClick={handleDisplayNone}
    ></div>
  );
};
