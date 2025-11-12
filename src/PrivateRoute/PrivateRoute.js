import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function PrivateRoute({ children }) {
  const { data } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!data) {
      navigate('/login');
    } else if (data.status !== 'approved') {
      navigate('/pending');
    }
  }, [data, navigate]);

  if (data && data.status === 'approved') {
    return children;
  }

  return null;
}
