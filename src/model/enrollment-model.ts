import { IEnrollment } from "@/interface/enrollment-interface";
import { model, models, Schema } from "mongoose";

const enrollmentSchema = new Schema<IEnrollment>({
  userId: {
    type: Schema.ObjectId,
    ref: "User",
  },
  courseId: {
    type: Schema.ObjectId,
    ref: "Course",
  },
  enrollmentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: false,
  },
  method: {
    type: String,
    required: false,
  },
});

export const Enrollment =
  models.Enrollment ?? model<IEnrollment>("Enrollment", enrollmentSchema);
