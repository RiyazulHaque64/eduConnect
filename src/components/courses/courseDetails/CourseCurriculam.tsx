import { Accordion } from "@/components/ui/accordion";
import { BookCheck, Clock10, Radio } from "lucide-react";
import CourseModuleList from "./Module/CourseModuleList";

const CourseCurriculam = ({ course }: { course: any }) => {
  return (
    <>
      <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
        <span className="flex items-center gap-1.5">
          <BookCheck className="w-4 h-4" />
          {course.modules?.length} Chapters
        </span>
        <span className="flex items-center gap-1.5">
          <Clock10 className="w-4 h-4" />
          50+ Hours
        </span>
        <span className="flex items-center gap-1.5">
          <Radio className="w-4 h-4" />4 Live Class
        </span>
      </div>
      <Accordion
        defaultValue={["item-1", "item-2", "item-3"]}
        type="multiple"
        className="w-full"
      >
        {course?.modules?.map((module: any, index: number) => (
          <CourseModuleList key={index} module={module} />
        ))}
      </Accordion>
    </>
  );
};

export default CourseCurriculam;
