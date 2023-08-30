const mongoose = require("mongoose");
const ERole = require("./enums/role");
const socials = require("./enums/socialTypes");
const providers = require("./enums/providerType");

const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: { type: String, default: "" },
    email: { type: String },
    password: { type: String },
    avatar: { type: String, default: "" },
  },
  { timestamps: true }
);
const User = mongoose.model("users", UserSchema);
module.exports = User;
