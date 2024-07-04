import Order from "../Models/orderModel.js";
import { errorHandler } from "../Utils/Error.js";

export const createOrder = async (req, res, next) => {
  const { name, product, quantity, orderValue, orderedDate, deliveryStatus } = req.body;
  if (
    !name ||
    !product ||
    !quantity ||
    !orderValue ||
    !orderedDate||
    !deliveryStatus ||
    name == "" ||
    product == "" ||
    quantity == "" ||
    orderValue == "" ||
    orderedDate == "" ||
    deliveryStatus == ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  } else {
    const newOrder = new Order({
      name,
      product,
      quantity,
      orderValue,
      orderedDate,
      deliveryStatus,
    });
    try {
      await newOrder.save();
      res
        .status(200)
        .json({ message: "Order created successfully", data: newOrder });
    } catch (error) {
      next(error);
    }
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res
      .status(200)
      .json({ message: "Orders fetched successfully", result: orders });
  } catch (error) {
    next(error);
  }
};
