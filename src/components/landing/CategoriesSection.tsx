import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "../shared/SectionTitle";

const categories = [
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

const CategoriesSection = () => {
  return (
    <section className="container space-y-6 py-8  md:py-12 lg:py-24">
      <div className="flex justify-between items-center">
        <SectionTitle>Categories</SectionTitle>
        <Link
          href={""}
          className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
        >
          Browse All <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link href="#" key={category.id}>
            <div className="border bg-background flex flex-col items-center justify-between gap-4 rounded-md p-6 hover:scale-105 transition-all duration-500 ease-in-out">
              <Image
                src={category.thumbnail}
                alt="categories icon"
                width={100}
                height={100}
              />
              <h2 className="font-bold">{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
