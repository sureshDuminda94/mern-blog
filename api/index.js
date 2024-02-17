import express from "express";
//https://www.youtube.com/watch?v=Kkht2mwSL_I
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from './routes/user.routes.js'
const app = express();
dotenv.config();
mongoose.connect("mongodb://127.0.0.1:27017/my-blog").then(() => {
  console.log("ok");
});

app.listen(3000, () => {
  console.log("server is runnig on port 3000");
});


app.use("/user",userRoutes)
