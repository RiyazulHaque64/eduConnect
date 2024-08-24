import CourseDetails from "@/components/courses/courseDetails/CourseDetails";
import CourseDetailsIntro from "@/components/courses/courseDetails/CourseDetailsIntro";
import RelatedCourses from "@/components/courses/courseDetails/RelatedCourses";
import Testimonials from "@/components/courses/courseDetails/Testimonials";
import { getCourseDetails } from "@/queries/course-queries";

const courses = [
  {
    id: 1,
    title: "Design",
    thumbnail: "/assets/images/categories/design.jpg",
  },

  {
    id: 3,
    title: "Development",
    thumbnail: "/assets/images/categories/development.jpg",
  },
  {
    id: 4,
    title: "Marketing",
    thumbnail: "/assets/images/categories/marketing.jpg",
  },
  {
    id: 5,
    title: "IT & Software",
    thumbnail: "/assets/images/categories/it_software.jpg",
  },
  {
    id: 6,
    title: "Personal Development",
    thumbnail: "/assets/images/categories/personal_development.jpg",
  },
  {
    id: 7,
    title: "Business",
    thumbnail: "/assets/images/categories/business.jpg",
  },
  {
    id: 8,
    title: "Photography",
    thumbnail: "/assets/images/categories/photography.jpg",
  },
  {
    id: 9,
    title: "Music",
    thumbnail: "/assets/images/categories/music.jpg",
  },
];
const SingleCoursePage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const course = await getCourseDetails(id);
  return (
    <>
      <CourseDetailsIntro course={course} />
      <CourseDetails course={course} />
      {/* Testimonials */}
      {course?.testimonials && (
        <Testimonials testimonials={course.testimonials} />
      )}
      {/* Releated Course */}
      <RelatedCourses courses={courses} />
    </>
  );
};
export default SingleCoursePage;
