interface Props {
  name: string;
}
export const Account = ({ name }: Props) => {
  return (
    <div className="account">
      <p className="account__user-name">{name}</p>
      <p className="account__notification-count">2</p>
    </div>
  );
};
