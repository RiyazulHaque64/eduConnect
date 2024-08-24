import FilterCourseMobile from "@/components/courses/FilterCourseMobile";
import SearchCourse from "@/components/courses/SearchCourse";
import SortCourse from "@/components/courses/SortCourse";

const CoursesPage = () => {
  return (
    <section className="container space-y-6 py-6 dark:bg-transparent mt-20">
      <div className="flex items-baseline justify-between  border-gray-200 border-b pb-6 flex-col gap-4 lg:flex-row">
        <SearchCourse />
        <div className="flex items-center justify-end gap-2 max-lg:w-full">
          <SortCourse />
          <FilterCourseMobile />
        </div>
      </div>
      {/* <ActiveFilters
        filter={{
          categories: ["development"],
          price: ["free"],
          sort: "",
        }}
      /> */}
    </section>
  );
};

export default CoursesPage;
