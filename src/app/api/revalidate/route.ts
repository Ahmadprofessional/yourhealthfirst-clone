import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return handleRevalidation(request);
}

export async function POST(request: NextRequest) {
  return handleRevalidation(request);
}

async function handleRevalidation(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET || "yhf-sanity-instant-revalidate";

    // Allow requests if secret matches or if in development mode
    if (secret && secret !== expectedSecret && process.env.NODE_ENV === "production") {
      return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
    }

    const tag = searchParams.get("tag");
    const path = searchParams.get("path");

    if (tag) {
      revalidateTag(tag, { expire: 0 });
    }
    // Revalidate the global Sanity tag to instantly refresh all ISR cached queries
    revalidateTag("sanity", { expire: 0 });

    if (path) {
      revalidatePath(path);
    } else {
      // Revalidate all pages across all locales
      revalidatePath("/", "layout");
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tag: tag || "sanity",
      message: "Cache purged successfully. Latest published content will serve on next request.",
    });
  } catch (err: any) {
    return NextResponse.json({ message: "Error revalidating", error: err?.message }, { status: 500 });
  }
}
