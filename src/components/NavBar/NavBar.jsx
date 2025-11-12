import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, userLogout } = React.useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div translate="no">
      <nav className="navbar">
        <div className="logo">
          BRAZIL <span>SENSATIONS</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/sensations">Sensations</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/iglta">IGLTA</Link>
          {data && data.status !== 'pending' ? (
            <Link to="/initial">Initial</Link>
          ) : (
            ''
          )}
          {!data ? <Link to="/login">Login</Link> : ''}
          {data ? '' : <Link to="/panel-de-clientes">Register</Link>}
          {data ? (
            <Link to="/login" onClick={userLogout} className="logout">
              Logout
            </Link>
          ) : (
            ''
          )}
          {data && data.role === 'admin' ? (
            <Link to="/admin" className="admin">
              Admin
            </Link>
          ) : (
            ''
          )}
        </div>

        <div
          className="hamburger"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        >
          {isOpen ? (
            <CloseIcon style={{ fontSize: 30, color: '#084b71' }} />
          ) : (
            <MenuIcon style={{ fontSize: 30, color: '#084b71' }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
