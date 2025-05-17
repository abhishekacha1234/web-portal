// ViewInternship.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table } from 'react-bootstrap';

const ViewInternship = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get('/internship/all')
      .then(res => setRecords(res.data))
      .catch(() => alert('Failed to fetch internship data'));
  }, []);

  return (
    <Container className="mt-4">
      <h3>All Internship Records</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Company</th>
            <th>Role</th>
            <th>Duration</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, i) => (
            <tr key={i}>
              <td>{rec.userId?.name || 'Unknown'}</td>
              <td>{rec.company}</td>
              <td>{rec.role}</td>
              <td>{rec.duration}</td>
              <td>{rec.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewInternship;