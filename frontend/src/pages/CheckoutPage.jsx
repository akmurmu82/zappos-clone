import { useState } from "react";
import { PiBagThin } from "react-icons/pi";

const CheckoutPage = ({ cartArr }) => {
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);

    const handleEnterAddressManually = () => {
        setShowAdditionalFields(true);
    };

    const calculateTotalPrice = () => {
        return cartArr
            .reduce((sum, item) => sum + (item.price || 0), 0)
            .toFixed(2);
    };

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-white shadow p-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">Zappos</h1>

                {/* Cart Summary */}
                <div className="flex items-center gap-2">
                    <PiBagThin />
                    <p className="text-sm font-medium">(Items {cartArr.length})</p>
                    <p className="text-sm font-bold">${calculateTotalPrice()}</p>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                    </button>
                </div>
            </header>


            {/* Main Container */}
            <main className="container mx-auto px-24 flex flex-col lg:flex-row gap-6 mt-6">
                {/* Left Section - Shipping Form */}
                <section className="flex-1 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                First and Last Name*
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Search Your Address*
                            </label>
                            <input
                                type="text"
                                placeholder="Search your address"
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={handleEnterAddressManually}
                                className="text-blue-500 text-sm"
                            >
                                Enter Address Manually
                            </button>
                        </div>

                        {/* Conditionally Render Additional Fields */}
                        {showAdditionalFields && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Add Apt, Suite, or Other
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter additional address details"
                                        className="w-full border border-gray-300 rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">City</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your city"
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">State</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your state"
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your zip code"
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1">Phone*</label>
                            <input
                                type="text"
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 rounded p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Add a Free Gift Message
                            </label>
                            <input
                                type="text"
                                placeholder="Add a gift message (optional)"
                                className="w-full border border-gray-300 rounded p-2"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white p-2 rounded mt-4"
                        >
                            Continue to Payment
                        </button>
                    </form>
                </section>

                {/* Right Section - Order Summary */}
                <aside className="bg-blue-50 p-6 rounded-lg shadow w-full lg:w-1/2">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    {cartArr.map((item, index) => (
                        <div className="flex items-center gap-4 mb-4" key={index}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">Color: {item.color}</p>
                                <p className="text-sm text-gray-500">Size: {item.size}</p>
                                <p className="text-sm text-gray-500">Width: {item.width}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-gray-300 pt-4">
                        <div className="flex justify-between mb-2">
                            <p>Subtotal ({cartArr.length} Item{cartArr.length > 1 ? "s" : ""})</p>
                            <p>${calculateTotalPrice()}</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Shipping</p>
                            <p>FREE</p>
                        </div>
                        <div className="flex justify-between font-bold mb-2">
                            <p>Order Total</p>
                            <p>${calculateTotalPrice()}</p>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default CheckoutPage;
