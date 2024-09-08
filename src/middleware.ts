import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "../auth.config";
import { LOGIN, PRIVATE_ROUTES } from "./lib/routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isAuthenticated = !!req.auth;
  const isPrivateRoute = PRIVATE_ROUTES.find((route) =>
    req.nextUrl.pathname.startsWith(route)
  );
  if (isPrivateRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(LOGIN, req.url));
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
