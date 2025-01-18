import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, product }) => {
    const navigate = useNavigate()
    const handleRedirect = (productId) => {
        if (productId) navigate(`/products/${productId}`)
    }
    return (
        <div onClick={() => handleRedirect(id)} className="max-w-xs border shadow-sm overflow-hidden hover:cursor-pointer">
            {/* Image Section */}
            <div
                className="relative flex items-center justify-center"
                style={{ width: "100%", height: "300px" }} // Fixed size for images
            >
                <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="object-contain w-full h-full" // Ensures the image fits within the container
                />
                {/* Heart Icon */}
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.172 4.172a4.004 4.004 0 015.656 0L12 7.343l3.172-3.171a4.004 4.004 0 115.656 5.656L12 18.828l-8.828-8.829a4.004 4.004 0 010-5.656z"
                        />
                    </svg>
                </button>
            </div>

            {/* Details Section */}
            <div className="p-4">
                {/* Product Name */}
                <h3 className="text-sm font-bold text-gray-800 hover:underline cursor-pointer">
                    {product.name}
                </h3>
                {/* Category */}
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                {/* Price */}
                <p className="text-lg font-semibold text-gray-800 mt-2">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
