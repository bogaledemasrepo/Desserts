"use server";

import { Orders } from "./state";

export const getPendingOrders = async (userId: string) => {
  return Orders.filter(
    (orderItem) =>
      orderItem.userId === userId && orderItem.orderStatus === "Pending"
  );
};
