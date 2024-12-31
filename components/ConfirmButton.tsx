"use client";
import { confirmOrders } from "@/app/api/actions/confirmOrders";
import { revalidatePath } from "next/cache";
import React from "react";

const ConfirmButton = ({ userId }: { userId: string }) => {
  const confirmOrder = async () => {
    await confirmOrders(userId);
    revalidatePath("/");
  };

  return (
    <form action={confirmOrder}>
      <button
        className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
        type="submit"
      >
        Confirm order
      </button>
    </form>
  );
};

export default ConfirmButton;
