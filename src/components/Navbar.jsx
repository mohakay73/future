import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkState = ({ isActive }) => ({
    textDecorationColor: isActive ? '#242525' : undefined,
  });

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={linkState}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accounts-management"
            style={linkState}
          >
            Accounts Management
          </NavLink>
          <ul>
            <li>
              <NavLink
                to="/accounts-management/create-account"
                style={linkState}
              >
                Create Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accounts-management/add-funds"
                style={linkState}
              >
                Add Funds
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accounts-management/transfer-funds"
                style={linkState}
              >
                Transfer Funds
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accounts-management/get-balance"
                style={linkState}
              >
                Get Balance
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
