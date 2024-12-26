// Define the interface for a cart item
export interface ImagePaths {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
interface CartItem {
  image: ImagePaths;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

// Define the interface for a user order
interface OrdersType {
  userId: string;
  orderId: string;
  orderedAt: Date | undefined; // Can be undefined if the order date isn't set
  orderStatus: "Pending" | "Confirmed"; // Status of the order
  Cart: CartItem[]; // Array of cart items
}

// Initialize an empty array of orders
export const Orders: OrdersType[] = [];
