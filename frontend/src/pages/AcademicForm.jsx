// AcademicForm.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AcademicForm = () => {
  const [form, setForm] = useState({ course: '', institution: '', year: '', percentage: '' });

  useEffect(() => {
    api.get('/academic')
      .then(res => res.data[0] && setForm(res.data[0]))
      .catch(() => {});
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/academic', form);
      alert('Academic data submitted');
    } catch {
      alert('Failed to submit academic data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Academic Info</h2>
      <input name="course" placeholder="Course" value={form.course} onChange={handleChange} required />
      <input name="institution" placeholder="Institution" value={form.institution} onChange={handleChange} required />
      <input name="year" placeholder="Year" value={form.year} onChange={handleChange} required />
      <input name="percentage" placeholder="Percentage" value={form.percentage} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AcademicForm;
