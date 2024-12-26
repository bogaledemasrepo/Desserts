"use server";

import { readFileSync } from "fs";
import { UserOrderType } from "./types";
import { revalidatePath } from "next/cache";
import { writeToOrder } from "./writeToOrder";

export const increaseAmount = async (userId: string, produactName: string) => {
  const UsersOrder: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );

  const haveItemToIncrease = UsersOrder.find(
    (Item) =>
      Item.userId === userId &&
      Item.orderStatus === "Pending" &&
      Item.Cart.find((I) => I.name === produactName)?.quantity
  );
  console.log(haveItemToIncrease);
  if (haveItemToIncrease) {
    const item = haveItemToIncrease.Cart.find(
      (Item) => Item.name === produactName
    );
    if (item) {
      item.quantity++;
    }
    writeToOrder(UsersOrder);
    revalidatePath("/");
  } else {
    console.log("No produact to increase!");
  }
};
