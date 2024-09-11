import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import { getCourseDetails } from "@/queries/course-queries";
import { getUserByEmail } from "@/queries/user-queries";
import { CircleCheck, XCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

const EnrollSuccess = async ({
  searchParams: { session_id, course_id },
}: {
  searchParams: any;
}) => {
  if (!session_id && !(session_id as string).startsWith("cs_")) {
    throw new Error("Please provide a valid session id");
  }

  const userSession = await auth();
  if (!userSession?.user?.email) {
    redirect("/login");
  }
  const course = await getCourseDetails(course_id);
  const user = (await getUserByEmail(userSession?.user?.email)) as any;
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });
  const paymentIntent = checkoutSession?.payment_intent as any;
  if (paymentIntent?.status === "succeeded") {
    // Send email
  }
  const customerName = user?.firstName + " " + user?.lastName;
  const customerEmail = user?.email;
  const courseName = course?.title;

  console.log(customerEmail, customerName, courseName);
  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center mt-32">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        {paymentIntent?.status === "succeeded" ? (
          <>
            <CircleCheck className="w-32 h-32 bg-success rounded-full p-0 text-green-500" />
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Congratulations, {customerName}! Your Enrollment was Successful
              for {courseName}
            </h1>
          </>
        ) : (
          <>
            <XCircle className="w-32 h-32 bg-success rounded-full p-0 text-red-500" />
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Oh, {customerName}! Your Enrollment was not successful for{" "}
              {courseName}
            </h1>
          </>
        )}
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/courses">Browse Courses</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/think-in-a-redux-way/introduction">Play Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EnrollSuccess;
