import nodemailer from 'nodemailer';
import redisClient from '../config/redisClient.js'; // Use import

// Function to generate a random OTP
export function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
}

// Function to send OTP to user's email
export async function sendOtpEmail(email, otp) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email provider
            auth: {
                user: process.env.EMAIL, // Your email
                pass: process.env.EMAIL_PASSWORD, // Your email password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);
        console.log('OTP sent!', otp);
    } catch (error) {
        console.error('Error sending OTP email:', error.message);
        throw new Error('Failed to send OTP email');
    }
}


// Function to store OTP in Redis with a 5-minute expiry
export function storeOtpInRedis(email, otp) {
    return new Promise(async (resolve, reject) => {
        await redisClient.setEx(email, 300, otp, (err, reply) => {  // Use `setEx` for setting expiry time
            if (err) {
                console.error('Error storing OTP in Redis:', err);
                return reject(new Error('Failed to store OTP in Redis'));
            }
            resolve(reply);
        });
    });
}


// Function to verify OTP
export function verifyOtp(email, otp) {
    return new Promise(async (resolve, reject) => {
        await redisClient.get(email, (err, storedOtp) => {
            if (err) {
                console.error('Redis error:', err);
                return reject(new Error('Internal server error'));
            }

            if (!storedOtp) {
                return reject(new Error('OTP has expired or does not exist'));
            }

            if (storedOtp === otp) {
                // OTP verified successfully
                redisClient.del(email, (delErr) => {
                    if (delErr) {
                        console.error('Failed to delete OTP:', delErr);
                    }
                });
                resolve();
            } else {
                reject(new Error('Invalid OTP'));
            }
        });
    });
}
