import { Link } from "react-router-dom";
import heroImage from "../assets/music production/hero.png";
import soundImage from "../assets/music production/your sound section.png";
import talentImage from "../assets/music production/talent section.png";
import singersImage from "../assets/music production/singers.png";
import rappersImage from "../assets/music production/creative rappers.png";
import newTalentsImage from "../assets/music production/new talents.png";
import bigNamesImage from "../assets/music production/big names.png";

const suiteItems = [
  {
    title: "Lyrics Writing",
    description: "Authentic, memorable, and tailored to your style & audience.",
  },
  {
    title: "Composition",
    description: "Original melodies & arrangements built to move people.",
  },
  {
    title: "Mixing & Mastering",
    description: "Industry-level sound quality, ready for radio, streaming, and stages.",
  },
  {
    title: "Recording",
    description: "Studio-grade vocals and instrumentation with clarity & emotion.",
  },
];

const talentRows = [
  {
    label: "Singers & Songwriters",
    image: singersImage,
    description: "If you're ready to create music that feels right, sounds great, and actually reaches people we're your team.",
  },
  {
    label: "Creative Rappers with a message",
    image: rappersImage,
  },
  {
    label: "New talents ready to go pro",
    image: newTalentsImage,
  },
  {
    label: "Big names looking for next-level quality",
    image: bigNamesImage,
  },
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
    <div className="grid gap-14 pb-16 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <img
          src={heroImage}
          alt="Music Production"
          className="h-[500px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="mt-5 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Music Production
          </h1>
        </div>
      </section>

      <section className="mp-card grid gap-8 overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft lg:grid-cols-[1fr_1fr]" data-animate="fade-up">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Your <span className="text-mp-accent">Sound</span>
            <br />
            Amplified to the <span className="text-mp-accent">World</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted sm:text-lg">
            From raw lyrics to radio-ready tracks, we help artists create music that connects, cuts through, and lasts. Ready to produce your next hit?
          </p>
          <div className="mt-8">
            <Link className="inline-flex rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={soundImage} alt="Your Sound" className="h-full min-h-96 w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="mp-card grid gap-8 lg:grid-cols-[1fr_1fr] overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft" data-animate="fade-up">
        <div className="relative overflow-hidden">
          <img src={talentImage} alt="Talent" className="h-full min-h-96 w-full object-cover" loading="lazy" />
        </div>
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Talent Isn’t Enough
            <br />
            Your <span className="text-mp-accent">Music</span> Deserves Production That Matches Its <span className="text-mp-accent">Potential</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted">
            You've got the voice. The vision. The message. But without expert production, it's just another track lost in the noise. At Limited, we don't just “make songs.” We craft sonic experiences that elevate your brand, your artistry, and your reach.
          </p>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Our Complete Music Production <span className="text-mp-accent">Suite</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-8 text-mp-muted">
            We work closely with each artist step by step from first idea to final release.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {suiteItems.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-black/20 p-8">
              <h3 className="font-display text-2xl text-mp-accent">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-mp-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] items-center">
          <div>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              Made for Artists Who Want
              <br />
              More Than Just <span className="text-mp-accent">a Beat</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-mp-muted">
              If you're ready to create music that feels right, sounds great, and actually reaches people we’re your team.
            </p>
          </div>
          <div className="space-y-6">
            {talentRows.map((row, index) => (
              <div key={row.label} className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr] items-center rounded-[28px] border border-white/10 bg-black/15 p-5">
                <div>
                  <div className="font-display text-xl text-mp-accent">{row.label}</div>
                </div>
                <div className="overflow-hidden rounded-[24px]">
                  <img src={row.image} alt={row.label} className="h-32 w-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Our Work Speaks <span className="text-mp-accent">Volumes</span>
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[28px] border border-white/10 bg-black/15 p-8">
              <div className="text-2xl leading-9 text-white/90">“{item.quote}”</div>
              <div className="mt-6 font-medium uppercase tracking-[0.18em] text-mp-faint">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12 border border-white/10 bg-black/20" data-animate="fade-up">
        <div className="text-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Let’s Create Your Sound <span className="text-mp-accent">Together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-mp-muted">
            We’re here to take your ideas from voice notes to viral tracks. Book a call, send a demo, or just say hi we’re ready when you are.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
