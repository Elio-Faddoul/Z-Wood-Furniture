import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  placeOrderRazorpay,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middlewear/adminAuth.js";
import authUser from "../middlewear/auth.js";

const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/Stripe", authUser, placeOrderStripe);
//orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

//User Feature
orderRouter.post("/userorders", authUser, userOrders);

//verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
