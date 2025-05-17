// SkillForm.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const SkillForm = () => {
  const [form, setForm] = useState({ skillName: '', proficiencyLevel: 'Beginner' });

  useEffect(() => {
    api.get('/skill')
      .then(res => res.data[0] && setForm(res.data[0]))
      .catch(() => {});
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/skill', form);
      alert('Skill submitted');
    } catch {
      alert('Failed to submit skill');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Skill Info</h2>
      <input name="skillName" placeholder="Skill Name" value={form.skillName} onChange={handleChange} required />
      <select name="proficiencyLevel" value={form.proficiencyLevel} onChange={handleChange}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SkillForm;