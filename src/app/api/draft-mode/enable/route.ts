import { draftMode, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const redirectUrl =
    searchParams.get("sanity-preview-path") ||
    searchParams.get("redirect") ||
    "/en";

  // Enable Next.js draft mode
  const draft = await draftMode();
  draft.enable();

  try {
    const cookieStore = await cookies();
    const bypassCookie = cookieStore.get("__prerender_bypass");
    if (bypassCookie?.value) {
      const isSecure = process.env.NODE_ENV === "production";
      cookieStore.set({
        name: "__prerender_bypass",
        value: bypassCookie.value,
        httpOnly: true,
        path: "/",
        sameSite: isSecure ? "none" : "lax",
        secure: isSecure,
      });
    }
  } catch {
    // fallback if cookie store mutation is restricted
  }

  return redirect(redirectUrl);
}
