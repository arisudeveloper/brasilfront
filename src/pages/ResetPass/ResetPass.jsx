import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Languages from '../../components/Languages/Languages';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const ResetPass = () => {
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');
  const { token } = useParams();
  const passwordElement = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

    if (!passwordRegex.test(newPass)) {
      alert(t('regPass'));
      return;
    }

    if (newPass !== confirmNewPass) {
      alert(t('regConfirmPass'));
      return;
    }

    fetch('https://backend-production-fb47e.up.railway.app/api/v1/reset-password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ newpassword: newPass }),
    }).then((response) => {
      if (response.ok) {
        if (passwordElement.current) {
          passwordElement.current.style.opacity = 1;
          passwordElement.current.innerText = 'Password changed succesfully';
        }
      }
    });
  };

  const { t } = useTranslation('forgotreset');
  return (
    <>
      <Languages />
      <Navbar></Navbar>
      <div className="passContainer">
        <form className="messagePass" onSubmit={handleSubmit}>
          <label>{t('titleReset')}</label>
          <input
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          <label>{t('confirmPass')}</label>
          <input
            type="password"
            value={confirmNewPass}
            onChange={(e) => setConfirmNewPass(e.target.value)}
          />
          <button type="submit" className="buttonPass">
            {t('confirm')}
          </button>
          <p
            style={{
              backgroundColor: '#F2DEDE',
              color: 'green',
              padding: '10px 0',
              opacity: 0,
            }}
            ref={passwordElement}
          ></p>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ResetPass;
