import image from "../assets/images/profiles/profile-1.png";
interface Props {
  name: string;
}
export const Account = ({ name }: Props) => {
  return (
    <div className="account" key={name}>
      <div className="account__user">
        <img className="account__user__image" src={image} />
        <p className="account__user__name">{name}</p>
      </div>
      <p className="account__notification-count">2</p>
    </div>
  );
};
