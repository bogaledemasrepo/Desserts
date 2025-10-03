// app/cancel/page.tsx
export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-red-600">
      <h1 className="text-4xl font-bold mb-4">Payment Canceled!</h1>
      <p className="text-lg mb-2">Your payment was not completed.</p>
      <p className="mt-4">
        <a href="/" className="text-blue-600 hover:underline">
          Go back to home
        </a>
      </p>
    </div>
  );
}
