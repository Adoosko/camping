import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia", // Stabilná verzia API
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    console.error("❌ Chýba Stripe signature.");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let event;
  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;

    if (!email) {
      console.error("❌ Email nenájdený.");
      return NextResponse.json({ error: "Chýbajúce údaje." }, { status: 400 });
    }

    // ✅ Profesionálny HTML email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h1 style="color: #007BFF;">📖 Ďakujeme za váš nákup! 🎉</h1>
        <p>Váš e-book je pripravený na stiahnutie.</p>
        <a href="${process.env.EBOOK_DOWNLOAD_LINK}" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
          📥 Stiahnuť e-book
        </a>
        <p>Ak máte problém, kontaktujte nás na <a href="mailto:${process.env.SUPPORT_EMAIL}">${process.env.SUPPORT_EMAIL}</a>.</p>
      </div>
    `;

    // ✅ Nastavenie SMTP cez Gmail (alebo iný poskytovateľ)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: `"Na Formu" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "📖 Tvoj eBook - Efektívne Chudnutie",
        html: emailHtml,
      });

      console.log(`✅ Email úspešne odoslaný na ${email}`);
    } catch (error) {
      console.error("❌ Chyba pri odosielaní e-mailu:", error);
      return NextResponse.json(
        { error: "Chyba pri odosielaní e-mailu." },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
