"use server";
import { writeFileSync } from "fs";
import { UserOrderType } from "./types";

export const writeToOrder = async (data: UserOrderType[]) => {
  try {
    writeFileSync("./data/order.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
