import { setUser } from "@/redux/features/userSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const SignIn = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // Initialize navigate for redirection

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        const { email, password } = formData;

        // Validate inputs
        if (!email || !password) {
            setError("All fields are required.");
            setLoading(false); // Stop loading
            return;
        }

        try {
            setLoading(true); // Show loading state
            const response = await axios.post(`${backendUrl}/api/users/signin`, {
                email,
                password,
            });

            // If the request is successful
            setSuccess("Sign-in successful!");
            setLoading(false);
            console.log(response.data); // Log the response data
            dispatch(setUser(response.data.user))
            navigate("/"); // Redirect to dashboard or appropriate page
        } catch (error) {
            // Handle errors
            if (error.response) {
                // Server responded with a status other than 2xx
                setError(error.response.data.message || "Invalid credentials. Please try again.");
            } else {
                // Network error or other issues
                setError("An error occurred. Please try again.");
            }
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {/* Left - Logo */}
            <div className="flex items-center space-x-4">
                <a href="/" className="flex items-center">
                    <img
                        src="https://m.media-amazon.com/images/G/01/Zappos/zapposlogo2025/Finallogo/zappos-logo-2025-header.svg"
                        alt="Zappos Logo"
                        className="h-10" // Adjusted for smaller screens
                    />
                </a>
            </div>
            <div className="border border-gray-300 rounded-lg shadow-sm bg-white px-6 py-8 w-96">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">Sign-In</h1>
                {/* Email Field */}
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    {/* Password Field */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <a
                                href="#"
                                className="text-sm text-blue-500 hover:text-blue-700"
                            >
                                Forgot password?
                            </a>
                        </div>
                        <input
                            onChange={handleChange}
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    {/* Success Message */}
                    {success && <p className="text-green-500 text-sm mb-4">{success}</p>}


                    {/* Sign-In Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                    {/* Keep Me Signed In */}
                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            id="keep-signed-in"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="keep-signed-in"
                            className="ml-2 block text-sm text-gray-700"
                        >
                            Keep me signed in.
                        </label>
                        <a
                            href="#"
                            className="ml-auto text-sm text-gray-500 hover:text-gray-700"
                        >
                            Details
                        </a>
                    </div>
                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <span className="px-2 text-sm text-gray-500">New to Zappos?</span>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>
                    {/* Create Account Button */}
                    <button
                        type="button"
                        onClick={() => navigate("/auth/register")}
                        className="w-full border border-blue-900 text-blue-900 hover:bg-blue-100 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Create your Zappos account
                    </button>
                </form>
            </div>
        </div>

    );
};

export default SignIn;
