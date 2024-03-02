import { Account } from "./Account";

export const AccountsContainer = () => {
  const accounts = ["Ezira", "Sutual"];
  return (
    <div className="account-container">
      {accounts.map((account) => (
        <Account name={account} />
      ))}
    </div>
  );
};
