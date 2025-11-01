import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)",
  "/ account(.*)",
  "/transaction(.*)"])

const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }
});

// NOTE: Arcjet (rate-limiting / bot protection) was removed from middleware
// to avoid importing edge-incompatible packages into Next Edge runtime. If you
// need Arcjet protection, run it on server routes or upgrade @arcjet/next and
// related dependencies so they are compatible with the Edge runtime.

export default clerk;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};