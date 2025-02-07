'use client'
import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import convertToSubCurrency from '../lib/ConvertToSubCurrency'

const CheckoutPage = ({ amount }: { amount: number }) => {
    console.log(window.location.host)

    const myhost = window.location.host
    const URL = myhost === 'localhost:3000' 
        ? 'http://localhost:3000' 
        : 'https://stripe-payment-one-nu.vercel.app'

    const stripe = useStripe()
    const elements = useElements()

    const [errorMessage, setError] = useState<string>('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch('/api/payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) })
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
        .catch(() => setError('Failed to fetch payment intent'))
    }, [amount])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!stripe || !elements) {
            setError('Stripe has not loaded yet')
            return
        }

        const { error: submitErrors } = await elements.submit()
        if (submitErrors) {
            setError(submitErrors.message || 'An error occurred')
            return
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${URL}/payment-success?amount=${amount}`
            }
        })

        if (error) {
            setError(error.message || 'Payment failed')
        } else {
            setError('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='p-8'>
            {clientSecret && <PaymentElement />}
            <button className='w-full bg-black text-white py-2 mt-5'>Pay Now</button>
            {errorMessage && <p className='text-red-500 mt-3'>{errorMessage}</p>}
        </form>
    )
}

export default CheckoutPage