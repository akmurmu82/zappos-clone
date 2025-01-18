import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const PlaceOrder = ({ orderDetails }) => {
    const navigate = useNavigate();

    const handleGoToHome = () => {
        navigate("/");
    };

    return (
        <Dialog>
            <DialogTrigger className="w-full bg-black text-white p-2 rounded mt-4">Place Order</DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Order Summary</DialogTitle>
                    <DialogDescription>
                        Here’s the summary of your order. Thank you for shopping with us!
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    {/* Order Details */}
                    <div>
                        <h3 className="text-lg font-semibold">Order Details</h3>
                        {orderDetails.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b pb-2 mb-2">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <p className="text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    {/* Total Amount */}
                    <div className="flex justify-between font-bold text-lg">
                        <p>Total Amount</p>
                        <p>
                            $
                            {orderDetails
                                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                                .toFixed(2)}
                        </p>
                    </div>
                </div>

                {/* Go To Home Button */}
                <div className="mt-6">
                    <button
                        onClick={handleGoToHome}
                        className="w-full bg-black text-white p-2 rounded mt-4"
                    >
                        Go To Home
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PlaceOrder;
