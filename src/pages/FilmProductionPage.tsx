import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const steps = [
  { title: "Concept", description: "Story, treatment, and visual direction tailored to your idea." },
  { title: "Production", description: "On-set direction, lighting, and camera work that feels cinematic." },
  { title: "Post", description: "Editing, grade, audio polish, and finishing for every platform." },
  { title: "Delivery", description: "Ready-for-release assets built for broadcast and digital launch." },
];

const audience = [
  { title: "Brands", description: "Audience-driven film work for launches and campaigns." },
  { title: "Directors", description: "Collaborative support for narrative, promo, and documentary shoots." },
  { title: "Artists", description: "Music films and visual storytelling for releases and tours." },
];

export function FilmProductionPage() {
  return (
    <div className="grid gap-14 pb-16 pt-10 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(178,63,34,0.14),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Film Production</div>
          <h1 className="mt-6 font-display text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Film production that feels <span className="text-mp-accent">crafted</span>, not rushed.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mp-muted sm:text-lg">
            We build cinematic content with precision at every stage, from story through editorial finish.
          </p>
          <div className="mt-8 flex justify-center">
            <a className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" href="/contact">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <SectionHeading
          eyebrow="Intro"
          title="We turn scripts and concepts into cinematic work." 
          description="Our film process is built for directors, artists, and brands who need premium production without compromise."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2" data-animate-group>
        {steps.map((item, index) => (
          <div key={item.title} className="mp-card rounded-[28px] border border-white/10 bg-black/20 p-8" data-animate-item>
            <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Step {index + 1}</div>
            <h3 className="mt-4 font-display text-3xl text-white">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-mp-muted">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <SectionHeading
          eyebrow="Target audience"
          title="For creators who want better film with less friction."
          description="This service is for teams and artists who need elevated production, clear direction, and polished delivery."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {audience.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-6 mp-hover" data-hover="tilt">
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-mp-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="font-display text-4xl text-white">Bring your film idea into focus.</div>
            <p className="mt-4 max-w-3xl text-base leading-8 text-mp-muted">
              We manage the full production path so your team can stay creative and launch confidently.
            </p>
          </div>
          <div className="flex justify-center">
            <Link className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Talk to Film
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
