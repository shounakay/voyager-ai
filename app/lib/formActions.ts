"use server";

import { auth } from "./auth";

export const signUpEmail = async (prevState: any, formData: FormData) => {
  console.log("$$$$$$$%%%%formData", formData);
  const { user, token } = await auth.api.signUpEmail({
    // returnHeaders: true,
    body: {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      password: formData.get("password") as string,
    },
  });
  console.log("** Server Action Sign In Email***", { user, token });
  //   return data;
};
