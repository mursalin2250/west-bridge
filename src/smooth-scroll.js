/** Smooth-scroll for in-page # links, with offset for the fixed navbar. */
export function initSmoothScroll() {
  const offset = () => {
    const header = document.querySelector("header");
    return (header?.getBoundingClientRect().height ?? 80) + 12;
  };

  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - offset();
    window.scrollTo({ top, behavior: "smooth" });

    // update URL without jump
    history.pushState(null, "", id);
  });
}
