import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// Import the CommonJS module using createRequire
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const chatRouter = require("./routes/chatRoute.cjs");

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/chat", chatRouter); // This now uses the CommonJS router

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT : " + port));

/*import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import chatRouter from "./routes/chatRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000; //if the port is available it will use it if not it will use 4000 as port
connectDB();

// middlewares
app.use(express.json()); //wathever request we will get will be given will be passed using json
app.use(cors()); //we can acces the backend from any ip
// Serve images statically (----for images upload----)
app.use("/images", express.static("images"));

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/chat", chatRouter);

app.get("/", (req, res) => {
  res.send("API Working"); //whenver using local port or port 4000 it will display API Working
});

app.listen(port, () => console.log("Server started on PORT : " + port));
*/
