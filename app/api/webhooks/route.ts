import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature")!;
  let event;

  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;

    if (!email) {
      console.error("Email nenájdený v metadata.");
      return NextResponse.json({ error: "Chýbajúce údaje." }, { status: 400 });
    }

    // Odoslanie e-mailu s eBookom
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Na Formu" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Tvoj eBook - Efektívne Chudnutie 📖",
        text: "Ďakujeme za kúpu! Tu je tvoj eBook.",
        attachments: [
          {
            filename: "ebook.pdf",
            path: path.join(process.cwd(), "public", "ebook.pdf"),
            contentType: "application/pdf",
          },
        ],
      });

      console.log(`Email odoslaný na ${email}`);
    } catch (error) {
      console.error("Chyba pri odosielaní e-mailu:", error);
      return NextResponse.json(
        { error: "Chyba pri odosielaní e-mailu." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
