// ==== controllers/SkillController.js ====
import Skill from '../models/Skill.js';

export const addSkill = async (req, res) => {
  try {
    const skill = new Skill({ ...req.body, userId: req.user.id });
    await skill.save();
    res.status(201).json({ message: 'Skill added', skill });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add skill', error });
  }
};

export const getSkillsByUser = async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.user.id });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch skills', error });
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate('userId', 'name email');
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch all skills', error });
  }
};