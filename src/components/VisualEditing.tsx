"use client";

import { VisualEditing as NextSanityVisualEditing } from "next-sanity/visual-editing";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function VisualEditing() {
  const router = useRouter();

  const handleRefresh = useCallback(async (payload: any) => {
    // Instantly refresh the server components when an edit is made in Sanity
    router.refresh();
  }, [router]);

  return <NextSanityVisualEditing basePath="/studio" refresh={handleRefresh} />;
}
