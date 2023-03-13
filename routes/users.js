import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { createUser, deleteUser, getAllUsers, getUser, loginUser, updateUser } from './../controllers/userController.js';

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/me').get(protect, getUser).patch(protect, updateUser).delete(protect, deleteUser);
router.route('/login').post(loginUser);

export default router;