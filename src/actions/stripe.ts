"use server";

import { stripe } from "@/lib/stripe";
import { formatAmountForStripe } from "@/lib/stripeHelpers";
import { headers } from "next/headers";

const currency = "usd";

export async function createCheckoutSession(data: FormData) {
  const uiMode = "hosted";
  const origin = headers().get("origin");

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "auto",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: currency,
          product_data: {
            name: "How to be happy",
          },
          unit_amount: formatAmountForStripe(1000, currency),
        },
      },
    ],
    ...(uiMode === "hosted" && {
      success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}&course_id=12345`,
      cancel_url: `${origin}/courses`,
    }),
    ui_mode: uiMode,
  });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(data: FormData) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(1000, currency),
    automatic_payment_methods: {
      enabled: true,
    },
    currency,
  });

  return {
    client_secret: paymentIntent.client_secret,
  };
}
