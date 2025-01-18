import PlaceOrder from "@/components/custom/PlaceOrder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { PiBagThin } from "react-icons/pi";

const CheckoutPage = ({ cartArr }) => {
    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const [paymentOptionVisible, setPaymentOptionVisible] = useState(false);

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
            <Tabs defaultValue={paymentOptionVisible ? "payment" : "checkout"} className="w-full">
                {/* Tabs List (Centered) */}
                <div className="flex justify-center items-center mb-4">
                    <TabsList className="flex gap-4">
                        <TabsTrigger value="checkout">
                            <h2 className="text-lg font-bold">Checkout</h2>
                        </TabsTrigger>
                        <TabsTrigger value="payment">
                            <h3 className="text-lg font-bold">Order Summary</h3>
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="checkout">
                    <main className="container mx-auto px-24 flex flex-col lg:flex-row gap-6 mt-6">

                        {/* Left Section - Shipping Form */}
                        <section className="flex-1 p-6 rounded-lg">
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
                                    onClick={() => setPaymentOptionVisible(!paymentOptionVisible)}
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
                                        src={item.imgSrc}
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
                </TabsContent>
                <TabsContent value="payment">
                    {/* Payment Section */}
                    <main className="container mx-auto px-24 flex flex-col lg:flex-row gap-6 mt-6">
                        <section className="flex-1 p-6 rounded-lg">

                            {/* Card Payment */}
                            <div className="border-b border-gray-300 pb-4">
                                <h3 className="text-lg font-semibold mb-2">Pay with Card</h3>
                                <form className="space-y-4">
                                    {/* Card Number */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Card Number</label>
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full border border-gray-300 rounded p-2"
                                            required
                                        />
                                    </div>

                                    {/* Card Expiration and CVV */}
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium mb-1">
                                                Expiration Date (MM/YY)
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full border border-gray-300 rounded p-2"
                                                required
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium mb-1">CVV</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                className="w-full border border-gray-300 rounded p-2"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Name on Card */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Name on Card</label>
                                        <input
                                            type="text"
                                            placeholder="Enter cardholder's name"
                                            className="w-full border border-gray-300 rounded p-2"
                                            required
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* PayPal */}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full border border-gray-300 rounded p-3 hover:bg-blue-50 mt-3"
                            >
                                <span>Pay with PayPal</span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    alt="PayPal Logo"
                                    className="w-8"
                                />
                            </button>
                        </section>
                        <aside className="bg-blue-50 p-6 rounded-lg shadow w-full lg:w-1/2">
                            {/* Other Payment Methods */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Other Payment Methods</h3>
                                <div className="space-y-4">


                                    {/* UPI Payment */}
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full border border-gray-300 rounded p-3 hover:bg-blue-50"
                                    >
                                        <span>Pay with UPI</span>
                                        <img
                                            src="https://logos-world.net/wp-content/uploads/2020/11/Paytm-Symbol.png"
                                            alt="UPI Logo"
                                            className="w-8"
                                        />
                                    </button>

                                    {/* Cash on Delivery */}
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full border border-gray-300 rounded p-3 hover:bg-blue-50"
                                    >
                                        <span>Cash on Delivery</span>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.ppE6e00FzAF662e98yQKXwHaHa?rs=1&pid=ImgDetMain"
                                            alt="Cash on Delivery Icon"
                                            className="w-8"
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* Billing Address */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Billing Address</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                        />
                                        Same as shipping address
                                    </label>
                                </div>
                                {/* If user wants a different billing address */}
                                {!showAdditionalFields && (
                                    <button
                                        type="button"
                                        onClick={handleEnterAddressManually}
                                        className="text-blue-500 text-sm"
                                    >
                                        Add Billing Address Manually
                                    </button>
                                )}
                            </div>

                            {/* Place Order Button */}
                            <div className="mt-8">
                                {/* <button
                                    type="button"
                                    className="w-full bg-black text-white p-3 rounded text-lg font-semibold hover:bg-gray-800"
                                >
                                    Place Order
                                </button> */}
                                <PlaceOrder orderDetails={[
                                    { name: "Shoes", quantity: 2, price: 50 },
                                    { name: "T-Shirt", quantity: 1, price: 20 },
                                ]} />
                            </div>
                        </aside>

                    </main>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default CheckoutPage;
