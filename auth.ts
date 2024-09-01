import { User } from "@/model/user-model";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          const isMatch = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (isMatch) {
            return user;
          } else {
            console.log("password mismatch");
            throw new Error("Check your password");
          }
        } else {
          console.log("user not found");
          throw new Error("User not found");
        }
        return user ? user : null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
