import { useNavigate, Outlet } from 'react-router-dom';

const AccountsManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="accountsManagement">
      <div className="accounts-container">
        <h2>Accounts Management</h2>
        <button onClick={() => navigate('create-account')}>Create Account</button>
        <button onClick={() => navigate('add-funds')}>Add Funds</button>
        <button onClick={() => navigate('transfer-funds')}>Transfer Funds</button>
        <button onClick={() => navigate('get-balance')}>Get Balance</button>
        <Outlet /> 
      </div>
    </div>
  );
};

export default AccountsManagement;
