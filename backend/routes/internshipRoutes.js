import express from 'express';
import {
  addInternship,
  getInternshipsByUser,
  getAllInternships
} from '../Controllers/internshipController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const router = express.Router();

router.post('/', isAuthenticated, addInternship);
router.get('/', isAuthenticated, getInternshipsByUser);
router.get('/all', isAuthenticated, isAdmin, getAllInternships);

export default router;
