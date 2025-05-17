
// ViewCertificate.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Table } from 'react-bootstrap';

const ViewCertificate = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.get('/certificate/all')
      .then(res => setRecords(res.data))
      .catch(() => alert('Failed to fetch certificate data'));
  }, []);

  return (
    <Container className="mt-4">
      <h3>All Certificate Records</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Name</th>
            <th>Organization</th>
            <th>Issue Date</th>
            <th>Credential ID</th>
            <th>Credential URL</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, i) => (
            <tr key={i}>
              <td>{rec.userId?.name || 'Unknown'}</td>
              <td>{rec.name}</td>
              <td>{rec.issuingOrganization}</td>
              <td>{rec.issueDate}</td>
              <td>{rec.credentialId}</td>
              <td><a href={rec.credentialURL} target="_blank" rel="noopener noreferrer">Link</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewCertificate;
