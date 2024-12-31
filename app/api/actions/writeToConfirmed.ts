"use server";
import { writeFileSync } from "fs";
import { UserOrderType } from "./types";

export const writeToConfirmed = async (data: UserOrderType[]) => {
  try {
    writeFileSync("./data/confirmed.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
