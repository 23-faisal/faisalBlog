import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

const port = 3000;

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on ${port}!!!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth/", authRouter);
