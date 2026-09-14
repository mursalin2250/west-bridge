import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GoldCta } from "../GoldCta.jsx";
import { navItems } from "../../data/content.js";
import { cn, scrollToHash } from "../../utils.js";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full px-3 pt-3 sm:pt-5 md:px-6 lg:px-8">
      <div className="nav-slide-down pointer-events-auto relative">
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center rounded-full transition-all duration-300",
            "px-[14px] py-[12px] sm:px-[18px] sm:py-[14px] md:px-[22px]",
            scrolled
              ? "bg-primary text-white shadow-[0_14px_40px_rgb(59_91_255_/_0.32)]"
              : "bg-transparent text-primary shadow-none",
          )}
        >
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2.5 pr-3"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#top");
            }}
          >
            <img
              src={scrolled ? "/images/logo-mark-white.png" : "/images/logo-mark-navy.png"}
              alt=""
              className="h-8 w-auto"
              style={
                scrolled
                  ? undefined
                  : {
                      filter:
                        "brightness(0) saturate(100%) invert(32%) sepia(93%) saturate(2500%) hue-rotate(220deg) brightness(100%) contrast(101%)",
                    }
              }
            />
            <span
              className={cn(
                "hidden text-[18px] font-bold tracking-wide transition-colors duration-300 sm:inline",
                scrolled ? "text-white" : "text-primary",
              )}
            >
              West Bridge
            </span>
          </a>

          <div className="hidden flex-1 items-center justify-center gap-8 text-[15px] font-bold lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
                className={cn(
                  "transition-colors duration-300",
                  scrolled
                    ? "text-white hover:text-[#a8b8ff]"
                    : "text-primary hover:text-primary/70",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden sm:contents">
              <GoldCta
                to="#book"
                tone={scrolled ? "white" : "primary"}
                className="max-w-[240px] md:max-w-none"
              >
                <span className="truncate">Book your free consultation</span>
              </GoldCta>
            </span>
            <button
              type="button"
              className={cn(
                "flex size-11 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
                scrolled ? "bg-white/10 text-white" : "bg-primary/10 text-primary",
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — smooth height + fade */}
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity,transform] duration-300 ease-out lg:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0">
            <div
              className={cn(
                "mx-auto mt-2 max-w-7xl origin-top rounded-3xl p-4 shadow-xl transition-transform duration-300 ease-out",
                open ? "translate-y-0 scale-100" : "-translate-y-2 scale-[0.98]",
                scrolled ? "bg-primary text-white" : "bg-white text-navy",
              )}
            >
              {navItems.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    // wait for menu close paint
                    window.setTimeout(() => scrollToHash(item.href), 50);
                  }}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-[15px] font-bold transition-all duration-300",
                    open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0",
                    scrolled ? "hover:bg-white/10 hover:text-[#a8b8ff]" : "hover:bg-primary/5",
                  )}
                  style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
