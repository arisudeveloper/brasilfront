import React, { useState } from 'react';
import './DeleteAccount.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const DeleteAccount = () => {
  const [email, setEmail] = React.useState();
  const { data, userLogout } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Enter a valid email address.');
      return;
    }

    if (email === data.email) {
      fetch('http://localhost:3000/api/v1/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email }),
      }).then((response) => {
        if (response.ok) {
          userLogout();
        }
      });
    }
  }

  const [toggle, setToggle] = useState(false);

  return (
    <div className="deleteButton">
      <ul>
        <li>
          <Link className="pulse-icon" onClick={() => setToggle(!toggle)}>
            <SettingsIcon sx={{ color: 'white' }} />
          </Link>
        </li>
        {toggle ? (
          <form onSubmit={handleSubmit}>
            <h3>Do you want to delete your account?</h3>
            <label htmlFor="email" id="labelDelete">
              Email:
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button>Delete account</button>
          </form>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default DeleteAccount;
