"use client";

import GoogleIcon from "../../../_assets/icons/google.svg";
import GithubIcon from "../../../_assets/icons/github.svg";
import { signIn } from "@/app/lib/authClient";

export const SsoAuth = () => {
  const handleGoogleSignIn = async () => {
    // Implement Google Sign-In logic here
    const data = await signIn.social({
      provider: "google",
      callbackURL: "/",
      // disableRedirect: true
    });
    console.log("SSO Google data", data);
  };
  return (
    <section className="flex flex-col gap-4 justify-center items-center w-full">
      <button
        className="bg-neutral-800 text-neutral-200 text-sm font-medium rounded-md py-3 px-4 cursor-pointer flex justify-center items-center gap-2 hover:bg-neutral-700 transition-colors w-2/3"
        type="button"
        name="github"
      >
        <GithubIcon className="w-5 h-5 fill-neutral-100 transition-colors" />
        <span className="text-neutral-100 leading-2 font-semibold text-sm">
          Continue with GitHub
        </span>
      </button>
      <button
        className="bg-neutral-50 text-neutral-800 justify-center text-sm font-medium rounded-md px-4 py-3 cursor-pointer flex items-center gap-2 hover:bg-neutral-100 transition-colors w-2/3"
        type="button"
        name="google"
        onClick={handleGoogleSignIn}
      >
        {/* <Image src="/google.svg" alt="Google" className="" width={20} height={20} /> */}
        <GoogleIcon className="w-5 h-5 hover:opacity-40 text-primary fill-primary stroke-primary transition-colors" />
        <span className="text-neutral-900 leading-2 font-semibold text-sm">
          Continue with Google
        </span>
      </button>
    </section>
  );
};
