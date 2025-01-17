import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateOtp, sendOtpEmail } from '../util/otpUtil.js';  // Import using 'import'
import redisClient from '../config/redisClient.js';

// Register User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(process.env.EMAIL, process.env.EMAIL_PASSWORD)

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Generate OTP
    const otp = generateOtp();

    // Store OTP in Redis with an expiry of 5 minutes
    await redisClient.set(email, otp, "EX", 300);
    console.log('otp set in redis')

    // Send OTP to the user via email
    await sendOtpEmail(email, otp);

    await user.save();


    // Respond with success
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error("Error:", error);  // Log the error to check what went wrong
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Sign-In User
export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Respond with user details and token
    res.status(200).json({
      message: 'Sign-In successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: 'Error signing in', error: error.message });
  }
};
