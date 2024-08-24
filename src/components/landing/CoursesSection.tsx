import { getCourseList } from "@/queries/course-queries";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import CourseCard from "../courses/CourseCard";
import { SectionTitle } from "../shared/SectionTitle";

const CoursesSection = async () => {
  const courses = await getCourseList();
  return (
    <section className="container space-y-6 py-8  md:py-12 lg:py-24">
      <div className="flex justify-between items-center">
        <SectionTitle>Courses</SectionTitle>
        <Link
          href="/courses"
          className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
        >
          Browse All <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {courses.map((course: any) => (
          <CourseCard key={course._id.toString()} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
