"use client";
import { confirmOrders } from "@/app/api/actions/confirmOrders";
import React from "react";

const ConfirmButton = ({ userId }: { userId: string }) => {
  const confirmOrder = async () => {
    await confirmOrders(userId);
  };

  return (
    <form action={confirmOrder}>
      <button className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer">
        Confirm order
      </button>
    </form>
  );
};

export default ConfirmButton;
