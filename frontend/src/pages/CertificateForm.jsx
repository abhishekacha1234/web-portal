// CertificateForm.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CertificateForm = () => {
  const [form, setForm] = useState({
    name: '', issuingOrganization: '', issueDate: '', credentialId: '', credentialURL: ''
  });

  useEffect(() => {
    api.get('/certificate')
      .then(res => res.data[0] && setForm(res.data[0]))
      .catch(() => {});
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/certificate', form);
      alert('Certificate submitted');
    } catch {
      alert('Failed to submit certificate');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Certificate Info</h2>
      <input name="name" placeholder="Certificate Name" value={form.name} onChange={handleChange} required />
      <input name="issuingOrganization" placeholder="Organization" value={form.issuingOrganization} onChange={handleChange} required />
      <input name="issueDate" type="date" value={form.issueDate} onChange={handleChange} required />
      <input name="credentialId" placeholder="Credential ID" value={form.credentialId} onChange={handleChange} />
      <input name="credentialURL" placeholder="Credential URL" value={form.credentialURL} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CertificateForm;