import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: "2022-11-15" });

export async function POST(request: Request, response: Response) {
    try {
        let { products } = await request.json()
        let checkoutSession = await stripe.checkout.sessions.create({
            success_url: `${process.env.NEXT_PUBLIC_HOST_NAME}/success`,

            currency: 'usd',
            mode: "payment",
            line_items: [
                ...products
            ]
        })
        return NextResponse.json({ checkoutSession })

    } catch (error) {
        console.log("error: ", error)
        return NextResponse.json({ error, status: 500 })
    }
}