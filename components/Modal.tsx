"use client";
import { ItemInCart } from "@/app/api/actions/types";
import OrderSvg from "@/public/assets/images/icon-order-confirmed.svg";
import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";
import { confirmOrders } from "@/app/api/actions/confirmOrders";

const ModalContext = createContext({
  isModalOpend: false,
  openModal: () => {},
  closeModal: () => {},
});

const Overlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed left-0 top-0 flex items-center justify-center  h-screen w-full py-4 z-50 bg-[#7D7E7B80] transition-all duration-300">
      {children}
    </div>
  );
};

const Modal = ({
  pendingOrders,
  totalPrice,
  userId,
}: {
  pendingOrders: ItemInCart[];
  totalPrice: number;
  userId: string;
}) => {
  const { isModalOpend, closeModal } = useContext(ModalContext);
  if (isModalOpend) {
    return createPortal(
      <Overlay>
        <div
          style={{
            overflowY: "scroll",
          }}
          className="relative min-w-[300px] sm:m-[10px] w-[90vw] max-w-[640px] rounded-xl bg-[#FEFEFE] px-8 scroll-my-10"
        >
          <button
            className="bg-white rounded-md w-8 h-8 flex items-center justify-center absolute top-2 right-2 border-2 text-slate-500 font-semibold text-lg hover:border-slate-400 transition-colors duration-300"
            onClick={closeModal}
          >
            x
          </button>
          <div className="">
            <div className="my-8">
              <OrderSvg />
            </div>
            <h1 className="text-4xl font-bold">Order Confirmed!</h1>
            <p className="py-4">We hope you enjoy your Food!</p>
            <div className="p-8">
              <div>
                {pendingOrders.map((Item) => (
                  <CartItem
                    key={Item.name}
                    userId={userId}
                    title={Item.name}
                    price={Item.price}
                    quantity={Item.quantity}
                  />
                ))}
                <div className="w-full flex justify-between my-2">
                  <p className="text-slate-500">Total Order</p>
                  <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <form action="">
                <button className="bg-myred w-full px-8 p-3 mt-3 my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer">
                  Start New Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </Overlay>,
      document.body
    );
  }
};
const ModalOpen = ({
  pendingOrders,
  totalPrice,
  userId,
}: {
  pendingOrders: ItemInCart[];
  totalPrice: number;
  userId: string;
}) => {
  const [isModalOpend, setIsModalOpend] = useState(false);
  const openModal = () => {
    setIsModalOpend(true);
  };
  const closeModal = () => {
    setIsModalOpend(false);
  };
  const confirmHandler = async () => {
    await confirmOrders(userId);
    openModal();
  };
  return (
    <ModalContext.Provider value={{ isModalOpend, openModal, closeModal }}>
      <Modal
        pendingOrders={pendingOrders}
        totalPrice={totalPrice}
        userId={userId}
      />
      {/* <form action={confirmHandler}> */}
      <button
        className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
        onClick={confirmHandler}
        // type="submit"
      >
        Confirm order
      </button>
      {/* </form> */}
      {/* <button
        onClick={openModal}
        className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
      >
        Confirm order
      </button> */}
    </ModalContext.Provider>
  );
};

export default ModalOpen;
