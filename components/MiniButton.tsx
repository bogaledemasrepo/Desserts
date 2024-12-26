"use client";
import { decreaseAmount } from "@/api/actions/decreaseAmount";
import DecrementSvg from "@/public/assets/images/icon-decrement-quantity.svg";
import React from "react";

const MiniButton = ({ userId, name }: { userId: string; name: string }) => {
  const minimizeHandler = async () => {
    await decreaseAmount(userId, name);
  };
  return (
    <form action={minimizeHandler}>
      <button
        className="w-4 h-4 rounded-full  ring-1 ring-offset-1 ring-slate-100 flex items-center justify-center"
        type="submit"
      >
        <DecrementSvg />
      </button>
    </form>
  );
};

export default MiniButton;
