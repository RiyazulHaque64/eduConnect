"use client";

import { createCheckoutSession } from "@/actions/stripe";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const EnrollCourse = () => {
  const handleEnrollCourse = async (formData: FormData) => {
    const { url } = await createCheckoutSession(formData);
    url && window.location.assign(url);
  };
  return (
    <form action={handleEnrollCourse}>
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
