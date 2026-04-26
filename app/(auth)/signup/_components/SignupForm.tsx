"use client";

import { useAppForm } from "@/app/lib/form";
import { formOptions } from "@tanstack/react-form-nextjs";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters long"),
  email: z.email({ error: "Please enter a valid email" }),
  password: z.string().min(8, "Password must be atleast 8 characters long"),
});

const formOpts = formOptions({
  defaultValues: {
    name: "",
    email: "",
    password: "",
  },
  onSubmit: (a) => {
    console.log("onSubmit", a);
  },
  validators: {
    onSubmit: schema,
  },
});

export const SignupForm = () => {
  const { handleSubmit, AppField, AppForm, SubmitButton } = useAppForm({
    ...formOpts,
  });
  return (
    <form className="flex flex-col gap-3 w-2/3">
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
