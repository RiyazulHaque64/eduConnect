"use server";

import { stripe } from "@/lib/stripe";
import { formatAmountForStripe } from "@/lib/stripeHelpers";
import { headers } from "next/headers";

const currency = "usd";

export async function createCheckoutSession(data: FormData) {
  const uiMode = "hosted";
  const origin = headers().get("origin");
  const courseId = data.get("courseId");
  const courseName = data.get("courseName");
  const price = Number(data.get("coursePrice"));

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "auto",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: currency,
          product_data: {
            name: courseName as string,
          },
          unit_amount: formatAmountForStripe(price, currency),
        },
      },
    ],
    ...(uiMode === "hosted" && {
      success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}&course_id=${courseId}`,
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
  const price = Number(data.get("coursePrice"));
  const paymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(price, currency),
    automatic_payment_methods: {
      enabled: true,
    },
    currency,
  });

  return {
    client_secret: paymentIntent.client_secret,
  };
}
