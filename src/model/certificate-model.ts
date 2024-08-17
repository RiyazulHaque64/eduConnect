import { ICertificate } from "@/interface/certificate-interface";
import { model, models, Schema } from "mongoose";

const certificateSchema = new Schema<ICertificate>({
  user_id: {
    type: Schema.ObjectId,
    required: true,
    ref: "User",
  },
  course_id: {
    type: Schema.ObjectId,
    required: true,
    ref: "Course",
  },
  enrollment_id: {
    type: Schema.ObjectId,
    required: true,
  },
  certificate_link: {
    type: String,
  },
});

export const Certificate =
  models.Certificate ?? model<ICertificate>("Certificate", certificateSchema);
