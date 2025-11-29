import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouters.js";

let app = express();

app.use(express.json());

// establish connection
mongoose
  .connect("mongodb+srv://sample:sample@learning.cavmn17.mongodb.net/", {
    dbName: "learning",
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((error) => console.log(`Error: ${error}`));

app.use("/api/user", userRouter);

let port = 1000;

app.listen(port, () => console.log(`Port is Running on ${port}`));
