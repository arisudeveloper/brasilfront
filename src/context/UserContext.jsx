import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function userAutoLogin() {
      try {
        setError(null);
        setLoading(true);

        const response = await fetch('https://backend-production-fb47e.up.railway.app/api/v1/user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (!response.ok) {
          userAutoLogout();
          return;
        }

        const json = await response.json();
        setLogin(true);
        setData(json);
        navigate('/initial');
      } catch (err) {
        console.error('Erro no auto login:', err);
        setLogin(false);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    userAutoLogin();
  }, []);

  async function userLogin(email, password) {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        'https://backend-production-fb47e.up.railway.app/api/v1/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        },
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Email or password invalid');
        } else {
          throw new Error('Email or password invalid');
        }
      }

      const json = await response.json();
      setLogin(true);
      setData(json);
      navigate('/initial');
    } catch (err) {
      setError('Email or password invalid');
      setLogin(false);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  async function userAutoLogout() {
    setLogin(false);
    setData(null);
    setError(null);
    setLoading(false);
    await fetch('https://backend-production-fb47e.up.railway.app/api/v1/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
  }

  async function userLogout() {
    setLogin(false);
    setData(null);
    setError(null);
    setLoading(false);
    await fetch('https://backend-production-fb47e.up.railway.app/api/v1/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    navigate('/login');
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, loading, login, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
