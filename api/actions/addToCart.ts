"use server";
import { readFileSync } from "fs";
import { revalidatePath } from "next/cache";
import { DessertItem, UserOrderType } from "./types";
import { writeToOrder } from "./writeToOrder";

export const addToCart = async (userId: string, produactName: string) => {
  const data: DessertItem[] = JSON.parse(
    readFileSync("./data/data.json", "utf-8")
  );
  const UsersOrder: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );

  // Select produact to add
  const produactToAdd = data.find((dataItem) => dataItem.name === produactName);
  if (produactToAdd) {
    // Check is user has pending order
    const pendingOrder = UsersOrder.find(
      (O) => O.userId === userId && O.orderStatus === "Pending"
    );
    if (pendingOrder) {
      if (pendingOrder.Cart.filter((I) => I.name === produactName).length) {
        console.log("Error running!");
      } else {
        pendingOrder.Cart = [
          ...pendingOrder.Cart,
          { ...produactToAdd, quantity: 1 },
        ];
        writeToOrder(UsersOrder);
      }
      // Check if produact to add is in pending order
    } else {
      UsersOrder.push({
        orderId: new Date().toString(),
        userId: userId,
        orderedAt: undefined,
        orderStatus: "Pending",
        Cart: [{ ...produactToAdd, quantity: 1 }],
      });
      writeToOrder(UsersOrder);
    }
    revalidatePath("/");
  } else {
    console.log("There is no produact by this name!");
  }
};
