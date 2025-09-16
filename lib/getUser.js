// lib/getUser.ts
import { currentUser } from "@clerk/nextjs/server";
import { cache } from "react";

// Cache so multiple calls in the same request don't hit Clerk API repeatedly
export const getUser = cache(async () => {
  return await currentUser();
});
