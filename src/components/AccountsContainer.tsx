import { Account } from "./Account";
import { IoAdd } from "react-icons/io5";

export const AccountsContainer = () => {
  const accounts = ["Ezira", "Sutual"];
  return (
    <div className="account-container">
      {accounts.map((account) => (
        <Account name={account} />
      ))}
      <div className="account" key={"op"}>
        <div className="account__user">
          <div className="account__user__image">
            <IoAdd />
          </div>
          <div className="account__user__name">Add account</div>
        </div>
      </div>
    </div>
  );
};
