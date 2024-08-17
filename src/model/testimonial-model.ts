import { ITestimonial } from "@/interface/testimonial-interface";
import { model, models, Schema } from "mongoose";

const testimonialSchema = new Schema<ITestimonial>({
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const Testimonial =
  models.Testimonial ?? model<ITestimonial>("Testimonial", testimonialSchema);
