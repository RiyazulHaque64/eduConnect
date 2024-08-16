import { Button } from "@/components/ui/button";
import { getCourses } from "@/queries/course-queries";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  return <Button>Login</Button>;
}
