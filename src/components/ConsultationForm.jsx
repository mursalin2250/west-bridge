import { useEffect, useRef, useState } from "react";
import { Check, CheckCircle2, ChevronDown } from "lucide-react";
import { destinations } from "../data/content.js";
import { cn } from "../utils.js";

const fields = [
  { name: "firstName", label: "First Name *", placeholder: "Enter first name", type: "text" },
  { name: "lastName", label: "Last Name *", placeholder: "Enter last name", type: "text" },
  { name: "mobile", label: "Mobile Number *", placeholder: "Enter your mobile number", type: "tel" },
  { name: "email", label: "Email Address *", placeholder: "Enter email address", type: "email" },
];

const selects = [
  {
    name: "destination",
    label: "Preferred Study Destination *",
    options: destinations.map((d) => d.name),
    placeholder: "Select destination",
  },
  {
    name: "method",
    label: "Choose Method Of Counseling *",
    options: ["In-person", "Video call", "Phone"],
    placeholder: "Select method",
  },
  {
    name: "fund",
    label: "Education Fund Type *",
    options: ["Self-funded", "Family sponsored", "Scholarship", "Education loan"],
    placeholder: "Select fund type",
  },
  {
    name: "level",
    label: "Select Study Level *",
    options: ["Foundation", "Undergraduate", "Postgraduate", "PhD"],
    placeholder: "Select your study level",
  },
];

function FancySelect({ name, label, options, placeholder, value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="block" ref={rootRef}>
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input type="hidden" name={name} value={value} required />
      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-12 w-full items-center justify-between rounded-full border bg-soft/60 px-5 pr-4 text-left text-sm outline-none transition",
            "focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15",
            open ? "border-primary bg-surface ring-2 ring-primary/15" : "border-border",
            value ? "text-ink font-medium" : "text-muted/70",
          )}
        >
          <span className="truncate">{value || placeholder}</span>
          <ChevronDown
            className={cn(
              "ml-3 size-4 shrink-0 text-muted transition-transform duration-300",
              open && "rotate-180 text-primary",
            )}
          />
        </button>

        <div
          className={cn(
            "absolute left-0 right-0 z-30 mt-2 origin-top overflow-hidden rounded-2xl border border-border bg-white shadow-[0_16px_40px_rgb(15_27_61_/_0.12)] transition-all duration-200 ease-out",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0",
          )}
        >
          <ul role="listbox" className="max-h-56 overflow-auto py-2">
            {options.map((o) => {
              const selected = value === o;
              return (
                <li key={o} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(o);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition",
                      selected
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-navy hover:bg-soft",
                    )}
                  >
                    <span>{o}</span>
                    {selected ? <Check className="size-4 shrink-0 text-primary" /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ConsultationForm({ heading = true }) {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [selectValues, setSelectValues] = useState({
    destination: "",
    method: "",
    fund: "",
    level: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      mobile: String(fd.get("mobile") || ""),
      email: String(fd.get("email") || ""),
      destination: String(fd.get("destination") || ""),
      method: String(fd.get("method") || ""),
      fund: String(fd.get("fund") || ""),
      level: String(fd.get("level") || ""),
    };

    if (!payload.firstName || !payload.email) {
      setError("Please fill in the required fields.");
      return;
    }
    if (!payload.destination || !payload.method || !payload.fund || !payload.level) {
      setError("Please complete all dropdown fields.");
      return;
    }

    try {
      const raw = localStorage.getItem("wb-bookings") || "[]";
      const bookings = JSON.parse(raw);
      const list = Array.isArray(bookings) ? bookings : [];
      list.push({ ...payload, at: new Date().toISOString() });
      localStorage.setItem("wb-bookings", JSON.stringify(list));
    } catch {
      // storage may be blocked in some browsers
    }

    setDone(true);
    setError("");
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-surface px-8 py-16 text-center shadow-[0_20px_60px_rgb(15_27_61_/_0.08)]">
        <CheckCircle2 className="mx-auto size-12 text-primary" />
        <h3 className="mt-4 text-2xl font-semibold text-ink">You’re booked in.</h3>
        <p className="mt-2 text-muted">
          A counsellor will reach out within one business day to confirm your free consultation.
        </p>
      </div>
    );
  }

  const inputClass =
    "h-12 w-full rounded-full border border-border bg-soft/60 px-5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/15";

  return (
    <div>
      {heading ? (
        <h2 className="mb-10 text-center text-4xl font-semibold tracking-tight text-navy md:text-5xl">
          Book a free consultation.
        </h2>
      ) : null}
      <form
        onSubmit={onSubmit}
        className="mx-auto max-w-5xl rounded-3xl bg-surface px-6 py-8 shadow-[0_20px_60px_rgb(15_27_61_/_0.08)] md:px-10 md:py-10"
      >
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span className="mb-2 block text-sm font-medium text-ink">{f.label}</span>
              <input
                type={f.type}
                name={f.name}
                required
                placeholder={f.placeholder}
                className={inputClass}
              />
            </label>
          ))}
          {selects.map((s) => (
            <FancySelect
              key={s.name}
              name={s.name}
              label={s.label}
              options={s.options}
              placeholder={s.placeholder}
              value={selectValues[s.name]}
              onChange={(v) => setSelectValues((prev) => ({ ...prev, [s.name]: v }))}
            />
          ))}
        </div>
        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          className="mt-8 rounded-full bg-accent px-8 py-3 text-sm font-bold text-navy shadow-[0_10px_24px_rgb(245_196_0_/_0.28)] transition hover:brightness-105"
        >
          Book a free consultation
        </button>
      </form>
    </div>
  );
}
