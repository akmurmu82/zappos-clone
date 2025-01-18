import AddToBagButton from "@/components/ui/custom/AddToBagButton";
import ProductSizeSelector from "@/components/ui/custom/ProductSizeSelector";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/ui/Navbar';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/products/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-full md:w-1/2">
                        <img
                            src={product.imgSrc}
                            alt={product.name}
                            className="w-full h-auto object-cover md:h-full rounded-lg"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="flex-1 space-y-2">
                        {/* Product Title */}
                        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                        <p className="text-sm font-semibold text-gray-500">{product.category}</p>


                        {/* Price */}
                        <p className="text-xl font-semibold text-gray-900">{`$${product.price}`}</p>
                        <p className="text-sm text-gray-500">
                            or 4 payments of ${(product.price / 4).toFixed(2)} with{" "}
                            <span className="font-semibold">Afterpay</span>
                        </p>

                        {/* Color Selector */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Color: {product.color || "N/A"}</h3>
                            <div className="flex gap-2">
                                <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-400"></div>
                                <div className="w-8 h-8 bg-red-700 rounded-full border-2 border-gray-400"></div>
                                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-gray-400"></div>
                            </div>
                        </div>

                        {/* Size Selector */}
                        <ProductSizeSelector />

                        {/* Add to Bag Button */}
                        <AddToBagButton />

                        {/* Product Information */}
                        <div className="mt-4">
                            <h4 className="text-lg font-bold">Product Information</h4>
                            <ul className="text-sm text-gray-700 space-y-2 mt-2">
                                <li>The primary materials used in this product contain a minimum of 20% recycled content.</li>
                                <li>{product.description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
