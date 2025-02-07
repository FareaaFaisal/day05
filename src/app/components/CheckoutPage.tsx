"use client";

import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement, Elements } from "@stripe/react-stripe-js";
import convertToSubCurrency from "../lib/ConvertToSubCurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const [errorMessage, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false); // Track if the component has mounted

  const stripe = useStripe();
  const elements = useElements();

  const [URL, setURL] = useState<string>("");

  // Use useEffect to ensure window is only accessed after mount
  useEffect(() => {
    setMounted(true);

    // Set URL based on host only on the client-side
    const myhost = window.location.host;
    if (myhost === "localhost:3000") {
      setURL("http://localhost:3000");
    } else {
      setURL("https://stripe-payment-one-nu.vercel.app");
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // Fetch client secret when amount changes
  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await fetch("api/payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
        });

        const data = await res.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret); // Set clientSecret here
        } else {
          setError("Failed to fetch client secret.");
        }
      } catch (error) {
        setError("Error fetching client secret.");
      }
    };

    fetchClientSecret();
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message on submit

    if (!stripe || !elements || !clientSecret) {
      setLoading(false);
      setError("Stripe or Elements not loaded properly");
      return;
    }

    // Confirm the payment with stripe
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${URL}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setError(error.message || "An unknown error occurred.");
      setLoading(false);
    } else {
      setError(null); // Reset any previous error message
      setLoading(false);
    }
  };

  // Avoid rendering if the component hasn't mounted yet or clientSecret isn't available
  if (!mounted || !clientSecret) {
    return <div>Loading...</div>; // Show loading state while waiting for client secret or mounting
  }

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Complete Your Payment</h2>

      {/* Render Stripe Elements only after mounting and clientSecret is available */}
      {mounted && clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <PaymentElement />
        </Elements>
      )}

      <button className="w-full bg-black text-white py-2 mt-5" disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutPage;