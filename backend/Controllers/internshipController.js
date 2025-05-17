// ==== controllers/InternshipController.js ====
import Internship from '../models/Internship.js';

export const addInternship = async (req, res) => {
  try {
    const internship = new Internship({ ...req.body, userId: req.user.id });
    await internship.save();
    res.status(201).json({ message: 'Internship added', internship });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add internship', error });
  }
};

export const getInternshipsByUser = async (req, res) => {
  try {
    const internships = await Internship.find({ userId: req.user.id });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch internships', error });
  }
};

export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find().populate('userId', 'name email');
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch all internships', error });
  }
};