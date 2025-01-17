import express from 'express';
import { registerUser, signInUser } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/register', registerUser);
userRoutes.post('/signin', signInUser);

export default userRoutes;  // Default export of registerUser function
