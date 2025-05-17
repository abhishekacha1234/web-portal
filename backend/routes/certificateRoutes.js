import express from 'express';
import {
  addCertificate,
  getCertificatesByUser,
  getAllCertificates
} from '../Controllers/certificateController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const router = express.Router();

router.post('/', isAuthenticated, addCertificate);
router.get('/', isAuthenticated, getCertificatesByUser);
router.get('/all', isAuthenticated, isAdmin, getAllCertificates);

export default router;
