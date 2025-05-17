// src/pages/Register.jsx
import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import './auth.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
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
      await api.post('/user/register', form);
      setLoading(false);
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <Card style={{ maxWidth: '450px', width: '100%' }} className="p-4 shadow-sm">
        <h2 className="mb-4 text-center">Register</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="username">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
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
              minLength={6}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Enter 10 digit phone number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="role">
            <Form.Select name="role" value={form.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Already have an account?{' '}
            <Button variant="link" onClick={() => navigate('/login')}>
              Login
            </Button>
          </small>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
