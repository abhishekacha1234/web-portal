// ViewSkill.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table } from 'react-bootstrap';

const ViewSkill = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get('/skill/all')
      .then(res => setRecords(res.data))
      .catch(() => alert('Failed to fetch skill data'));
  }, []);

  return (
    <Container className="mt-4">
      <h3>All Skill Records</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Skill</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, i) => (
            <tr key={i}>
              <td>{rec.userId?.name || 'Unknown'}</td>
              <td>{rec.skillName}</td>
              <td>{rec.proficiencyLevel}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewSkill;
