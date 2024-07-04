import Vendor from "../Models/vendorModel.js";
import { errorHandler } from "../Utils/Error.js";

export const createVendor = async (req, res, next) => {
  const { name, email, phone, address,gst_no, products } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !gst_no||
    !products ||
    name === "" ||
    email == "" ||
    phone == "" ||
    address == "" ||
    gst_no == "" ||
    products === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }
  const newVendor= new Vendor({
    name,
    email,
    phone,
    address, 
    gst_no,
    products,
  })
  try {
    await newVendor.save();
    res.status(200).json({message:"Vendor created successfully",data: newVendor})
  } catch (error) {
    next(error); 
  }
};

export const getVendors= async(req,res,next)=>{
    try {
        const vendors= await Vendor.find()
        res.status(200).json({message:"Vendors fetched successfully", data:vendors})
    } catch (error) {
        next(error);
    }
}
