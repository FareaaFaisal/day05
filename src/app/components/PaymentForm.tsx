import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      "{{CLIENT_SECRET}}",
      {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      }
    );

    setIsLoading(false);

    if (error) {
      console.error(error.message);
    } else {
      console.log("Payment Successful:", paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
