import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderStatus: {
    type: String,
    default: "Confirmed",
  },
});

export const Order = mongoose.model("Order", orderSchema);
