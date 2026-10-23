"use client";

import { VisualEditing as NextSanityVisualEditing } from "next-sanity/visual-editing";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function VisualEditing() {
  const router = useRouter();
  const [isIframe, setIsIframe] = useState(true);

  useEffect(() => {
    // Check if the current window is embedded in Sanity Studio presentation iframe
    setIsIframe(window.self !== window.top);
  }, []);

  const handleRefresh = useCallback(async () => {
    // Instantly refresh server components when an edit is published or draft updated
    router.refresh();
  }, [router]);

  return (
    <>
      <NextSanityVisualEditing refresh={handleRefresh} />
      {!isIframe && (
        <aside
          role="region"
          aria-label="Editorial preview controls"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[99999] bg-[#0c1410]/95 text-[#fbf8f3] border border-[#c4a45a]/50 shadow-2xl rounded-full px-5 py-2.5 flex items-center gap-4 text-xs font-sans backdrop-blur-md transition-all duration-300 pointer-events-auto"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c4a45a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c4a45a]"></span>
            </span>
            <span className="font-medium text-[#fbf8f3] tracking-wide">
              Preview Mode Active
            </span>
          </div>

          <div className="h-3.5 w-px bg-white/20" />

          <a
            href="/studio"
            className="text-[#c4a45a] hover:text-[#d8b86d] font-semibold tracking-wide transition-colors"
          >
            Open Studio
          </a>

          <div className="h-3.5 w-px bg-white/20" />

          <a
            href="/api/draft-mode/disable"
            className="text-white/70 hover:text-white transition-colors underline-offset-2 hover:underline"
            title="Turn off edit overlays and view normal public website"
          >
            Exit Preview
          </a>
        </aside>
      )}
    </>
  );
}
