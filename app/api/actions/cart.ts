"use server";

import { UserOrderType } from "./types";

export const UsersOrder: UserOrderType[] = [];
export const getAllMyOrders = async (id: string) => {
  return UsersOrder.filter((Item) => Item.userId === id);
};

// export async function addToCart(userId: string, produactItem: string) {
//   // Check if the product exists in the data array
//   const produact = data.find((Item) => Item.name === produactItem);
//   if (produact) {
//     // Check user have pending orders
//     const pendingOrder = UsersOrder.find(
//       (Item) => Item.userId === userId && Item.orderStatus === "Pending"
//     );
//     if (pendingOrder) {
//       //Add produact to cart
//       //Check produact item in pending order
//       const produactIsInPendingOrder = pendingOrder.Cart.find(
//         (Item) => Item.dessertItem.name === produactItem
//       );
//       if (produactIsInPendingOrder) {
//         //Increase quantity
//         produactIsInPendingOrder.quantity =
//           produactIsInPendingOrder.quantity + 1;
//       } else {
//         pendingOrder.Cart.push({
//           dessertItem: produact,
//           quantity: 1,
//         });
//       }
//       revalidatePath("/");
//     } else {
//       //Add new user order
//       UsersOrder.push({
//         userId,
//         orderId: new Date().toString(),
//         orderedAt: new Date(),
//         orderStatus: "Pending",
//         Cart: [
//           {
//             dessertItem: produact,
//             quantity: 1,
//           },
//         ],
//       });
//       revalidatePath("/");
//     }
//   } else {
//     console.log("There is no produact by this name");
//   }
// }

// export const removeFromCart = async (userId: string, produactItem: string) => {
//   const havePendingOrder = UsersOrder.find(
//     (Item) => Item.userId === userId && Item.orderStatus === "Pending"
//   );
//   if (havePendingOrder) {
//     const produactToRemove = havePendingOrder.Cart.find(
//       (Item) => Item.dessertItem.name === produactItem
//     );
//     if (produactToRemove) {
//       havePendingOrder.Cart = havePendingOrder.Cart.filter(
//         (Item) => Item.dessertItem.name !== produactItem
//       );
//       revalidatePath("/");
//     } else console.log("This produact is not in pennding order!");
//   } else console.log("No pennding order!");
// };

// export async function serverAmountInCart(userId: string, produactItem: string) {
//   console.log(userId, produactItem);
//   return 1;
// }
