import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  CheckSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Globe,
  GraduationCap,
  HandCoins,
  MapPin,
  MessageSquare,
  Plane,
  School,
  Send,
  Users,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ConsultationForm } from "./ConsultationForm.jsx";
import { Reveal } from "./Reveal.jsx";
import { CountUp } from "./CountUp.jsx";
import { GoldCta } from "./GoldCta.jsx";
import { UniversityCard } from "./UniversityCard.jsx";
import {
  destinations,
  faqs,
  serviceTabs,
  stats,
  testimonials,
  universities,
} from "../data/content.js";

const statIcons = [GraduationCap, Globe, Users, BookOpen];

const serviceCardIcons = {
  "University selection": School,
  Application: FileText,
  "SOP/LOR guidance": MessageSquare,
  "Document checking": CheckSquare,
  "Application submission": Send,
  "Consultancy service": Users,
  "Available scholarships": BadgeCheck,
  Eligibility: ClipboardList,
  "Tuition fees": Banknote,
  "Living cost": Wallet,
  "Funding guidance": HandCoins,
  "Application guidance": FileText,
  "Document checklist": ClipboardList,
  "Interview preparation": MessageSquare,
  "Financial documentation": Banknote,
};



export function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openDestination, setOpenDestination] = useState(0);
  const [centerIn, setCenterIn] = useState(false);
  const [fanned, setFanned] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [serviceTab, setServiceTab] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [serviceFade, setServiceFade] = useState(true);

  // 1) Center image fades in first (~1000ms)
  // 2) At ~90% of that (900ms), side images / circles / text start
  useEffect(() => {
    const t0 = window.setTimeout(() => setCenterIn(true), 40);
    const t1 = window.setTimeout(() => {
      setFanned(true);
      setSceneReady(true);
    }, 900);
    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w < 640 ? 1 : w < 768 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main>
      {/* HERO — orbits + content offset below fixed navbar (all breakpoints) */}
      <section
        id="top"
        className="relative min-h-[560px] overflow-x-clip overflow-y-hidden px-4 pb-20 scroll-mt-32 md:min-h-[680px]"
      >
        {/* Circles: absolute top clears navbar; slightly higher on mobile than content */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[4.25rem] overflow-hidden sm:top-[5rem] md:top-[6.5rem] lg:top-[7rem]">
          <div className="absolute inset-x-6 top-0 bottom-0 sm:inset-x-10 md:inset-x-[105px]">
            <div
              className={`absolute left-1/2 top-0 aspect-square w-full max-w-none -translate-x-1/2 transition-all duration-[1200ms] ease-out ${
                fanned ? "scale-100 opacity-100" : "scale-[0.35] opacity-40"
              }`}
            >
              <div className="orbit absolute inset-[22%]" />
              <div className="orbit absolute inset-[10%]" />
              <div className="orbit orbit-animate absolute inset-0 opacity-70" />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #eef1fb 70%, #eef1fb 100%)",
            }}
          />
        </div>

        {/* Content: a bit lower than the circle top so it sits below the bar cleanly */}
        <div className="relative z-10 mx-auto max-w-7xl pt-[6.5rem] sm:pt-[7.25rem] md:pt-[8.75rem] lg:pt-[9.25rem]">
          <div className="relative z-10 mx-auto flex h-44 w-full max-w-[min(100%,36rem)] items-center justify-center overflow-visible pt-2 sm:h-52 md:h-64 md:max-w-2xl md:pt-6">
            <img
              src="/images/people/hero1.jpg"
              alt=""
              className={`absolute z-[1] h-40 w-[7.25rem] rounded-md object-cover shadow-xl ring-[4px] ring-white transition-all duration-[1200ms] ease-out sm:h-48 sm:w-36 sm:ring-[5px] md:h-60 md:w-44 md:ring-[6px] ${
                fanned
                  ? "-translate-x-[3.25rem] -rotate-12 opacity-100 sm:-translate-x-[6rem] md:-translate-x-[8.25rem]"
                  : "translate-x-0 rotate-0 opacity-0"
              }`}
            />
            <img
              src="/images/people/hero2.jpg"
              alt=""
              className={`relative z-20 h-40 w-[7.25rem] rounded-md object-cover shadow-2xl ring-[4px] ring-white transition-opacity duration-[1000ms] ease-out sm:h-48 sm:w-36 sm:ring-[5px] md:h-60 md:w-44 md:ring-[6px] ${
                centerIn ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="/images/people/hero3.jpg"
              alt=""
              className={`absolute z-[1] h-40 w-[7.25rem] rounded-md object-cover shadow-xl ring-[4px] ring-white transition-all duration-[1200ms] ease-out sm:h-48 sm:w-36 sm:ring-[5px] md:h-60 md:w-44 md:ring-[6px] ${
                fanned
                  ? "translate-x-[3.25rem] rotate-12 opacity-100 sm:translate-x-[6rem] md:translate-x-[8.25rem]"
                  : "translate-x-0 rotate-0 opacity-0"
              }`}
            />
          </div>

          <div className="relative z-10 mx-auto mt-10 flex max-w-2xl flex-col items-center text-center md:mt-12">
            <p
              className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary ${
                sceneReady ? "hero-enter" : "opacity-0"
              }`}
            >
              <MapPin className="size-3.5" />
              Top global study spots
            </p>
            <h1
              className={`mt-3 text-[34px] font-bold leading-[1.12] tracking-tight text-navy md:text-[56px] ${
                sceneReady ? "hero-enter hero-enter-delay-1" : "opacity-0"
              }`}
            >
              Explore Top Study
              <br />
              <span className="text-primary">Abroad Destinations.</span>
            </h1>
            <p
              className={`mt-4 max-w-md text-[13px] leading-relaxed text-muted md:text-sm ${
                sceneReady ? "hero-enter hero-enter-delay-2" : "opacity-0"
              }`}
            >
              West Bridge helps you explore top study-abroad destinations, offering diverse
              programmes and unforgettable cultural experiences.
            </p>
            <div
              className={`mt-6 ${sceneReady ? "hero-enter hero-enter-delay-3" : "opacity-0"}`}
            >
              <GoldCta to="#book">
                Book a free consultation
              </GoldCta>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            <span className="badge-square text-primary" />
            Services
          </p>
          <h2 className="mx-auto mt-3 max-w-lg text-center text-[32px] font-bold leading-tight tracking-tight text-navy md:text-[44px]">
            Guiding Your Global Education Journey.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {serviceTabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                if (i === serviceTab) return;
                setServiceFade(false);
                window.setTimeout(() => {
                  setServiceTab(i);
                  setServiceFade(true);
                }, 180);
              }}
              className={`rounded-full px-5 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                serviceTab === i
                  ? "bg-primary text-white shadow-[0_8px_20px_rgb(59_91_255_/_0.28)]"
                  : "bg-white text-navy hover:bg-primary/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300 ease-out ${
            serviceFade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {serviceTabs[serviceTab].items.map((s, i) => {
            const Icon = serviceCardIcons[s.title] ?? Users;
            const gold = i % 2 === 1;
            return (
              <Reveal key={`${serviceTab}-${s.title}`} delay={i * 90} variant="right">
              <article className="card-lift rounded-[22px] bg-white p-7 shadow-[0_10px_30px_rgb(16_24_40_/_0.04)]">
                <span
                  className={`flex size-11 items-center justify-center rounded-full ${gold ? "bg-accent/20 text-navy" : "bg-primary/10 text-primary"}`}
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-[17px] font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.body}</p>
                <a href="#book" className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold text-primary">
                  Book a free consultation <ArrowRight className="size-3.5" />
                </a>
              </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ABOUT — centered, no 20M / 50+ badges */}
      <section id="about" className="about-grid relative scroll-mt-24 overflow-hidden py-16 text-white md:py-20">
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
              <span className="badge-square text-white" />
              About us
            </p>
            <h2 className="mt-3 text-[28px] font-bold leading-[1.2] md:text-[40px]">
              Behind Every Student&apos;s Journey Is a Team Dedicated to Making Study Abroad Simple
              and Rewarding.
            </h2>
            <GoldCta to="#book" className="mt-6">
              Book a free consultation
            </GoldCta>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <img src="/images/people/about1.jpg" alt="" className="h-64 w-full rounded-[22px] object-cover md:h-72" />
            <img src="/images/people/about2.jpg" alt="" className="h-64 w-full rounded-[22px] object-cover md:h-72" />
          </div>
        </div>
        <div className="mt-10 overflow-hidden border-t border-white/10 pt-5">
          <div className="marquee-track flex w-max gap-10 text-[12px] font-bold uppercase tracking-[0.18em] text-white/80">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex gap-10">
                <span>Tailored educational Pathways</span>
                <span>•</span>
                <span>End-to-end Guidance</span>
                <span>•</span>
                <span>Global University Network</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section id="universities" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            <span className="badge-square text-primary" />
            Universities
          </p>
          <h2 className="mt-3 text-center text-[32px] font-bold text-navy md:text-[44px]">
            Universities we are
            <br />
            partnered with
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((uni, i) => (
            <Reveal key={uni.slug} delay={i * 70}>
              <UniversityCard uni={uni} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TOP DESTINATIONS */}
      <section id="destinations" className="wave-paper scroll-mt-24 px-4 py-16 md:py-24">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            <span className="badge-square text-primary" />
            Top destinations
          </p>
          <h2 className="mt-3 text-center text-[32px] font-bold text-navy md:text-[44px]">
            Discover Your Ideal
            <br />
            Study Destination
          </h2>
        </Reveal>
        <div className="mx-auto mt-14 max-w-5xl space-y-4">
          {destinations.map((d, i) => {
            const open = openDestination === i;
            return (
              <Reveal key={d.slug} delay={i * 90} variant="up">
                <div
                  className={`overflow-hidden rounded-[28px] transition-colors ${
                    open ? "bg-white shadow-[0_14px_40px_rgb(16_24_40_/_0.05)]" : "bg-white/50 hover:bg-white/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDestination(open ? -1 : i)}
                    className="flex w-full items-center gap-4 px-6 py-4 text-left md:px-8"
                    aria-expanded={open}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-xs font-bold text-navy">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <img src={d.flag} alt="" className="h-5 w-8 shrink-0 rounded-sm object-cover" />
                    <h3 className="flex-1 text-lg font-bold text-navy md:text-xl">{d.name}</h3>
                    <ChevronDown
                      className={`size-5 shrink-0 text-muted transition-transform ${open ? "rotate-180 text-primary" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="grid items-start gap-5 px-6 pb-6 pt-1 md:grid-cols-[160px_1fr] md:px-8">
                        <img
                          src={d.image}
                          alt={d.name}
                          className={`mx-auto h-28 w-40 rounded-2xl object-cover shadow-lg ring-[6px] ring-white ${i % 2 ? "rotate-6" : "-rotate-6"}`}
                        />
                        <div className="min-w-0 w-full">
                          <p className="text-[14px] leading-relaxed text-muted">{d.blurb}</p>
                          <a href="#book" className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-primary">
                            Book a free consultation <ArrowRight className="size-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* QUOTE */}
      <section
        className="quote-band mx-4 md:mx-auto overflow-hidden rounded-[32px] px-6 py-16 text-center text-white md:mx-auto md:max-w-7xl md:py-20"
        style={{ ["--quote-image"]: "url(/images/people/quote.jpg)" }}
      >
        <img
          src="/images/people/t2.jpg"
          alt=""
          className="mx-auto size-16 rounded-full object-cover ring-4 ring-white/50"
        />
        <p className="mt-3 text-sm font-bold">Alexander Arnold</p>
        <p className="text-xs font-bold text-white/70">CEO, West Bridge</p>
        <p className="mx-auto mt-6 max-w-2xl text-[22px] font-bold leading-snug md:text-[28px]">
          &ldquo;At West Bridge, we don&apos;t just guide students abroad — we open doors to futures without
          borders.&rdquo;
        </p>
        <GoldCta to="#book" className="mt-8">
          Book a free consultation
        </GoldCta>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            <span className="badge-square text-primary" />
            Why us
          </p>
          <h2 className="mt-3 text-center text-[32px] font-bold text-navy md:text-[44px]">Why Choose Us</h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {stats.map((s, i) => {
            const Icon = statIcons[i];
            const gold = s.tone === "gold";
            return (
              <Reveal key={s.label} delay={i * 100} variant="up">
              <div
                className="card-lift flex flex-col items-center justify-center gap-4 bg-white px-4 py-9 text-center shadow-[0_14px_40px_rgb(16_24_40_/_0.06)]"
                style={{ borderRadius: 30 }}
              >
                <span
                  className={`flex size-14 items-center justify-center rounded-[18px] md:size-16 ${gold ? "bg-accent text-navy" : "bg-primary text-white"}`}
                >
                  <Icon className="size-7 md:size-8" />
                </span>
                <p className="text-[28px] font-bold leading-none text-navy md:text-[32px]">
                  <CountUp value={s.value} />
                </p>
                <p className="text-[13px] font-bold text-muted md:text-[14px]">{s.label}</p>
              </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS — Happy Student Feedback */}
      <section className="feedback-grid relative scroll-mt-24 overflow-hidden py-16 text-white md:py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Reveal>
            <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
              <span className="badge-square text-white" />
              Testimonials
            </p>
            <h2 className="mt-3 text-center text-[32px] font-bold leading-tight md:text-[44px]">
              Happy Student Feedback
            </h2>
          </Reveal>

          <div className="relative mt-12">
            <Reveal variant="up">
              <div
                className={`grid gap-2 transition-all duration-500 ease-out ${
                  visibleCount === 1
                    ? "grid-cols-1"
                    : visibleCount === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                }`}
              >
                {Array.from({ length: visibleCount }).map((_, offset) => {
                  const item =
                    testimonials[
                      (testimonialIndex + offset + testimonials.length) % testimonials.length
                    ];
                  return (
                    <article
                      key={`${item.name}-${testimonialIndex}-${offset}`}
                      className="group relative aspect-[3/3.5] w-full overflow-hidden rounded-2xl md:aspect-[3/3.65]"
                    >
                      <div className="relative h-full overflow-hidden rounded-2xl">
                        <img
                          src={item.avatar}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/45" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary from-0% via-primary/50 via-40% to-transparent to-100% opacity-0 transition duration-500 group-hover:opacity-100" />
                        <div className="relative z-10 flex h-full flex-col p-6 md:p-8">
                          <img
                            src="/images/quote-mark.png"
                            alt=""
                            className="size-[4.25rem] shrink-0 object-contain md:size-[5rem]"
                          />
                          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-white md:text-[13px]">
                            {item.label}
                          </p>
                          <p className="mt-5 flex-1 text-[17px] font-bold leading-snug text-white md:text-[19px]">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                          <p className="mt-8 text-[16px] font-bold text-white md:text-[17px]">{item.name}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() =>
                setTestimonialIndex(
                  (i) => (i - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-navy"
            >
              <ChevronLeft className="size-7" strokeWidth={2.5} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    testimonialIndex === i ? "w-7 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() =>
                setTestimonialIndex((i) => (i + 1) % testimonials.length)
              }
              className="flex size-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-navy"
            >
              <ChevronRight className="size-7" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            <span className="badge-square text-primary" />
            FAQ
          </p>
          <h2 className="mt-3 text-center text-[32px] font-bold text-navy md:text-[44px]">
            Frequently
            <br />
            Asked Questions
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 80} variant="up">
              <button
                type="button"
                onClick={() => setOpenFaq(open ? null : i)}
                className="w-full rounded-2xl bg-white px-5 py-4 text-left shadow-[0_6px_20px_rgb(16_24_40_/_0.04)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[13px] font-bold text-navy">{f.q}</p>
                  <span className="text-lg leading-none text-muted">{open ? "−" : "+"}</span>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="mt-2 pb-1 text-[13px] text-muted">{f.a}</p>
                  </div>
                </div>
              </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FORM */}
      <section id="book" className="scroll-mt-24 px-4 pb-16 pt-4">
        <Reveal variant="up">
          <ConsultationForm />
        </Reveal>
      </section>
    </main>
  );
}
