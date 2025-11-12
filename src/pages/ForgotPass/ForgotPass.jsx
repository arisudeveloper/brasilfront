import React, { useState } from 'react';
import './Pass.css';
import { Link } from 'react-router-dom';
import Languages from '../../components/Languages/Languages';
import NavBar from '../../components/NavBar/NavBar';
import { useTranslation } from 'react-i18next';

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const emailElement = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert(t('regEmail'));
      return;
    }

    fetch('https://backend-production-fb47e.up.railway.app/api/v1/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).then((response) => {
      if (response.ok) {
        if (emailElement.current) {
          emailElement.current.style.opacity = 1;
          emailElement.current.innerText = 'Email sent successfully.';
        }
      }
    });
  };

  const { t } = useTranslation('forgotreset');
  return (
    <>
      <Languages />
      <NavBar></NavBar>
      <div className="passContainer">
        <form className="messagePass" onSubmit={handleSubmit}>
          <label>{t('titleForgot')}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            ref={emailElement}
          ></p>
        </form>
      </div>
    </>
  );
};

export default ForgotPass;
