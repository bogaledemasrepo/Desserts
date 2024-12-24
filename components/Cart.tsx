import EmptySvg from "@/assets/images/illustration-empty-cart.svg";
import React from "react";

const Cart = () => {
  return (
    <div className="w-[300px] h-[400px] p-8 border border-slate-500 rounded-md flex flex-col">
      <h2 className="text-2xl text-red-500 font-bold">Your Cart(0)</h2>
      <div className="w-full h-[200px] flex items-center justify-center">
        <EmptySvg />
      </div>
      <p className="text-slate-400">Your added items will appear hir!</p>
    </div>
  );
};

export default Cart;
