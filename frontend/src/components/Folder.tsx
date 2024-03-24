import { FaFolder } from "react-icons/fa";
interface Props {
  active: boolean;
}
export const Folder = ({ active }: Props) => {
  return (
    <div className="icon">
      <FaFolder size={20} className={`${active && "icon--active"}`} />
    </div>
  );
};
