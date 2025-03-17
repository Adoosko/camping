"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [discountCode, setDiscountCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ discountCode }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Chyba pri spracovaní platby");
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        autoCapitalize="on"
        type="text"
        placeholder="Zľavový kód (voliteľné)"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
        className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />

      <button
        onClick={handleCheckout}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"
        disabled={loading}
      >
        {loading ? "Spracováva sa..." : "Kúpiť eBook"}
      </button>
    </div>
  );
}
