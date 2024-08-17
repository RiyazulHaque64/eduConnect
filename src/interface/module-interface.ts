import { Types } from "mongoose";

export interface IModule {
  title: string;
  description: string;
  status: string;
  slug: string;
  course: Types.ObjectId;
  lessonIds: Types.ObjectId[];
}
