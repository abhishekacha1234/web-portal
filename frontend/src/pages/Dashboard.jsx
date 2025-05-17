import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await api.get('/user/me');
      setUser(res.data.user);
    } catch {
      setUser(null);
      navigate('/login'); // redirect to login if not authenticated
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return null; // Render nothing while checking

  return (
    <Container className="mt-4">
      <h2>Welcome back, {user.name}!</h2>
      <p>Your role: <strong>{user.role}</strong></p>

      <Row className="mt-4">
        <Col md={3}>
          <Card
            className="text-center shadow-sm"
            onClick={() => navigate(user.role === 'admin' ? '/view/academic' : '/academic')}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body>Academic</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            className="text-center shadow-sm"
            onClick={() => navigate(user.role === 'admin' ? '/view/internship' : '/internship')}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body>Internship</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            className="text-center shadow-sm"
            onClick={() => navigate(user.role === 'admin' ? '/view/certificate' : '/certificate')}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body>Certificate</Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            className="text-center shadow-sm"
            onClick={() => navigate(user.role === 'admin' ? '/view/skill' : '/skill')}
            style={{ cursor: 'pointer' }}
          >
            <Card.Body>Skill</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
