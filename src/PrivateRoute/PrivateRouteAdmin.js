import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function PrivateRouteAdmin({ children }) {
  const { data } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!data) {
      navigate('/login');
    } else if (data.role !== 'admin') {
      navigate('/initial');
    }
  }, [data, navigate]);

  if (data && data.role === 'admin') {
    return children;
  }

  return null;
}
