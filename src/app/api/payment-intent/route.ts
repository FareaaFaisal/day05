import { NextRequest, NextResponse } from "next/server";

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia", // Use the latest API version
});

export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
            // automatic_payment_methods: ['card_present'], 
        })

        return NextResponse.json({ clientSecret: paymentIntent.client_secret })

    }
    catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json({
                status: 500,
                body: { error: err.message }
            })
        }
    }
}