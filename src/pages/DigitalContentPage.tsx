import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const serveCards = [
  { title: "Creators", description: "Social-first storytelling and content strategy." },
  { title: "Brands", description: "Campaigns designed to feel premium across channels." },
  { title: "Artists", description: "Visual identity and content for every release." },
];

const originals = [
  { title: "Series & Episodes", description: "Multi-part runs built for brand and fan engagement." },
  { title: "Launch Campaigns", description: "High-impact content with a cinematic edge." },
  { title: "Visual Stories", description: "Original films made for social and streaming audiences." },
];

export function DigitalContentPage() {
  return (
    <div className="grid gap-14 pb-16 pt-10 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(178,63,34,0.14),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Digital Content</div>
          <h1 className="mt-6 font-display text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Content production for the modern feed and premium launch.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mp-muted sm:text-lg">
            Cinematic digital content that supports strategy, builds momentum, and looks refined on every screen.
          </p>
          <div className="mt-8 flex justify-center">
            <a className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" href="/contact">
              Create Content
            </a>
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <SectionHeading
          eyebrow="Modern positioning"
          title="Not just posts—visual campaigns that feel premium."
          description="We help content perform with cinematic execution, intentional pacing, and a clear distribution-ready package."
        />
      </section>

      <section className="grid gap-6 sm:grid-cols-3" data-animate="fade-up">
        {serveCards.map((item) => (
          <div key={item.title} className="mp-card rounded-[28px] border border-white/10 bg-black/20 p-6 mp-hover" data-hover="tilt">
            <div className="font-display text-2xl text-white">{item.title}</div>
            <p className="mt-4 text-base leading-7 text-mp-muted">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <SectionHeading
          eyebrow="Originals showcase"
          title="Custom content that feels like a brand-owned production."
          description="We build original films, campaign suites, and series concepts with production value that stands out."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {originals.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-6 shadow-card mp-hover" data-hover="tilt">
              <div className="font-display text-2xl text-white">{item.title}</div>
              <p className="mt-4 text-base leading-7 text-mp-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="font-display text-4xl text-white">Original content, delivered with precision.</div>
            <p className="mt-4 max-w-3xl text-base leading-8 text-mp-muted">
              Every package is built for the platform, the audience, and the look you want to own.
            </p>
          </div>
          <div className="flex justify-center">
            <Link className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Start Digital
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
