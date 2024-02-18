import express from "express";
//https://www.youtube.com/watch?v=Kkht2mwSL_I
import dotenv from "dotenv";
import mongoose, { Error } from "mongoose";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/Auth.routes.js";
const app = express();
app.use(express.json());
dotenv.config();
mongoose.connect("mongodb://127.0.0.1:27017/my-blog").then(() => {
  console.log("ok");
});

app.listen(3000, () => {
  console.log("server is runnig on port 3000");
});

app.use("/user", userRoutes);
app.use("/ath", authRoutes);
