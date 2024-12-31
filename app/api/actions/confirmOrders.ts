"use server";

import { readFileSync } from "fs";
import { UserOrderType } from "./types";
// import { revalidatePath } from "next/cache";
import { writeToOrder } from "./writeToOrder";
import { writeToConfirmed } from "./writeToConfirmed";

export const confirmOrders = async (userId: string) => {
  const order: UserOrderType[] = JSON.parse(
    readFileSync("./data/order.json", "utf-8")
  );
  //   Getting pending users order
  const pendingUsersOrder = order.find(
    (Item) => Item.userId === userId && Item.orderStatus === "Pending"
  );
  //   Set status to confirmmed
  if (pendingUsersOrder) {
    pendingUsersOrder.orderStatus = "Confirmed";
    writeToOrder(order);
    writeToConfirmed(order);
    // revalidatePath("/");
  } else console.log(pendingUsersOrder, "No pending order");
};
