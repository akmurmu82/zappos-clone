import { PiBagThin, PiSignOutThin, PiUserCircleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link } from "react-router-dom";
import { logout } from "@/redux/features/userSlice";
import { clearCart } from "@/redux/features/cartSlice";


const Navbar = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearCart())
  }

  return (
    <header className="bg-white border-b">
      {/* Top announcement */}
      <div className="bg-blue-100 text-center py-2 text-sm text-gray-700">
        <span>Top 10 Shoes You Need for 2025</span>{" "}
        <a href="#" className="text-blue-600 underline">
          Shop The Guiborder de
        </a>
      </div>

      {/* Main navigation */}
      <nav className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-4">
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

        {/* Center - Search bar */}
        <div className="flex-1 mx-4 hidden md:block"> {/* Hidden on small screens */}
          <div className="flex border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search for shoes, clothes, etc."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="px-4 py-2 font-semibold text-lg hover:text-blue-800">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6 font-bold text-lg">
          {/* User Icon */}
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center cursor-pointer">
                <PiUserCircleThin className="text-gray-600 hover:text-black text-3xl" />
                <span className="text-sm ml-2">{isAuthenticated ? userInfo.name.split(" ")[0] : "Sign in!"}</span>
              </div>
            </PopoverTrigger>
            <PopoverContent width="100px" boxShadow="lg" borderRadius="md">

              {isAuthenticated ? (
                <>
                  <Link to="/vip-signup" className="border border-transparent p-1 hover:border-blue-400 block text-sm hover:text-blue-600">
                    Sign up for Zappos VIP
                  </Link>
                  <Link to="/account-overview" className="border border-transparent p-1 hover:border-blue-400 block text-sm hover:text-blue-600">
                    Account Overview
                  </Link>
                  <Link to="/orders-returns" className="border border-transparent p-1 hover:border-blue-400 block text-sm hover:text-blue-600">
                    View Orders/Return
                  </Link>
                  <button
                    onClick={() => handleLogout()} // Replace with your sign-out logic
                    className="w-full text-left text-sm hover:text-blue-600 flex items-center border border-transparent p-1 hover:border-blue-400"
                  >
                    Sign Out <PiSignOutThin className="ml-2" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/auth/register" className="border border-transparent p-1 hover:border-blue-400 block text-sm hover:text-blue-600">
                    Sign in / Register
                  </Link>
                  <Link to="/auth/login" className="border border-transparent p-1 hover:border-blue-400 block text-sm hover:text-blue-600">
                    Log in
                  </Link>
                </>
              )}
            </PopoverContent>
          </Popover>


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
        </div>
      </nav>

      {/* Bottom navigation */}
      <div className="bg-white flex flex-wrap items-start justify-between px-4 sm:px-6 py-2 font-bold text-sm sm:text-md">
        <div className="flex flex-wrap space-4 sm:space-x-8 text-black">
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            New
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Women
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Men
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Kids
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Brands
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Collections
          </a>
          <a
            href="#"
            className="text-red-600 hover:text-red-800 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Sale
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
          >
            Activities
          </a>
        </div>
        <a
          href="#"
          className="mt-2 sm:mt-0 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
        >
          Help & Support
        </a>
      </div>

      {/* Mobile - Search bar */}
      <div className="block md:hidden px-4 py-2">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search for shoes, clothes, etc."
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="px-4 py-2 font-semibold text-lg hover:text-blue-800">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
