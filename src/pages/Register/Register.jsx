import React, { useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Languages from '../../components/Languages/Languages';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { t } = useTranslation('register');

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mice, setMice] = useState(false);
  const [fit, setFit] = useState(false);
  const [groups, setGroups] = useState(false);
  const [leisure, setLeisure] = useState(false);
  const [guaranteed, setGuaranteed] = useState(false);
  const [message, setMessage] = useState('');
  const [policy, setPolicy] = useState(false);
  const navigate = useNavigate();
  const elementParagrafo = React.useRef(null);
  const elementEmail = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;
    const phoneRegex = /^[0-9\s\-\+\(\)]{8,20}$/;

    if (!nameRegex.test(firstname)) {
      alert(t('regFName'));
      return;
    }

    if (!nameRegex.test(lastname)) {
      alert(t('regLName'));
      return;
    }

    if (!emailRegex.test(email)) {
      if (elementEmail.current) {
        elementEmail.current.style.border = '2px solid red';
      }
      if (elementParagrafo.current) {
        elementParagrafo.current.innerText = t('regEmail');
      }
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(t('regPass'));
      return;
    }

    if (password !== confirmPass) {
      alert(t('regConfirmPass'));
      return;
    }

    if (phone && !phoneRegex.test(phone)) {
      alert(t('regPhone'));
      return;
    }

    if (whatsapp && !phoneRegex.test(whatsapp)) {
      alert(t('regWhats'));
      return;
    }
    {
      if (!policy) {
        alert('You must accept the terms of use.');
        return;
      }
    }

    const user = {
      firstname,
      lastname,
      email,
      username,
      password,
      company,
      country,
      phone,
      whatsapp,
      mice,
      fit,
      groups,
      leisure,
      guaranteed,
      policy,
    };

    fetch('https://backend-production-fb47e.up.railway.app/api/v1/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const message = data.message;
        if (message === 'Usuario registrado com sucesso.') {
          navigate('/pending');
        }
        alert(message);
      })
      .catch((error) => console.log('Erro: ', error));
  };

  return (
    <div>
      <Languages />
      <Navbar />
      <section className="register">
        <div>
          <form onSubmit={handleSubmit} className="myform">
            {message}
            <h1>{t('titleRegister')}</h1>
            <h3>
              {t('subtitleRegister.part1')}
              <br />
              {t('subtitleRegister.part2')}
            </h3>
            <section className="items-form">
              <section className="item1">
                <label>{t('firstName')}</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />

                <label>{t('lastName')}</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />

                <label>{t('email')}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  ref={elementEmail}
                />
                <p ref={elementParagrafo}></p>

                <label>{t('username')}</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />

                <label>{t('password')}</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <label>{t('password2')}</label>
                <input
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  required
                />

                <label>{t('phone')}</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label>{t('Whatsapp')}</label>
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />

                <label>{t('company')}</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </section>

              <section className="item2">
                <label>{t('country')}</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />

                <label>{t('mice')}</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="mice"
                      checked={mice === true}
                      onChange={() => setMice(true)}
                    />
                    {t('yes')}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="mice"
                      checked={mice === false}
                      onChange={() => setMice(false)}
                    />
                    {t('no')}
                  </label>
                </div>

                <label>{t('fit')}</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="fit"
                      checked={fit === true}
                      onChange={() => setFit(true)}
                    />
                    {t('yes')}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="fit"
                      checked={fit === false}
                      onChange={() => setFit(false)}
                    />
                    {t('no')}
                  </label>
                </div>

                <label>{t('groups')}</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="groups"
                      checked={groups === true}
                      onChange={() => setGroups(true)}
                    />
                    {t('yes')}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="group"
                      checked={groups === false}
                      onChange={() => setGroups(false)}
                    />
                    {t('no')}
                  </label>
                </div>

                <label>{t('guaranteed')}</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="guaranteed"
                      checked={guaranteed === true}
                      onChange={() => setGuaranteed(true)}
                    />{' '}
                    {t('yes')}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="guaranteed"
                      checked={guaranteed === false}
                      onChange={() => setGuaranteed(false)}
                    />
                    {t('no')}
                  </label>
                </div>

                <label>{t('leisure')}</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="leisure"
                      checked={leisure === true}
                      onChange={() => setLeisure(true)}
                    />
                    {t('yes')}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="leisure"
                      checked={leisure === false}
                      onChange={() => setLeisure(false)}
                    />
                    {t('no')}
                  </label>
                </div>
              </section>

              <div className="check">
                <label>
                  <input type="checkbox" onChange={(e) => setPolicy(true)} />
                  <span>I accept the privacy policies.</span>
                </label>
              </div>

              <button type="submit" className="btnRegister">
                {t('btnRegister')}
              </button>
            </section>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
