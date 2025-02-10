"use client";
const ConfirmButton = ({ confirmOrder }: { confirmOrder: () => void }) => {
  return (
    <button
      className="bg-myred px-8 p-3  my-2 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
      onClick={confirmOrder}
    >
      Confirm order
    </button>
  );
};

export default ConfirmButton;
