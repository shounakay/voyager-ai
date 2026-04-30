"use client";

import { useAppForm } from "@/app/lib/form";
import { signUpEmail } from "@/app/lib/formActions";
import { formOptions, initialFormState } from "@tanstack/react-form-nextjs";
import { useActionState } from "react";
import { email, z } from "zod";

interface IFormDefaultValues {
  name: string;
  email: string;
  password: string;
}

const defaultValues: IFormDefaultValues = {
  name: "",
  email: "",
  password: "",
};

const schema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters long"),
  email: z.email({ error: "Please enter a valid email" }),
  password: z.string().min(8, "Password must be atleast 8 characters long"),
});

const formOpts = formOptions({
  defaultValues,
  onSubmit: (a) => {
    console.log("!!!!onSubmit!!!!", a);
  },
  validators: {
    onSubmit: schema,
  },
});

export const SignupForm = () => {
  const { handleSubmit, AppField, AppForm, SubmitButton } = useAppForm({
    ...formOpts,
  });
  console.log("initialFormState", initialFormState);
  const [state, action, isPending] = useActionState(signUpEmail, null);
  console.log("signup email state", { state, isPending });
  return (
    <form
      className="flex flex-col gap-3 w-2/3"
      action={action}
      onSubmit={handleSubmit}
    >
      <AppField
        name="name"
        children={({ TextField }) => (
          <TextField label="Full Name" placeholder="Enter your full name" />
        )}
      />
      <AppField
        name="email"
        children={({ TextField }) => (
          <TextField label="Email" placeholder="Enter you email" />
        )}
      />
      <AppField
        name="password"
        children={({ PasswordField }) => <PasswordField label="Password" />}
      />
      <AppForm>
        <SubmitButton label="Create Account" />
      </AppForm>
    </form>
  );
};
