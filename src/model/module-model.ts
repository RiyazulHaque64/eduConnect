import { IModule } from "@/interface/module-interface";
import { model, models, Schema } from "mongoose";

const moduleSchema = new Schema<IModule>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "active",
  },
  slug: {
    type: String,
    required: false,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  lessonIds: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

export const Module = models.Module ?? model<IModule>("Module", moduleSchema);
