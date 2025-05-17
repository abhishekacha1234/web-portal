import { Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    api.get('/user/me')
      .then(() => setAuth(true))
      .catch(() => setAuth(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
