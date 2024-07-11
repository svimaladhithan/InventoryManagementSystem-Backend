import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  orderValue: { 
    type: Number,
    required: true,
  },
  orderedDate:{
    type: String,
    required: true,
  },
  deliveryStatus: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'User' 
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
