"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const PaymentSuccess = () => {
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount");

    // Convert cents to dollars and ensure no decimals
    const formattedAmount = amount ? parseInt(amount, 10) / 100 : 0;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-900">
            {/* Banner Section */}
            <div className="relative w-full">
                <Image
                    src="/unsplash_4ycv3Ky1ZZU.png"
                    alt="Payment Success Banner"
                    width={1920}
                    height={500}
                    className="w-full h-[300px] lg:h-[400px] object-cover brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h2 className="text-white text-4xl lg:text-5xl font-bold mt-10 mb-8">Payment Successful</h2>
                    <div className="flex items-center space-x-2 mt-2 text-white">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>&gt;</span>
                        <Link href="/cart" className="text-orange-500 hover:underline">Payment Page</Link>
                    </div>
                </div>
            </div>

            {/* Success Message */}
            <div className="mt-20 mb-20 p-6 bg-white shadow-lg rounded-lg text-center max-w-2xl">
                <h1 className="text-3xl lg:text-5xl font-bold text-green-600">
                    🎉 Thank You for Your Purchase!
                </h1>
                <p className="text-lg lg:text-xl mt-4">
                    Your payment of <span className="font-semibold text-orange-500">${formattedAmount}</span> was successful.
                </p>
                <p className="mt-2 text-gray-500">A confirmation email has been sent to your inbox.</p>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-[#FF9F0D] text-white rounded-lg text-lg hover:bg-orange-600 transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
