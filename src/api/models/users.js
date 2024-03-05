const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({

  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  rol: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
  imagenPerfil: { type: String, required: false },
  email: { type: String, required: false },
  anoNacimiento: { type: Number, required: false },
}, {
  timestamps: true,
  collection: "users",
});

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("users", userSchema, "users");
module.exports = User;