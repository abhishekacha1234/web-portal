// ViewAcademic.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table } from 'react-bootstrap';

const ViewAcademic = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get('/academic/all')
      .then(res => setRecords(res.data))
      .catch(() => alert('Failed to fetch academic data'));
  }, []);

  return (
    <Container className="mt-4">
      <h3>All Academic Records</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Course</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, i) => (
            <tr key={i}>
              <td>{rec.userId?.name || 'Unknown'}</td>
              <td>{rec.course}</td>
              <td>{rec.institution}</td>
              <td>{rec.year}</td>
              <td>{rec.percentage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewAcademic;