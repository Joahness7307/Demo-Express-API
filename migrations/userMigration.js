require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB, running migration...");

    const users = [
      { name: "Admin", email: "admin@example.com", password: "password" }
    ];

    for (let user of users) {
      const exists = await User.findOne({ email: user.email });
      if (!exists) {
        await User.create(user);
        console.log(`User ${user.email} added`);
      } else {
        console.log(`User ${user.email} already exists`);
      }
    }

    mongoose.disconnect();
  })
  .catch(err => console.log(err));
