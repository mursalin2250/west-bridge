import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { destinations } from "../data/content.js";

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

export function ConsultationForm({ heading = true }) {
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

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

  const selectClass =
    inputClass +
    " appearance-none pr-12 bg-[length:1rem] bg-[right_1.15rem_center] bg-no-repeat";

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
            <label key={s.name} className="block">
              <span className="mb-2 block text-sm font-medium text-ink">{s.label}</span>
              <select
                name={s.name}
                required
                defaultValue=""
                className={selectClass}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23667085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                }}
              >
                <option value="" disabled>
                  {s.placeholder}
                </option>
                {s.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
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
