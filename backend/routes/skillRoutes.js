import express from 'express';
import {
  addSkill,
  getSkillsByUser,
  getAllSkills
} from '../Controllers/skillController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const router = express.Router();

router.post('/', isAuthenticated, addSkill);
router.get('/', isAuthenticated, getSkillsByUser);
router.get('/all', isAuthenticated, isAdmin, getAllSkills);

export default router;
