const express = require("express");
const {
  registerUser,
  loginUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Register user here
router.post("/register", registerUser);

// Login user here
router.post("/login", loginUser);

// Add user routes here
router.post("/add", addUser);

// Update user routes here
router.put("/update/:id", updateUser);

// Delete user routes here
router.delete("/delete/:id", deleteUser);

module.exports = router;
