import { Link } from "react-router-dom";
import { ASSETS } from "../assetsManifest";

const items = [
  {
    title: "Music Production",
    body: "Recording, mixing, and mastering.",
    icon: ASSETS.musicProductionIcon,
    link: "/music",
  },
  {
    title: "Digital Cinema",
    body: "Commercials, documentaries, and promos.",
    icon: ASSETS.digitalCinemaIcon,
    link: "/film",
  },
  {
    title: "Digital Content",
    body: "Social-first, cinematic campaigns.",
    icon: ASSETS.digitalContentIcons,
    link: "/digital",
  },
];

function IconBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="grid h-12 w-20 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <img src={src} alt={alt} className="h-8 w-8 object-contain opacity-90" loading="lazy" />
    </div>
  );
}

export function WhatWeDo() {
  return (
    <section className="mt-12">
      <div className="mp-card p-6 sm:p-8 lg:p-10" data-animate="fade-up" data-animate-group>
        <div className="text-center font-display text-4xl sm:text-5xl lg:text-6xl text-white/90">
          What We <span className="text-mp-accent">Do</span>
        </div>
        <div className="mx-auto mt-3 h-px w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-7 grid gap-6 sm:grid-cols-3" >
          {items.map((i) => (
            <Link
              key={i.title}
              to={i.link}
              className="mp-hover rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:bg-white/[0.05]"
              data-hover="tilt"
              data-animate-item
            >
              <div className="flex items-start gap-4">
                <IconBox src={i.icon} alt="" />
                <div>
                  <div className="font-display text-2xl text-white/90">
                    {i.title}
                  </div>
                  <div className="mt-2 text-base leading-7 text-mp-muted">
                    {i.body}
                  </div>
                </div>
              </div>
              <div className="mt-20 flex items-center justify-between text-xs text-mp-faint">
                <span>Concept → Delivery</span>
                <button className="inline-flex rounded-lg bg-mp-accent px-3 py-1 text-lg font-medium text-white transition hover:bg-mp-accent2 hover:text-mp-accent">
                  Explore
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

