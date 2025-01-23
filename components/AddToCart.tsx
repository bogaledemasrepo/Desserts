"use client";
import { addToCart } from "@/app/api/addToCart";
import AddSvg from "@/public/assets/images/icon-add-to-cart.svg";
import React from "react";

const AddToCart = ({
  userId,
  produactName,
}: {
  userId: string;
  produactName: string;
}) => {
  const cccc = async () => {
    const responce = await addToCart(userId, produactName);
    console.log(responce);
  };
  return (
    <form action={cccc}>
      <button
        type="submit"
        className="absolute px-8 py-3 bg-slate-200 border border-slate-300 -bottom-6 left-[50%] translate-x-[-50%] flex gap-4 w-fit text-nowrap rounded-full hover:bg-myred transition-colors"
      >
        <AddSvg />
        Add to cart
      </button>
    </form>
  );
};

export default AddToCart;
