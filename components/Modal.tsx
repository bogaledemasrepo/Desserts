"use client";
import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import ConfirmModalContent from "./ConfirmModalContent";
const ModalContext = createContext({
  isModalOpend: false,
  openModal: () => {},
  closeModal: () => {},
});

const Overlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed left-0 top-0 flex items-center justify-center  h-screen w-full z-50 bg-[#7D7E7B80] transition-all duration-300">
      {children}
    </div>
  );
};

const Modal = () => {
  const { isModalOpend, closeModal } = useContext(ModalContext);
  if (isModalOpend) {
    return createPortal(
      <Overlay>
        <div className="relative min-w-[300px] sm:m-[10px] w-[90vw] max-w-[640px] rounded-xl h-[80vh] bg-[#FEFEFE] px-8">
          <button
            className="bg-white rounded-md w-8 h-8 flex items-center justify-center absolute top-2 right-2 border-2 text-slate-500 font-semibold text-lg hover:border-slate-400 transition-colors duration-300"
            onClick={closeModal}
          >
            x
          </button>
          <h1>Modal Contents hir!</h1>
          {/* <ConfirmModalContent userId={"user1"} /> */}
        </div>
      </Overlay>,
      document.body
    );
  }
};
const ModalOpen = () => {
  const [isModalOpend, setIsModalOpend] = useState(false);
  const openModal = () => {
    setIsModalOpend(true);
  };
  const closeModal = () => {
    setIsModalOpend(false);
  };
  return (
    <ModalContext.Provider value={{ isModalOpend, openModal, closeModal }}>
      <Modal />
      <button
        onClick={openModal}
        className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
      >
        Confirm order
      </button>
    </ModalContext.Provider>
  );
};

export default ModalOpen;
