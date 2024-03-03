import image1 from "../assets/images/profiles/profile-1.png";
export const Profile = () => {
  return (
    <div className="profile">
      <img src={image1} alt="" className="profile__image" />
      <p className="profile__user-name">Ezira</p>
      <p className="profile__phone-number">+251 93464242</p>
    </div>
  );
};
