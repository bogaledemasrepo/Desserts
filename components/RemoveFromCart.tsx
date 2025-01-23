"use client";
import { removeFromCart } from "@/app/api/removeFromCart";
import RemoveSvg from "@/public/assets/images/icon-remove-item.svg";
const RemoveFromCart = ({
  userId,
  produactName,
}: {
  userId: string;
  produactName: string;
}) => {
  const removeHandler = async () => {
    removeFromCart(userId, produactName);
  };
  return (
    <form action={removeHandler}>
      <button
        type="submit"
        className="p-1 rounded-full border-2 border-slate-400 flex items-center justify-center hover:border-slate-600 text-slate-600 cursor-pointer transition-colors"
      >
        <RemoveSvg />
      </button>
    </form>
  );
};

export default RemoveFromCart;
