"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext"; // Import useCart hook
import Link from "next/link";
import Image from "next/image";
import CheckoutWrapper from "../components/CheckoutWrapper"; // Import CheckoutWrapper instead of CheckoutPage

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Access cart items and remove function
  const [isCheckout, setIsCheckout] = useState(false); // State to control checkout view

  const [isClient, setIsClient] = useState(false);

  // This effect ensures `CheckoutPage` is only rendered on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 bg-black  before:z-[-10] "> {/* Adjusted mt */}
      <Image
        src="/unsplash_4ycv3Ky1ZZU.png"
        alt="Banner Image"
        width={500}
        height={500}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6 mt-[150px]">
        <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
          Cart
        </h2>
        <div className="flex items-center space-x-2 text-white">
          <Link href="/" className="text-white">Home</Link>
          <span className="text-white"> &gt; </span>
          <Link href="/about" className="text-orange-500">Cart</Link>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      <div className="relative font-[sans-serif] pt-20 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/unsplash_4ycv3Ky1ZZU.png"
          width={500}
          height={500}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">Cart</h2>
          <div className="flex items-center space-x-2 text-white">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/menu" className="text-orange-500">Cart</Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        <div className="flex flex-col gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.description}</p>

                  {/* Displaying Quantity */}
                  <div className="flex items-center gap-10 mt-2">
                    <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => updateQuantity(item, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">
            Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h3>
          {/* Conditionally render CheckoutWrapper */}
          {isCheckout ? (
            isClient && <CheckoutWrapper /> // Ensure it's only rendered on the client
          ) : (
            <button
              className="mt-4 px-6 py-3 bg-[#FF9F0D] text-white"
              onClick={() => setIsCheckout(true)}
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
