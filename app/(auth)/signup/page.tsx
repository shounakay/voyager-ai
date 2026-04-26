import { SignupForm } from "./_components/SignupForm";
import { SsoAuth } from "./_components/SsoAuth";

export default function SignupPage() {
  return (
    <article className="flex flex-col items-center justify-center mx-auto px-8 py-16 w-full bg-amber-100 h-full gap-4 basis-1/2">
      <section className="flex flex-col gap-5 w-md">
        <h1 className="text-5xl font-bold font-serif text-center text-primary">
          Start your story
        </h1>
        <SsoAuth />
      </section>
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 border-t border-gray-500 w-28"></div>
        <span className="text-sm text-gray-500 font-medium">OR</span>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
      <SignupForm />
    </article>
  );
}
