import { IEnrollment } from "@/interface/enrollment-interface";
import { Enrollment } from "@/model/enrollment-model";
import { Types } from "mongoose";

export const getEnrollmentsForCourse = async (
  courseId: string
): Promise<IEnrollment[] | null> => {
  const enrollments = await Enrollment.find({
    courseId: new Types.ObjectId(courseId),
  }).lean<IEnrollment[]>();
  return enrollments;
};
