const express = require("express");
const {
  registerUser,
  loginUser
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Add user routes here

// Update user routes here

// Delete user routes here

module.exports = router;
