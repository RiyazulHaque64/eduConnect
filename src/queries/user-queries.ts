import { User } from "@/model/user-model";

export const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ email }).lean();
  return user;
};
