import { ObjectId } from "mongoose";

export interface ICourse {
  _id: ObjectId;
  title: string;
  subtitle: string;
  learning: string[];
  description: string;
  thumbnail: string;
  modules: ObjectId;
  price: number;
  active: boolean;
  category: ObjectId;
  instructor: ObjectId;
  testimonials: ObjectId[];
  quizSet: ObjectId;
  createdOn: Date;
  modifiedOn: Date;
}
