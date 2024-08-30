import { ILesson } from "@/interface/lesson.interface";
import { model, models, Schema } from "mongoose";

const lessonSchema = new Schema<ILesson>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  duration: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
});

export const Lesson = models.Lesson ?? model<ILesson>("Lesson", lessonSchema);
