
const usefulLinksLeft = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Universities", href: "#universities" },
  { label: "Services", href: "#services" },
];

const usefulLinksRight = [
  { label: "Destinations", href: "#destinations" },
  { label: "Courses", href: "#universities" },
  { label: "Contact us", href: "#book" },
];

const policies = [
  { label: "Terms & Services", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-8 bg-primary pt-14 pb-0 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-8">
        {/* Brand column — left */}
        <div className="max-w-sm shrink-0">
          <a href="#top" className="inline-flex items-center gap-2.5">
            <img src="/images/logo-mark-white.png" alt="" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight text-white">West Bridge</span>
          </a>

          <div className="mt-5 flex items-center gap-4 text-white/70">
            <a href="#" aria-label="Instagram" className="transition hover:text-white">
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="transition hover:text-white">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="transition hover:text-white">
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
          </div>

          <p className="mt-5 text-[14px] leading-relaxed text-white/70">
            West Bridge helps students explore top study-abroad destinations, offering diverse
            programmes, expert guidance, and unforgettable cultural experiences.
          </p>
        </div>

        {/* Links + Policies — right */}
        <div className="flex flex-wrap gap-12 sm:gap-16 lg:ml-auto lg:justify-end lg:gap-20">
          <div>
            <h3 className="text-[15px] font-bold text-white">Useful Links</h3>
            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 text-[14px] text-white/70">
              <div className="flex flex-col gap-3">
                {usefulLinksLeft.map((l) => (
                  <a key={l.label} href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {usefulLinksRight.map((l) => (
                  <a key={l.label} href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-white">Policies</h3>
            <div className="mt-5 flex flex-col gap-3 text-[14px] text-white/70">
              {policies.map((l) => (
                <a key={l.label} href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-6 py-5 text-[13px] text-white/70 lg:px-8">
          © 2026 Copyright – West Bridge Consultancy
        </p>
      </div>
    </footer>
  );
}
