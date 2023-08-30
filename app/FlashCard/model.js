const mongoose = require("mongoose");
const ERole = require("./enums/role");
const socials = require("./enums/socialTypes");
const providers = require("./enums/providerType");

const Schema = mongoose.Schema;

let FlashCardSchema = new Schema(
  {
    name: { type: String, default: "" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
const FlashCard = mongoose.model("flashCard", FlashCardSchema);
module.exports = FlashCard;
