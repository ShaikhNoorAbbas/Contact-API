import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { User } from "./Models/user.js";
let app = express();

app.use(bodyParser.json());

// establish connection
mongoose
  .connect("mongodb+srv://sample:sample@learning.cavmn17.mongodb.net/", {
    dbName: "learning",
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((error) => console.log(`Error: ${error}`));

// user Routes
// @api dsc -> register
//@api method -> post
//@api endpoint -> /api/user/register

app.post("/api/user/register", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Data from FrontEnd", req.body);

  // Validating Before Sending Data to Database
  if ((name == "" || email == "", password == "")) {
    return res.json({ message: "All Fields are Required" });
  } else {
    // Checking if Email Already Exists or not
    let foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.json({
        message: `${email} Already Exists in Database`,
        success: false,
      });
    } else {
      // Sending Data to database
      const response = await User.create({ name, email, password });
      return res.json({
        message: "Data Saved to Database",
        body: response,
      });
    }
  }
});

let port = 1000;

app.listen(port, () => console.log(`Port is Running on ${port}`));
