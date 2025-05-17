// InternshipForm.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const InternshipForm = () => {
  const [form, setForm] = useState({ company: '', role: '', duration: '', description: '' });

  useEffect(() => {
    api.get('/internship')
      .then(res => res.data[0] && setForm(res.data[0]))
      .catch(() => {});
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/internship', form);
      alert('Internship data submitted');
    } catch {
      alert('Failed to submit internship data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Internship Info</h2>
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
      <input name="duration" placeholder="Duration" value={form.duration} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InternshipForm;
