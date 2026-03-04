import p1 from "../assets/EQV.png";
import p2 from "../assets/Movie.png";
import p3 from "../assets/Quality Inspection dashboard.png";
import p4 from "../assets/KPI Dashboard.png";

const PROJECTS = [
  {
    title: "Ekqvist Design",
    role: "UX/UI + HTML, CSS, TypeScript, React, Node.js • 2025",
    desc: "A portfolio site for a furniture designer, built to reflect the brand's aesthetic while making it easy for visitors to explore work and request a custom quote. Focus on clear visual hierarchy, intuitive navigation, and a contact flow that converts browsers into clients.",
    thumb: p1,
    offset: "md:translate-y-[6px]",
    height: "h-[260px] md:h-[420px]",
  },
  {
    title: "Movie Library",
    role: "UX/UI + React, CSS, TypeScript, Node.js • 2025",
    desc: "A Netflix-inspired movie library where the UX goal was making browsing, filtering and saving movies feel immediate and personal. Users can save films to a personal list via a heart icon — designed to be intuitive and frictionless.",
    thumb: p2,
    offset: "md:-translate-y-[20px]",
    height: "h-[260px] md:h-[360px]",
  },
  {
    title: "Quality Inspection Dashboard",
    role: "UX/UI + React, Tailwind, Node.js, SAP OData, Cloud Foundry • 2026",
    desc: "A production management tool for high-pressure industrial environments where speed and clarity are critical. Focus on reducing cognitive load — fast filtering, clear status indicators, and a layout built for quick decisions on the floor.",
    thumb: p3,
    offset: "md:-translate-y-[10px]",
    height: "h-[260px] md:h-[420px]",
  },
  {
    title: "Supplier Portal KPI Dashboard",
    role: "UX/UI + Neptune DXP, JavaScript, CSS • 2025",
    desc: "A real-time KPI dashboard giving decision-makers immediate clarity on performance. Structured around visual hierarchy and integration transparency — so users always know what's happening and what needs attention.",
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
          <p className="text-[13px] text-gray-600">{p.role}</p>
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
