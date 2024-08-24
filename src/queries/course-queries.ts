import { ICourse } from "@/interface/course-interface";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module-model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";

export const getCourseList = async () => {
  const courses = await Course.find()
    .select([
      "category",
      "instructor",
      "testimonials",
      "modules",
      "title",
      "thumbnail",
      "price",
    ])
    .populate({
      path: "category",
      model: Category,
    })
    .populate({ path: "instructor", model: User })
    .populate({ path: "testimonials", model: Testimonial })
    .populate({ path: "modules", model: Module })
    .lean();
  return courses;
};

export const getCourseDetails = async (id: string): Promise<ICourse | null> => {
  const course = await Course.findById(id)
    .populate({
      path: "category",
      model: Category,
    })
    .populate({ path: "instructor", model: User })
    .populate({
      path: "testimonials",
      model: Testimonial,
      populate: { path: "userId", model: User },
    })
    .populate({ path: "modules", model: Module });
  return course;
};
