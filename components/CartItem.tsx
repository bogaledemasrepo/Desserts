import RemoveFromCart from "./RemoveFromCart";

const CartItem = ({
  userId,
  title,
  price,
  quantity,
}: {
  userId: string;
  title: string;
  price: number;
  quantity: number;
}) => {
  return (
    <div className="w-full flex items-center justify-between my-4">
      <div className="">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="space-x-2 leading-8 text-sm font-semibold">
          <span className="text-myred">{quantity}x</span>
          <span className="text-slate-400">
            @{(quantity * price).toFixed(2)}
          </span>
          <span className="text-slate-500">
            {(quantity * price).toFixed(2)}
          </span>
        </p>
      </div>
      <RemoveFromCart userId={userId} produactName={title} />
    </div>
  );
};

export default CartItem;
