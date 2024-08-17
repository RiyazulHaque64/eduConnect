import { ICourse } from "@/interface/course-interface";
import { model, models, Schema } from "mongoose";

const categorySchema = new Schema<ICourse>({
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
});

export const Category =
  models.Category ?? model<ICourse>("Category", categorySchema);
