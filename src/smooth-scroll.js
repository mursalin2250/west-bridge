/** Smooth in-page scrolling with fixed-navbar offset. */

function navbarOffset() {
  const nav = document.querySelector("header nav");
  const header = document.querySelector("header");
  const el = nav || header;
  if (!el) return 96;
  return el.getBoundingClientRect().height + 20;
}

function getScrollTop() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function setScrollTop(top) {
  // Keep both in sync — overflow-x on html/body can make one of them the real scroller
  document.documentElement.scrollTop = top;
  document.body.scrollTop = top;
  window.scrollTo(0, top);
}

function animateScrollTo(targetY, duration = 700) {
  const startY = getScrollTop();
  const delta = targetY - startY;
  if (Math.abs(delta) < 1) return;

  const start = performance.now();

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    // easeInOutCubic
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    setScrollTop(startY + delta * eased);
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

export function initSmoothScroll() {
  document.addEventListener(
    "click",
    (e) => {
      // ignore modified clicks / new tab
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const link = e.target.closest("a[href^='#']");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      // only same-page hashes
      if (link.pathname && link.pathname !== window.location.pathname) return;

      const id = href.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      const top =
        id === "top"
          ? 0
          : Math.max(0, target.getBoundingClientRect().top + getScrollTop() - navbarOffset());

      animateScrollTo(top, 750);

      if (history.pushState) {
        history.pushState(null, "", href);
      }
    },
    true, // capture so it runs before other handlers
  );
}
