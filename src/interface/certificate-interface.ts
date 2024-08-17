import { Types } from "mongoose";

export interface ICertificate {
  user_id: Types.ObjectId;
  course_id: Types.ObjectId;
  enrollment_id: Types.ObjectId;
  certificate_link: string;
}
