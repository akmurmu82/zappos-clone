import { useState } from "react";

const ProductSizeSelector = ({ sizes = [4, 5, 6, 7, 8, 9, 10] }) => {
    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">Size</h3>
            <select
                value={selectedSize}
                onChange={handleSizeChange}
                className="w-full p-2 border rounded-md border-gray-300"
            >
                <option value="" disabled>Select Size</option>
                {sizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductSizeSelector;
