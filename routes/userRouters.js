import express from "express";
import { register, login } from "../controllers/userController.js";

const routers = express.Router();

// user Route Register
// @api dsc -> register
//@api method -> post
//@api endpoint -> /api/user/register

routers.post("/register", register);

// user Route Login
// @api dsc -> login
//@api method -> post
//@api endpoint -> /api/user/login

routers.post("/login", login);

export default routers;
