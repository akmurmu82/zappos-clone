import PropTypes from 'prop-types';
import {
    Sheet,
    SheetContent,
    // SheetDescription,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { PiBagThin } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/redux/features/cartSlice';
import { useNavigate } from 'react-router-dom';


function CartIcon() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const { items, totalAmount } = useSelector((state) => state.cart);
    return (
        <Sheet>
            <SheetTrigger>
                {/* Cart Icon with Badge */}
                <div className="relative">
                    <a href="#" className="text-gray-600 hover:text-black text-3xl">
                        <PiBagThin />
                    </a>
                    {items.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">
                            {items.length}
                        </span>
                    )}
                </div>
            </SheetTrigger>
            <SheetContent>
                {isAuthenticated ? <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <h2 className="text-lg font-semibold">My Bag</h2>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto">
                        {items.map((item) => (
                            <div key={item._id} className="flex gap-4 mb-6 border-b pb-4">
                                <img
                                    src={item.imgSrc}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        Color: {item.color} <br />
                                        Size: {item.size} {item.extraDetails && <><br />{item.extraDetails}</>}
                                    </p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="font-bold">${item.price}</p>
                                    <div className="flex items-center mt-2">
                                        <select
                                            value={item.quantity}
                                            onChange={(e) =>
                                                dispatch(updateQuantity(item._id, e.target.value))
                                            }
                                            className="border border-gray-300 rounded px-2 py-1"
                                        >
                                            {[...Array(10).keys()].map((num) => (
                                                <option key={num + 1} value={num + 1}>
                                                    {num + 1}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            onClick={() => dispatch(removeFromCart(item))}
                                            className="text-red-500 hover:underline ml-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg font-semibold">Bag Subtotal ({items.length} Items)</p>
                            <p className="text-lg font-bold">${totalAmount.toFixed(2)}</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => console.log("wanna see your bag")}
                                className="flex-1 border border-black text-black py-2 rounded hover:bg-gray-100"
                            >
                                View Bag
                            </button>
                            <button
                                onClick={() => navigate("/checkout")}
                                className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div> :
                    // Empty Cart, asking to Sign in
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex flex-col h-full border-b">
                            <h2 className="text-lg font-semibold">My Bag</h2>
                        </div>

                        {/* Empty Cart Message */}
                        <p className="text-center text-sm text-gray-600 mb-6">
                            Nothing to see here yet! Sign in to see items that you've previously placed
                            in your Bag or check out all the awesome things you can buy on Zappos.com!
                        </p>

                        {/* Navigation Links */}
                        <div className="flex space-x-6 mb-6">
                            <a href="#" className="text-sm font-medium text-black hover:underline">
                                Sign In
                            </a>
                            <a href="#" className="text-sm font-medium text-black hover:underline">
                                Home Page
                            </a>
                            <a href="#" className="text-sm font-medium text-black hover:underline">
                                Brand List
                            </a>
                            <a href="#" className="text-sm font-medium text-black hover:underline">
                                Contact Us
                            </a>
                        </div>

                        {/* Placeholder Box Image */}
                        <div className="w-36 h-24 bg-gray-200 mb-6 relative">
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-300"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-100 rotate-45"></div>
                        </div>

                        {/* Sign In Button */}
                        <button onClick={() => navigate("/auth/login")} className="bg-black text-white text-sm font-medium py-2 px-6 rounded hover:bg-gray-800">
                            Sign In
                        </button>
                    </div>
                }
            </SheetContent>
        </Sheet>
    );
}

CartIcon.propTypes = {
    props: PropTypes.any
};

export default CartIcon;