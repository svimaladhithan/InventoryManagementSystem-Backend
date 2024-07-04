import Product from "../Models/productModel.js";
import { errorHandler } from "../Utils/Error.js";

export const createProduct = async (req, res, next) => {
  const { name, price, category, description, quantity } = req.body;
  if (
    !name ||
    !price ||
    !category ||
    !description ||
    !quantity ||
    name === "" ||
    price === "" ||
    category === "" ||
    description === "" ||
    quantity === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const newProduct = new Product({
    name,
    price,
    category,
    description,
    quantity,
  });
  try {
    await newProduct.save();
    res
      .status(200)
      .json({ message: "Product created successfully", result: newProduct });
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({ message: "Products fetched successfully", result: products });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { name, price, category, description, quantity } = req.body;
    if (
      name === "" ||
      price === "" ||
      category === "" ||
      description === "" ||
      quantity === ""
    ) {
      return next(errorHandler(400, "All fields are required"));
    } else {
      const updateProduct = await Product.findByIdAndUpdate(
        productId,
        { name, price, category, description, quantity },
        { new: true }
      );
      res
        .status(200)
        .json({ message: "Product updated successfully", result: updateProduct });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
