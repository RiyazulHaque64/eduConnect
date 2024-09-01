"use server";

import { signIn } from "../../auth";

export const credentialsLogin = async (email: string, password: string) => {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
