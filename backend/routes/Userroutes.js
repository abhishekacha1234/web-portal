import express from 'express';
import { registerUser, loginUser, logoutUser, getMe } from '../Controllers/UserController.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me', isAuthenticated, getMe);

export default router;
