// src/pages/Login.jsx
import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import './auth.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: 'user',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await api.post('/user/login', form);
      setLoading(false);
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <Card style={{ maxWidth: '400px', width: '100%' }} className="p-4 shadow-sm">
        <h2 className="mb-4 text-center">Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="role">
            <Form.Select name="role" value={form.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Don't have an account?{' '}
            <Button variant="link" onClick={() => navigate('/register')}>
              Register
            </Button>
          </small>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
