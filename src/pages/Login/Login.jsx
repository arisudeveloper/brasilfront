import React, { useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Languages from '../../components/Languages/Languages';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Login.css';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin, loading, error } = React.useContext(UserContext);
  const errorElement = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    userLogin(email, password);

    e.target[2].disabled = true;

    setTimeout(() => {
      e.target[2].disabled = false;
    }, 3000);

    if (errorElement.current) {
      errorElement.current.style.opacity = 1;
      errorElement.current.innerText = error;
    }
  };

  const { t } = useTranslation('login');

  return (
    <div>
      <Languages />
      <Navbar />
      <section className="register">
        <div>
          {loading ? 'True' : 'False'}
          <form onSubmit={handleSubmit} className="myform">
            <h1>{t('titleLogin')}</h1>
            <h3>{t('subtitleLogin')}</h3>
            <section className="items-form">
              <section className="item1">
                <label>{t('email')}</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>{t('password')}</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p
                  style={{
                    backgroundColor: '#F2DEDE',
                    color: '#D9534F',
                    padding: '10px 0',
                    opacity: 0,
                  }}
                  ref={errorElement}
                ></p>
              </section>

              {loading ? (
                <button type="submit" className="btnRegister">
                  Carregando...
                </button>
              ) : (
                <button type="submit" className="btnRegister">
                  {t('btnLogin')}
                </button>
              )}

              <h5>
                {t('register')}
                <Link to="/register">{t('linkRegister')}</Link>
              </h5>

              <h5>
                {t('forgotTitle')}
                <Link to="/forgot-pass">{t('linkForgot')}</Link>
              </h5>
            </section>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
