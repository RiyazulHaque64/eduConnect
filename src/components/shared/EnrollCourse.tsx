"use client";

import { createCheckoutSession } from "@/actions/stripe";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const EnrollCourse = ({ course }: { course: any }) => {
  console.log({ course });
  const handleEnrollCourse = async (formData: FormData) => {
    const { url } = await createCheckoutSession(formData);
    url && window.location.assign(url);
  };

  return (
    <form action={handleEnrollCourse}>
      <input type="hidden" name="courseId" value={course._id} />
      <input type="hidden" name="courseName" value={course.title} />
      <input type="hidden" name="coursePrice" value={course.price} />
      <Button
        type="submit"
        value="enroll"
        name="enroll"
        variant="ghost"
        className="text-xs text-sky-700 h-7 gap-1"
      >
        Enroll
        <ArrowRight className="w-3" />
      </Button>
    </form>
  );
};

export default EnrollCourse;
