import { Testimonial } from "@/model/testimonial-model";
import { Types } from "mongoose";

export const getTestimonialsForCourse = async (courseId: string) => {
  const testimonials = await Testimonial.find({
    courseId: new Types.ObjectId(courseId),
  });
  return testimonials;
};
