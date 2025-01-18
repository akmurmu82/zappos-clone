import React, { useState } from "react";

const AddToBagButton = ({ onAddToBag }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToBag = () => {
        // You could add any other logic here to handle adding the product to the bag.
        setIsAdded(true);
        if (onAddToBag) {
            onAddToBag(); // Notify parent component about the addition
        }
    };

    return (
        <div>
            <button
                onClick={handleAddToBag}
                className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-blue-700"
            >
                {isAdded ? "Added to Bag" : "Add to Bag"}
            </button>
        </div>
    );
};

export default AddToBagButton;
