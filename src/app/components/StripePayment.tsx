"use client";

import convertToSubCurrency from '../lib/ConvertToSubCurrency';
import CheckoutPage from '@/app/components/CheckoutPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    console.error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is missing!");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const StripePayment = () => {
    const amount = 49.99;
    const convertedAmount = convertToSubCurrency(amount); // Ensure this returns cents

    console.log("Original Amount:", amount);
    console.log("Converted Amount (cents):", convertedAmount);

    return (
        <div>
            <h1 className='text-6xl font-bold text-center'>Ali Jawwad has requested ${amount}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertedAmount, // Ensure it's in cents
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={convertedAmount} />
            </Elements>
        </div>
    );
}

export default StripePayment;
