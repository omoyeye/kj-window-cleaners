import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICES = {
  flat: { exterior: 10, interior: 12, full: 18 },
  terrace: { exterior: 15, interior: 18, full: 28 },
  'semi-detached': { exterior: 20, interior: 24, full: 35 },
  detached: { exterior: 30, interior: 35, full: 50 },
  commercial: { exterior: 45, interior: 50, full: 80 },
};

export async function POST(request) {
  try {
    const { property_type, service_type, frequency, booking_id } = await request.json();

    const basePrice = PRICES[property_type]?.[service_type];
    if (!basePrice) {
      return NextResponse.json({ error: 'Invalid property or service type' }, { status: 400 });
    }

    let discount = 0;
    if (frequency === 'weekly') discount = 0.2;
    else if (frequency === 'bi-weekly') discount = 0.15;
    else if (frequency === 'monthly') discount = 0.1;

    const finalPrice = Math.round(basePrice * (1 - discount) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Window Cleaning - ${service_type} (${property_type})`,
              description: `${frequency} service for ${property_type} property`,
            },
            unit_amount: finalPrice,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking?cancelled=true`,
      metadata: { booking_id: String(booking_id || '') },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
