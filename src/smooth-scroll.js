import { scrollToHash, initLenis } from "./lenis.js";

/** Global capture listener + ensure Lenis is running. */
export function initSmoothScroll() {
  initLenis();

  document.addEventListener(
    "click",
    (e) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest?.("a[href^='#']");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      try {
        const url = new URL(link.href, window.location.href);
        if (url.pathname !== window.location.pathname) return;
      } catch {
        /* ignore */
      }

      e.preventDefault();
      scrollToHash(href);
    },
    true,
  );
}
