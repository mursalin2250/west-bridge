import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis = null;
let rafId = 0;

function navbarOffset() {
  const nav = document.querySelector("header nav");
  if (nav) return -(nav.getBoundingClientRect().height + 24);
  return -100;
}

/** Start Lenis smooth scrolling (wheel + touch + programmatic). */
export function initLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic — responsive, no slow start lag
    smoothWheel: true,
    touchMultiplier: 1.5,
    wheelMultiplier: 1,
    autoRaf: false,
  });

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return lenis;
}

export function getLenis() {
  return lenis;
}

/** Scroll to a hash using Lenis (falls back to window if needed). */
export function scrollToHash(hash) {
  if (!hash || hash === "#") return;

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const instance = lenis || initLenis();

  if (id === "top") {
    instance.scrollTo(0, {
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      immediate: false,
    });
  } else {
    const el = document.getElementById(id);
    if (!el) return;
    instance.scrollTo(el, {
      offset: navbarOffset(),
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      immediate: false,
    });
  }

  if (hash.startsWith("#") && history.pushState) {
    history.pushState(null, "", hash);
  }
}

export function destroyLenis() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}
