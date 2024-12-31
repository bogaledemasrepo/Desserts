import { createContext, ReactNode } from "react";
interface CartItem {
  itemId: string;
  quantity: number;
}
const CartContext = createContext({});
const removeCart = localStorage.removeItem("itemInCart");
const getCartItem = () => {
  const itemInCart = localStorage.getItem("itemInCart") || "[]";
  return itemInCart;
};
const addToCart = ({ itemId }: { itemId: string }) => {
  const itemInCart: CartItem[] = JSON.parse(getCartItem());
  if (itemInCart.length === 0) {
    localStorage.setItem(
      "itemInCart",
      JSON.stringify([
        {
          itemId,
          quantity: 1,
        },
      ])
    );
  } else {
    const quantity = itemInCart.find(
      (Item) => Item.itemId === itemId
    )?.quantity;
    if (!quantity) {
      localStorage.setItem(
        "itemInCart",
        JSON.stringify([
          ...itemInCart,
          {
            itemId,
            quantity: 1,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "itemInCart",
        JSON.stringify([
          ...itemInCart,
          {
            itemId,
            quantity: quantity + 1,
          },
        ])
      );
    }
  }
};

const removeFromCart = ({ itemId }: { itemId: string }) => {
  const itemInCart: CartItem[] = JSON.parse(getCartItem());
  localStorage.setItem(
    "itemInCart",
    JSON.stringify(itemInCart.filter((Item) => Item.itemId !== itemId))
  );
};
const dicreaseQuantity = ({ itemId }: { itemId: string }) => {
  const itemInCart: CartItem[] = JSON.parse(getCartItem());
  const quantity = itemInCart.find((Item) => Item.itemId === itemId)?.quantity;
  if (quantity) {
    if (quantity === 1) {
      removeFromCart({ itemId });
    } else {
      localStorage.setItem(
        "itemInCart",
        JSON.stringify([
          ...itemInCart,
          {
            itemId,
            quantity: quantity - 1,
          },
        ])
      );
    }
  }
};
const increaseQuantity = ({ itemId }: { itemId: string }) => {
  const itemInCart: CartItem[] = JSON.parse(getCartItem());
  const quantity = itemInCart.find((Item) => Item.itemId === itemId)?.quantity;
  if (quantity) {
    localStorage.setItem(
      "itemInCart",
      JSON.stringify([
        ...itemInCart,
        {
          itemId,
          quantity: quantity + 1,
        },
      ])
    );
  } else addToCart({ itemId });
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider
      value={{
        getCartItem,
        addToCart,
        removeFromCart,
        dicreaseQuantity,
        increaseQuantity,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
