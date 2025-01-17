import redisClient from "../config/redisClient.js";
import { generateOtp, sendOtpEmail } from "../util/otpUtil.js";

// Function to verify OTP
export const verifyOtpController = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ error: "Email and OTP are required" });
    }

    try {
        // Retrieve the OTP from Redis
        const storedOtp = await redisClient.get(email, (err, result) => {
            if (err) {
                console.error('Redis error:', err);
                return reject(new Error('Internal server error'));
            }
            resolve(result);
        });
        console.log(storedOtp, otp)

        if (!storedOtp) {
            return res.status(400).json({ error: "OTP has expired or does not exist" });
        }

        if (storedOtp != otp) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        // OTP is valid, delete it from Redis
        await redisClient.del(email, (err) => {
            if (err) {
                console.error('Failed to delete OTP:', err);
                return reject(new Error('Failed to delete OTP'));
            }
            resolve();
        });

        // Respond with success
        res.status(200).json({ message: "OTP verified successfully", success: true });

    } catch (error) {
        console.error("Error verifying OTP:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const sendOtp = async (req, res) => {
    const { email } = req.body;
    console.log(email)

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Generate a new OTP
        const otp = generateOtp(); // Example utility to generate a random OTP

        // Delete the previous OTP from Redis if it exists
        await redisClient.del(email, (err) => {
            if (err) {
                console.error('Failed to delete previous OTP:', err);
                return res.status(500).json({ message: 'Failed to process request' });
            }
        });

        // Store the new OTP in Redis with a 5-minute expiry
        await redisClient.set(email, otp, 'EX', 300);

        // Send the OTP via email
        await sendOtpEmail(email, otp);

        // Respond with success
        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        res.status(500).json({ message: 'Failed to send OTP', error: error.message });
    }
};