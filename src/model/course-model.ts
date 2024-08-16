import { ICourse } from "@/interface/course-interface";
import { model, models, Schema } from "mongoose";

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },

  modules: {
    type: [Schema.ObjectId],
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  category: {
    type: Schema.ObjectId,
    required: false,
  },
  instructor: {
    type: Schema.ObjectId,
    required: false,
  },
  testimonials: {
    type: [Schema.ObjectId],
    required: false,
  },
  quizSet: {
    type: Schema.ObjectId,
    required: false,
  },
});

export const Course = models.Course ?? model<ICourse>("Course", courseSchema);
