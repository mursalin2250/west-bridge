import { ChevronRight } from "lucide-react";
import { cn } from "../utils.js";

export function GoldCta({ to, children, className, tone = "gold" }) {
  const classes = cn(
    "group relative inline-flex items-center overflow-hidden rounded-full text-[15px] font-bold",
    "gap-0 py-1 pr-1 pl-6",
    "transition-shadow duration-300",
    tone === "gold" &&
      "bg-accent text-navy shadow-[0_10px_24px_rgb(245_196_0_/_0.28)] hover:shadow-[0_12px_28px_rgb(245_196_0_/_0.35)]",
    tone === "white" && "bg-white text-navy shadow-sm",
    tone === "primary" && "bg-primary text-white shadow-[0_10px_24px_rgb(59_91_255_/_0.28)]",
    className,
  );

  const arrowShell = cn(
    "relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full",
    tone === "gold" && "bg-white text-navy",
    tone === "white" && "bg-accent text-navy",
    tone === "primary" && "bg-white text-navy",
  );

  return (
    <a href={to} className={classes}>
      <span className="relative mr-3 block h-6 overflow-hidden leading-6">
        <span className="block h-6 whitespace-nowrap transition-transform duration-300 ease-out group-hover:-translate-y-6">
          {children}
        </span>
        <span
          className="absolute left-0 top-0 block h-6 w-full whitespace-nowrap translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0"
          aria-hidden
        >
          {children}
        </span>
      </span>

      <span className={arrowShell}>
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-full">
          <ChevronRight className="size-5" />
        </span>
        <span
          className="absolute inset-0 flex -translate-x-full items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-0"
          aria-hidden
        >
          <ChevronRight className="size-5" />
        </span>
      </span>
    </a>
  );
}
