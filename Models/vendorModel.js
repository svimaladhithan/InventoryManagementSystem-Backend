import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true, 
  },
  address: {
    type: String,
    required: true,
  },
  gst_no:{
    type: String,
    required: true,
    unique: true,
  },
  products: {
    type: Array,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
