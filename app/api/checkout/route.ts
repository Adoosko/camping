import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  try {
    const { email, discountCode } = await req.json();

    // Cena eBooku
    let price = 24 * 100; // 24 EUR v centoch

    // Overenie zľavového kódu
    const validCodes: Record<string, number> = {
      FORMA25: 0.25, // 25% zľava
      IBAFORMA100: 0,
    };

    if (discountCode && validCodes[discountCode.toUpperCase()]) {
      price = price - price * validCodes[discountCode.toUpperCase()];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "eBook - Efektívne Chudnutie",
              description: "120 receptov, nákupný zoznam a návod na chudnutie.",
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      metadata: {
        email: email, // Sem musíš poslať email užívateľa
      }, // Email si uložíme pre webhook
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Chyba pri vytváraní Checkout Session:", error);
    return NextResponse.json(
      { error: "Chyba pri spracovaní platby." },
      { status: 500 }
    );
  }
}
