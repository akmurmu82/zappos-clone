import { useState } from "react";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const response = await axios.post(
                `${backendUrl}/api/otp/verify-otp`,
                { email: "akmurmu6580@gmail.com", otp }
            );

            navigate("/")

            // Assuming the response contains a success message
            setMessage(response.data.message || "OTP verified successfully!");

        } catch (err) {
            // Handle errors
            setError(err.response?.data?.error || "Failed to verify OTP.");
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        try {
            // Show a loading indicator while processing
            setOtpSent(true)

            // Make the API call to resend OTP
            const response = await axios.post(`${backendUrl}/api/otp/resend-otp`, {
                email: 'akmurmu6580@gmail.com', // Replace `email` with the appropriate state or prop holding the user's email
            });

            // Check the response and show success message
            if (response.status === 200) {
                alert('OTP has been resent to your email.');
                setOtpSent(true)
            }
        } catch (error) {
            // Handle errors from the API or network issues
            const errorMessage =
                error.response?.data?.message || 'Failed to resend OTP. Please try again.';
            alert(error);
        } finally {
            // Hide the loading indicator
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Verify email address
                </h1>
                <p className="text-sm text-gray-700 mb-6 text-center">
                    To verify your email, we&apos;ve sent a One Time Password (OTP) to
                    <span className="font-medium"> akmurmu6580@gmail.com </span>
                    <a href="/auth/register" className="text-indigo-600 hover:underline">(Change)</a>
                </p>

                <form onSubmit={handleOtpSubmit}>
                    {/* OTP Input Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="otp"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Enter OTP
                        </label>
                        <input
                            type="text"
                            id="otp"
                            placeholder="Enter OTP"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Verifying..." : "Create your Zappos account"}
                        </button>
                    </div>
                </form>

                {/* Message Section */}
                {message && (
                    <div className="mt-4 text-green-600 text-sm text-center">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="mt-4 text-red-600 text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Resend OTP Section */}
                <div className="text-sm text-gray-700 mt-6">
                    <p>
                        Need additional help? Don’t worry! You can reach us via phone, text,
                        or live chat. See
                        <a href="#" className="text-indigo-600 hover:underline">
                            {" "}
                            here
                        </a>{" "}
                        for contact details.
                    </p>
                    <p className="mt-4 text-center">
                        <span onClick={handleResendOtp} className="text-indigo-600 cursor-pointer hover:underline">
                            {otpSent ? "OTP sent!" : "Resend OTP"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
