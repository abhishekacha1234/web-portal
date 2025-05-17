// ==== controllers/CertificateController.js ====
import Certificate from '../models/Certificate.js';

export const addCertificate = async (req, res) => {
  try {
    const certificate = new Certificate({ ...req.body, userId: req.user.id });
    await certificate.save();
    res.status(201).json({ message: 'Certificate added', certificate });
  } catch (error) {
    res.status(400).json({ message: 'Failed to add certificate', error });
  }
};

export const getCertificatesByUser = async (req, res) => {
  try {
    const certificates = await Certificate.find({ userId: req.user.id });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch certificates', error });
  }
};

export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().populate('userId', 'name email');
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch all certificates', error });
  }
};
