import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  imageUrl: {
    type: String,
    required: [true, "Please add an image"],
  },
  googleId: {
    type: String,
    required: [true, "Please add google id"],
    select: false,
  },
  accessToken: {
    type: String,
    required: [true, "Please add access token"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Sign JWT and return
UserSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export default mongoose.model("User", UserSchema);
