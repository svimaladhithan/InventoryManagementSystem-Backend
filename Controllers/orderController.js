import Order from "../Models/orderModel.js";
import { errorHandler } from "../Utils/Error.js";

export const createOrder = async (req, res, next) => {
  const { name, product, quantity, orderValue, orderedDate, deliveryStatus } =
    req.body;
  const userId = req.user.id;
  if (
    !name ||
    !product ||
    !quantity ||
    !orderValue ||
    !orderedDate ||
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
      userId,
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
  const userId = req.user.id;
  // console.log(userId);
  try {
    const orders = await Order.find({ userId });
    res
      .status(200)
      .json({ message: "Orders fetched successfully", result: orders });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const orderId = req.params.id;
    const { name, product, quantity, orderValue, orderedDate, deliveryStatus } =
      req.body;
    if (
      name === "" ||
      product === "" ||
      quantity === "" ||
      orderValue === "" ||
      orderedDate === "" ||
      deliveryStatus === ""
    ) {
      return next(errorHandler(400, "All fields are required"));
    } else {
      const updateOrder = await Order.findByIdAndUpdate(
        orderId,
        { name, product, quantity, orderValue, orderedDate, deliveryStatus },
        { new: true }
      );
      res.status(200).json({
        message: "Order updated successfully",
        result: updateOrder,
      }); 
    }
  } catch (error) {
    next(error);
  }
};
