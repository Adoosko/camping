import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia", // Použi stabilnú verziu
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    console.error("Chýba Stripe signature.");
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
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email; // Použi správny spôsob

    if (!email) {
      console.error("Email nenájdený.");
      return NextResponse.json({ error: "Chýbajúce údaje." }, { status: 400 });
    }

    // ✅ Skontroluj, či súbor existuje
    // const ebookPath = path.join(process.cwd(), "public", "ebook.pdf");
    // if (!fs.existsSync(ebookPath)) {
    //   console.error("Súbor ebook.pdf neexistuje.");
    //   return NextResponse.json({ error: "eBook nenájdený." }, { status: 500 });
    // }

    // ✅ Nastavenie Gmail SMTP s App Password
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
        text: "Ďakujeme za kúpu! Tu je tvoj eBook.",
        // attachments: [
        //   {
        //     filename: "ebook.pdf",
        //     path: ebookPath,
        //     contentType: "application/pdf",
        //   },
        // ],
      });

      console.log(`✅ Email odoslaný na ${email}`);
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
