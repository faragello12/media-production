import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const services = [
  { title: "Lyrics & Composition", description: "Crafted songs and polished arrangements." },
  { title: "Recording", description: "Studio sessions with premium audio capture." },
  { title: "Mixing", description: "Depth, clarity, and balance for every track." },
  { title: "Mastering", description: "A finished sound that translates across systems." },
];

const targets = [
  { title: "Solo artists", description: "Release-ready music with cinematic production." },
  { title: "Bands", description: "A cohesive sound and visual direction for every project." },
  { title: "Creators", description: "Content-ready music for launches, reels, and visuals." },
];

const testimonials = [
  {
    quote: "They turned our studio sessions into a record that finally matched our vision.",
    name: "Amina, recording artist",
  },
  {
    quote: "The music production felt effortless, and the final mix sounded enormous.",
    name: "Noah, indie band",
  },
];

export function MusicProductionPage() {
  return (
    <div className="grid gap-14 pb-16 pt-10 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(178,63,34,0.14),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Music Production</div>
          <h1 className="mt-6 font-display text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Production for artists who want music that sounds <span className="text-mp-accent">larger</span> than life.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mp-muted sm:text-lg">
            We build songs and music visuals with premium sound design, cinematic arrangement, and artist-focused care.
          </p>
          <div className="mt-8 flex justify-center">
            <a className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" href="/contact">
              Start Music
            </a>
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <SectionHeading
          eyebrow="Artist positioning"
          title="A recording process built around the artist, not the studio." 
          description="From first draft to final master, we keep the work expressive, cinematic, and ready for release."
        />
      </section>

      <section className="grid gap-6 sm:grid-cols-2" data-animate-group>
        {services.map((item) => (
          <div key={item.title} className="mp-card rounded-[28px] border border-white/10 bg-black/20 p-8 mp-hover" data-hover="tilt" data-animate-item>
            <h3 className="font-display text-2xl text-white">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-mp-muted">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <SectionHeading
          eyebrow="Target artists"
          title="For artists who want a strong sound and visual identity."
          description="We work with solo artists, bands, and creators who need a polished music production partner."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {targets.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-6 mp-hover" data-hover="tilt">
              <h3 className="font-display text-2xl text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-mp-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2" data-animate-group>
        {testimonials.map((item) => (
          <div key={item.name} className="mp-card rounded-[28px] border border-white/10 bg-black/20 p-8" data-animate-item>
            <div className="text-white/90 text-lg leading-8">“{item.quote}”</div>
            <div className="mt-6 text-sm uppercase tracking-[0.2em] text-mp-faint">{item.name}</div>
          </div>
        ))}
      </section>

      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="font-display text-4xl text-white">Production that honors your sound.</div>
            <p className="mt-4 max-w-3xl text-base leading-8 text-mp-muted">
              Work with a team that understands music, visual storytelling, and the release process.
            </p>
          </div>
          <div className="flex justify-center">
            <Link className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Begin Music Production
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
