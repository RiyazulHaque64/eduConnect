import { User } from "@/model/user-model";
import { dbConnect } from "@/service/mongo";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const user = await request.json();
  await dbConnect();
  const hashedPassword = await bcrypt.hash(user.password, 5);
  try {
    await User.create({ ...user, password: hashedPassword });
    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
