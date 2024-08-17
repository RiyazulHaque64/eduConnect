import { Types } from "mongoose";

export interface ITestimonial {
  content: string;
  rating: number;
  courseId: Types.ObjectId;
  userId: Types.ObjectId;
}
