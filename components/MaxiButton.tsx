"use client";
import { increaseAmount } from "@/app/api/increseAmount";
import IncrementSvg from "@/public/assets/images/icon-increment-quantity.svg";
import React from "react";

const MaxiButton = ({ userId, name }: { userId: string; name: string }) => {
  const maximizehandler = async () => {
    await increaseAmount(userId, name);
  };
  return (
    <form action={maximizehandler}>
      <button
        className="w-4 h-4 rounded-full  ring-1 ring-offset-1 ring-slate-100 flex items-center justify-center"
        type="submit"
      >
        <IncrementSvg />
      </button>
    </form>
  );
};

export default MaxiButton;
