import { getMyOrders } from "@/app/api/actions/getMyOrder";
import OrderSvg from "@/public/assets/images/icon-order-confirmed.svg";
import React from "react";
import CartItem from "./CartItem";

const ConfirmModalContent = async ({ userId }: { userId: string }) => {
  const PendingOrders = await getMyOrders(userId);
  function totalPrice() {
    let priceCalculate = 0;
    PendingOrders[0].Cart.forEach(
      (Item) => (priceCalculate = priceCalculate + Item.price * Item.quantity)
    );
    return priceCalculate;
  }
  return (
    <div className="">
      <div className="my-8">
        <OrderSvg />
      </div>
      <h1 className="text-4xl font-bold">Order Confirmed!</h1>
      <p className="py-4">We hope you enjoy your Food!</p>
      <div className="p-8">
        <div>
          {PendingOrders[0].Cart.map((Item) => (
            <CartItem
              userId={userId}
              key={Item.name}
              title={Item.name}
              price={Item.price}
              quantity={Item.quantity}
            />
          ))}
          <div className="w-full flex justify-between my-2">
            <p className="text-slate-500">Total Order</p>
            <p className="text-xl font-bold">${totalPrice().toFixed(2)}</p>
          </div>
          <button className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer">
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModalContent;
