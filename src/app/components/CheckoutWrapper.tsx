"use client"; // Ensure the component is treated as a client-side component

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../components/CheckoutPage"; // Import your CheckoutPage component

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY as string);

const CheckoutWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage amount={100} /> {/* Pass your amount here */}
    </Elements>
  );
};

export default CheckoutWrapper;
