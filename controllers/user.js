import { User } from "../Models/user.js";
import bcrypt from "bcryptjs";

export let register = async (req, res) => {
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
      // Hashing Data before sending
      let hashPassword = await bcrypt.hash(password, 10);
      // Sending Data to database
      const response = await User.create({
        name,
        email,
        password: hashPassword,
      });
      return res.json({
        message: "Data Saved to Database",
        success: true,
        body: response,
      });
    }
  }
};
