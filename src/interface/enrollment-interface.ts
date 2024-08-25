import { Types } from "mongoose";

export interface IEnrollment {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
  enrollmentDate: Date;
  status: string;
  completionDate: Date;
  method: string;
}
