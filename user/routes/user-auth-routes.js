//api/user/auth

//Step1: import express
const express = require("express");

const userAuthController = require("../controller/user-auth-controller");

//Step2: Create Router
const router = express.Router();

//Step 3: Configure Routes
router.post("/register", userAuthController.register);
router.post("/login", userAuthController.login);

module.exports = router;
