//api/user

//Step1: Import express
const express = require("express");
const userController = require("../controller/user");

//Step2: Create Router
const router = express.Router();

//Step3: Configure Routes
router.put("/", userController.updateUser);
router.get("/:id", userController.getById)
router.delete("/:id", userController.deleteUser)

module.exports = router;
