import { doSocialLogin } from "@/actions";

const SocialLogin = () => {
  return (
    <div className="mt-4 text-center">
      <form action={doSocialLogin}>
        <div>
          <button
            name="action"
            type="submit"
            value="google"
            className="bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-800 w-full"
          >
            Signin with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialLogin;
