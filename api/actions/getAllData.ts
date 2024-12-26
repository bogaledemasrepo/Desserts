"use server";

import { readFileSync } from "fs";
import { DessertItem } from "./types";

export const getAllData = async () => {
  const data: DessertItem[] = JSON.parse(
    readFileSync("./data/data.json", "utf-8")
  );
  return data;
};
