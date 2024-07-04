import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import authRoute from "./Routers/authRouter.js";
import productRoute from "./Routers/productRouter.js";
import vendorRoute from "./Routers/vendorRouter.js";
import orderRoute from "./Routers/orderRouter.js";
import userRoute from "./Routers/userRouter.js";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

//error handler

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

//API routes
app.use("/api/auth", authRoute);
app.use("/api", productRoute);
app.use("/api", vendorRoute);
app.use("/api", orderRoute);
app.use("/api/user", userRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on the port`);
});
