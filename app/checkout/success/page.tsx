// app/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getStripe } from "@/lib/stripe"; // Adjust path if needed
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionDetails, setSessionDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      if (!sessionId) {
        setLoading(false);
        setError("No session ID found in URL.");
        return;
      }

      try {
        const stripe = await getStripe();
        if (!stripe) {
          throw new Error("Stripe.js not loaded.");
        }

        // You might want to verify the session on your server-side
        // instead of directly from the client for security in a real app.
        // For this example, we'll fetch from Stripe directly (less secure).
        // const session = await stripe.checkout.sessions.retrieve(sessionId);
        // setSessionDetails(session);
      } catch (err: any) {
        console.error("Error fetching session:", err);
        setError(err.message || "Failed to fetch session details.");
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading payment details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Payment Successful!
      </h1>
      <p className="text-lg mb-2">Thank you for your purchase!</p>
      {sessionDetails && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <p className="text-md">
            Session ID: <span className="font-mono">{sessionDetails.id}</span>
          </p>
          <p className="text-md">
            Amount Total: $
            {((sessionDetails.amount_total || 0) / 100).toFixed(2)}
          </p>
          {/* Display more session details as needed */}
        </div>
      )}
      <p className="mt-4">
        <a href="/" className="text-blue-600 hover:underline">
          Go back to home
        </a>
      </p>
    </div>
  );
}
