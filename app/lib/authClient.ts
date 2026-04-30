import { createAuthClient } from "better-auth/client";

export const {
  signIn,
  signUp,
  signOut,
  getSession,
  useSession,
  resetPassword,
} = createAuthClient({
  sessionOptions: {
    refetchInterval: 0,
    refetchOnWindowFocus: true,
    refetchWhenOffline: false,
  },
});
