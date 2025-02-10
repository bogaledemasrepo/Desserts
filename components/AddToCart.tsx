"use client";
import AddSvg from "@/public/assets/images/icon-add-to-cart.svg";
import React from "react";

const AddToCart = ({ addItemHandler }: { addItemHandler: () => void }) => {
  return (
    <button
      onClick={() => {
        addItemHandler();
      }}
      className="absolute px-8 py-3 bg-slate-200 border border-slate-300 -bottom-6 left-[50%] translate-x-[-50%] flex gap-4 w-fit text-nowrap rounded-full hover:bg-myred transition-colors"
    >
      <AddSvg />
      Add to cart
    </button>
  );
};

export default AddToCart;
