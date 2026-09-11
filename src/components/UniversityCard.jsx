import { ArrowRight, GraduationCap, Users } from "lucide-react";
export function UniversityCard({ uni }) {
  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-[0_12px_40px_rgb(15_27_61_/_0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgb(47_91_255_/_0.12)]">
      <div className="overflow-hidden rounded-2xl">
        <img
          src={uni.image}
          alt={uni.name}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <h3 className="text-xl font-bold tracking-tight text-ink">{uni.name}</h3>
        <p className="mt-1 text-sm text-muted">{uni.country}</p>
        <div className="mt-4 space-y-2 text-sm text-muted">
          <p className="flex items-center gap-2">
            <GraduationCap className="size-4 text-primary" />
            World Ranking : {uni.ranking}
          </p>
          <p className="flex items-center gap-2">
            <Users className="size-4 text-primary" />
            International Students : {uni.international}
          </p>
        </div>
        <a
          href="#book"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          Book a free consultation
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
