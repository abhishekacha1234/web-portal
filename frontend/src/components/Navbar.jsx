import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Navbar.css';

const AppNavbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await api.get('/user/me');
      setUser(res.data.user);
    } catch {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    await api.post('/user/logout');
    navigate('/login');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-brand-text" onClick={() => navigate('/dashboard')}>
          🗂️ Web Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user?.role === 'admin' ? (
              <>
                <Nav.Link onClick={() => navigate('/view/academic')}>Academic</Nav.Link>
                <Nav.Link onClick={() => navigate('/view/internship')}>Internship</Nav.Link>
                <Nav.Link onClick={() => navigate('/view/certificate')}>Certificate</Nav.Link>
                <Nav.Link onClick={() => navigate('/view/skill')}>Skill</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => navigate('/academic')}>Academic</Nav.Link>
                <Nav.Link onClick={() => navigate('/internship')}>Internship</Nav.Link>
                <Nav.Link onClick={() => navigate('/certificate')}>Certificate</Nav.Link>
                <Nav.Link onClick={() => navigate('/skill')}>Skill</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            <NavDropdown title={user?.name || 'User'} align="end" className="user-dropdown">
              <NavDropdown.ItemText>
                <strong>Role:</strong> {user?.role}
              </NavDropdown.ItemText>
              <NavDropdown.ItemText>
                <strong>Email:</strong> {user?.email}
              </NavDropdown.ItemText>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
