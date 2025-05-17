import express from 'express';
import { addAcademic, getAcademicByUser, getAllAcademics } from '../Controllers/academicController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const router = express.Router();

router.post('/', isAuthenticated, addAcademic);
router.get('/', isAuthenticated, getAcademicByUser);
router.get('/all', isAuthenticated, isAdmin, getAllAcademics);

export default router;
