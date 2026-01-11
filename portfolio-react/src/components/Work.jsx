import p1 from "../assets/EQV.png";
import p2 from "../assets/Movie.png";
import p3 from "../assets/Quality Inspection dashboard.png";
import p4 from "../assets/KPI Dashboard.png";

const PROJECTS = [
  {
    title: "Ekqvist Design",
    year: "2025",
    role: "UX + Fullstack",
    desc: "A clean, easy-to-navigate site for a furniture designer, built to showcase work and support custom requests via a contact form. Tech: JavaScript, HTML, CSS.",
    thumb: p1,
    offset: "md:translate-y-[6px]",
    height: "h-[260px] md:h-[420px]",
  },
  {
    title: "Movie Library",
    year: "2025",
    role: "UX + Fullstack",
    desc: "A Netflix-inspired movie library with search and favourites (heart + saved list) powered by an external Movie API. Tech: React, CSS, JavaScript, Node.js.",
    thumb: p2,
    offset: "md:-translate-y-[20px]",
    height: "h-[260px] md:h-[360px]",
  },
  {
    title: "Quality Inspection Dashboard",
    year: "2026",
    role: "UX + Fullstack",
    desc: "Production Management app for quality inspections—designed for fast overview, filtering, and clear status handling in a data-heavy flow. Tech: React, Tailwind, Node.js, Express, SAP S/4HANA OData, Cloud Foundry.",
    thumb: p3,
    offset: "md:-translate-y-[10px]",
    height: "h-[260px] md:h-[420px]",
  },
  {
    title: "Supplier Portal KPI Dashboard",
    year: "2025",
    role: "UX + Fullstack",
    desc: "Neptune DXP supplier portal dashboard with real-time KPI updates, built to support quick decisions through hierarchy and clear integration cards. Tech: Neptune DXP, Javascript, CSS.",
    thumb: p4,
    offset: "md:translate-y-[12px]",
    height: "h-[260px] md:h-[360px]",
  },
];

function Tile({ p }) {
  return (
    <article className={["group", p.offset].join(" ")}>
      <div className="bg-white border border-gray-200">
        <img
          src={p.thumb}
          alt={`${p.title} thumbnail`}
          className={[
            "w-full",
            p.height,
            "object-contain p-5 md:p-6 bg-white",
            "transition-all duration-300 ease-out",
            "group-hover:grayscale",
            "group-hover:contrast-125",
            "group-hover:brightness-90",
          ].join(" ")}
        />
      </div>

      <div className="mt-5 space-y-2">
        <div>
          <h3 className="text-[16px] leading-[2.05] text-gray-800 font-normal">
            {p.title}
          </h3>
          <p className="text-[13px] text-gray-600">
            {p.role} • {p.year}
          </p>
        </div>

        <p className="text-[16px] leading-[2.05] text-gray-800">{p.desc}</p>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <h2 className="text-xs uppercase tracking-[0.28em] text-gray-500">
            Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {PROJECTS.map((p) => (
            <Tile key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
