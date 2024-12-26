"use server";

import { readFileSync } from "fs";
import { UserOrderType } from "./types";
import { writeToOrder } from "./writeToOrder";
import { revalidatePath } from "next/cache";

export const removeFromCart = async (userId: string, produactName: string) => {
  let order: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );
  //   Find users pending order byuser id
  const usersPendingOrder = order.find(
    (Item) => Item.userId === userId && Item.orderStatus === "Pending"
  );
  if (usersPendingOrder) {
    if (usersPendingOrder.Cart.length === 1) {
      order = order.filter(
        (Item) => Item.userId !== userId || Item.orderStatus !== "Pending"
      );
      writeToOrder(order);
      revalidatePath("/");
    } else {
      usersPendingOrder.Cart = usersPendingOrder.Cart.filter(
        (Item) => Item.name !== produactName
      );
      writeToOrder(order);
      console.log(usersPendingOrder);
      revalidatePath("/");
    }
  } else console.log("No pending order!");
};
