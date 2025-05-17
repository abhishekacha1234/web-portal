// ==== controllers/AcademicController.js ====
import Academic from '../models/Academic.js';

export const addAcademic = async (req, res) => {
  try {
    const academic = new Academic({ ...req.body, userId: req.user.id });
    await academic.save();
    res.status(201).json({ message: 'Academic record added', academic });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add academic record', error });
  }
};

export const getAcademicByUser = async (req, res) => {
  try {
    const academics = await Academic.find({ userId: req.user.id });
    res.json(academics);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch academic data', error });
  }
};

export const getAllAcademics = async (req, res) => {
  try {
    const academics = await Academic.find().populate('userId', 'name email');
    res.json(academics);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch all academic data', error });
  }
};