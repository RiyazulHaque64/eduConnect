import { IUser } from "@/interface/user-interface";
import { model, models, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  socialMedia: {
    type: Object,
    required: false,
  },
  profilePicture: {
    type: String,
    required: false,
  },
  designation: {
    type: String,
    required: false,
  },
});

export const User = models.User ?? model<IUser>("User", userSchema);
