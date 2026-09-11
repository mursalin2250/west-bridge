import { useEffect, useRef, useState } from "react";

/** Animates numeric portion of strings like "767+", "7.6M", "76K" when in view. */
export function CountUp({ value, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) return;

    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOut cubic
          const eased = 1 - Math.pow(1 - t, 3);
          const current = target * eased;
          setDisplay(
            `${decimals ? current.toFixed(decimals) : Math.round(current).toLocaleString()}${suffix}`,
          );
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(value);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
