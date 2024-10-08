import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import CourseCurriculam from "./CourseCurriculam";
import CourseInstructor from "./CourseInstructor";
import CourseOverview from "./CourseOverview";

const CourseDetails = ({ course }: { course: any }) => {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container">
        <span className=" px-4 py-0.5 rounded-full text-xs font-medium inline-block bg-green-500 text-white">
          {course?.category?.title}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
          {course?.title}
        </h3>
        <p className="mt-3 text-gray-600 text-sm">Master React JS & Next JS</p>
        {/*  */}
        <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
          <div className="flex items-center gap-2">
            <Image
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
              src="/assets/images/profile.jpg"
              alt="sumit saha"
            />
            <p className="font-bold">{`${course.instructor?.firstName} ${course.instructor?.lastName}`}</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-success font-semibold">Last Updated: </span>
            <span>{formatDate(course?.modifiedOn)}</span>
          </div>
        </div>

        {/* Tab */}
        <div className="my-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Carriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview">
              <CourseOverview course={course} />
            </TabsContent>
            <TabsContent value="curriculum">
              <CourseCurriculam course={course} />
            </TabsContent>
            <TabsContent value="instructor">
              <CourseInstructor course={course} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
