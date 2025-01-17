import express from 'express';
import { sendOtp, verifyOtpController } from '../controllers/otpController.js';

const otpRoutes = express.Router();

otpRoutes.post('/verify-otp', verifyOtpController);
otpRoutes.post('/resend-otp', sendOtp);

export default otpRoutes;
