import { scrollToHash as lenisScrollToHash } from "./lenis.js";

/** Join class names for Tailwind. */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Smoothly scroll to a hash via Lenis. */
export function scrollToHash(hash) {
  lenisScrollToHash(hash);
}

/** onClick helper for anchor tags */
export function handleHashClick(e) {
  const link = e.currentTarget;
  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#") || href === "#") return;
  e.preventDefault();
  scrollToHash(href);
}
