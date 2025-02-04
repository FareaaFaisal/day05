"use client"
import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext"; // Import the useCart hook

// TypeScript type for food items
type FoodItem = {
  name: string;
  price: number;
  description: string;
  category: string;
  available: boolean;
  tags: string[];
  image_url: string;
};

interface AddToCartProps {
  product: FoodItem; // Pass the product as a prop
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart(); // Access the addToCart function from the cart context

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the global cart state
    setAddedToCart(true);

    // Reset the "Added to Cart" message after 2 seconds
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="w-36 text-sm p-3 text-white bg-[#FF9F0D]   hover:bg-red-700"
      >
        Add to Cart
      </button>

      {addedToCart && (
        <p className="text-green-500 mt-4">Item added to cart!</p>
      )}
    </div>
  );
};

export default AddToCart;
