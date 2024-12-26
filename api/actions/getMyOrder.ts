"use server";

import { readFileSync } from "fs";
import { UserOrderType } from "./types";

export const getMyOrders = async (userId: string) => {
  const order: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );
  return order.filter(
    (Item) => Item.orderStatus === "Pending" && Item.userId === userId
  );
};
