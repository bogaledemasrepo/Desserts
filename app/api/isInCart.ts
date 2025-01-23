"use server";

import { readFileSync } from "fs";
import { UserOrderType } from "./types";

export const isInCart = async (userId: string, produactName: string) => {
  const order: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );
  const userPendingProduacts = order.find(
    (Item) => Item.userId === userId && Item.orderStatus === "Pending"
  );
  const responce = userPendingProduacts?.Cart.find(
    (Item) => Item.name === produactName
  );
  if (responce) return responce.quantity;
  return 0;
};
