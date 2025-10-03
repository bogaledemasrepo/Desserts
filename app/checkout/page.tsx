// app/page.tsx
import CheckoutButton from "@/components/CheckoutButton";

export default function HomePage() {
  const products = [
    { id: "prod_123", name: "Premium Widget", price: 25.0, quantity: 1 },
    { id: "prod_456", name: "Super Gadget", price: 10.0, quantity: 2 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">My Awesome Store</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center mb-2"
            >
              <span>
                {product.name} (x{product.quantity})
              </span>
              <span>${(product.price * product.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <CheckoutButton products={products} />
        </div>
      </div>
    </div>
  );
}
