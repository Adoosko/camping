"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutSuccess() {
  const router = useRouter();

  useEffect(() => {
    console.log("✅ Success page loaded!");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold">Ďakujeme za váš nákup! 🎉</h1>
      <p className="text-lg mt-2">Váš e-book vám bol odoslaný na e-mail.</p>
      <button
        onClick={() => router.push("/")}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Späť na hlavnú stránku
      </button>
    </div>
  );
}
