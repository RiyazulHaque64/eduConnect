import { SignupForm } from "@/components/register/SignupForm";

const RegisterPage = ({
  params: { role },
}: {
  params: Record<string, any>;
}) => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm role={role} />
      </div>
    </div>
  );
};
export default RegisterPage;
