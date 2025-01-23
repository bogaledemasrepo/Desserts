import CarbonSvg from "@/public/assets/images/icon-carbon-neutral.svg";
import EmptySvg from "@/public/assets/images/illustration-empty-cart.svg";
import CartItem from "./CartItem";
import Cartwrapper from "./Cartwrapper";
import { getMyOrders } from "@/app/api/getMyOrder";
import ConfirmButton from "./ConfirmButton";

const Cart = async ({ userId }: { userId: string }) => {
  const PendingOrders = await getMyOrders(userId);
  function totalPrice() {
    let priceCalculate = 0;
    PendingOrders[0].Cart.forEach(
      (Item) => (priceCalculate = priceCalculate + Item.price * Item.quantity)
    );
    return priceCalculate;
  }
  if (PendingOrders.length === 0 || PendingOrders[0].Cart.length === 0) {
    // Display No order message
    return (
      <Cartwrapper pendingOrderCount={0}>
        <div className="flex flex-col items-center">
          <div className="w-full h-[200px] flex items-center justify-center">
            <EmptySvg />
          </div>
          <p className="text-slate-400">Your added items will appear hir!</p>
        </div>
      </Cartwrapper>
    );
  } else
    return (
      <Cartwrapper pendingOrderCount={PendingOrders[0].Cart.length}>
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
          <div className="flex space-x-4 my-6">
            <CarbonSvg />{" "}
            <p className="text-slate-400">
              This is{" "}
              <span className="text-slate-600 font-semibold">
                carbon neutral
              </span>{" "}
              delivery
            </p>
          </div>
          <ConfirmButton userId={userId} />
        </div>
      </Cartwrapper>
    );
};

export default Cart;
