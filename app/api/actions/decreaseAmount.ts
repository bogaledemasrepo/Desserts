"use server";

import { readFileSync } from "fs";
import { UserOrderType } from "./types";
import { removeFromCart } from "./removeFromCart";
import { revalidatePath } from "next/cache";
import { writeToOrder } from "./writeToOrder";

export const decreaseAmount = async (userId: string, produactName: string) => {
  const UsersOrder: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );
  const haveItemToDecrease = UsersOrder.find(
    (Item) =>
      Item.userId === userId &&
      Item.orderStatus === "Pending" &&
      Item.Cart.find((I) => I.name === produactName)
  );
  if (!haveItemToDecrease || haveItemToDecrease.Cart[0].quantity === 1) {
    // Call remove Item
    await removeFromCart(userId, produactName);
  } else {
    haveItemToDecrease.Cart[0].quantity--;
    writeToOrder(UsersOrder);
  }
  revalidatePath("/");
};
