import { Link } from "react-router-dom";
import heroImage from "../assets/about us assets/1.png";
import serviceImageA from "../assets/about us assets/2.png";
import serviceImageB from "../assets/about us assets/3.png";
import serviceImageC from "../assets/about us assets/4.png";
import missionImage from "../assets/about us assets/5.png";
import missionImage2 from "../assets/about us assets/6.png";
import missionImage3 from "../assets/about us assets/7.png";
import iconArt from "../assets/about us assets/Vector.png";
import iconClarity from "../assets/about us assets/Vector-1.png";
import iconBold from "../assets/about us assets/Vector-2.png";

const serviceBlocks = [
  {
    title: "Music Production",
    description: "For major artists and emerging voices",
    image: serviceImageB,
  },
  {
    title: "Film Production",
    description: "From indie brilliance to brand documentaries",
    image: serviceImageC,
  },
  {
    title: "Digital Content",
    description: "Personal branding, campaigns and storytelling at scale",
    image: missionImage,
  },
];

const collaborators = [
  "Platinum-selling artists",
  "Rising independent talents",
  "Influential public figures",
  "Purpose-driven corporate brands",
];

const values = [
  {
    icon: iconArt,
    title: "Art Meets Strategy",
    text: "We mix raw creativity with clear objectives.",
  },
  {
    icon: iconClarity,
    title: "Clarity & Collaboration",
    text: "Every great project starts with honest conversations.",
  },
  {
    icon: iconBold,
    title: "Bold Execution",
    text: "We go all in on your vision.",
  },
  {
    icon: iconArt,
    title: "Impact Over Hype",
    text: "We create work that lasts.",
  },
];

export function AboutUsPage() {
  return (
    <div className="grid gap-14 pb-16 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <img
          src={heroImage}
          alt="About Limited Media Production"
          className="h-[420px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="mt-5 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              About Us
            </h1>
          </div>
        </div>
      </section>

      <section className="mp-card overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft" data-animate="fade-up">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="font-display leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl">
              We Don’t Just Create <span className="text-mp-accent">Content</span>
              <br />
              We Build <span className="text-mp-accent">Culture</span>
              <br />
              One Frame at a <span className="text-mp-accent">Time</span>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-mp-muted sm:text-lg">
              At Limited Media Production, we give creatives, public figures and brands the power to turn ideas into impactful visual experiences through world-class music, film, and content production.
            </p>
            <div className="mt-8">
              <button className="rounded-lg bg-mp-accent px-7 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" onClick={() => window.location.href = "/contact"}>
                Get in touch
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden border-l border-white/10 lg:border-l-0 lg:border-t lg:border-t-white/10">
            <img src={serviceImageA} alt="Studio setup" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-6 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Who We Are</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              A Creative Force With Business <span className="text-mp-accent">Precision</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-mp-muted">
              We&apos;re a Cairo-based media production company with a global mindset. From the studio to the set, we specialize in:
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {serviceBlocks.map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-[50px] border border-white/10 bg-black/15 shadow-card">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-lg text-white">{item.title}</div>
                  <p className="mt-2 text-sm text-mp-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Our Mission</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              We Exist to Turn Talent Into <span className="text-mp-accent">Legacy</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-mp-muted">
              In a world full of noise, we help you stand out not with trends, but with timeless quality. Whether you&apos;re launching your first track, producing a campaign, or filming your next breakthrough film, we&apos;re the team that sees the potential in your vision and brings it to life.
            </p>
            <div className="mt-8">
              <Link className="rounded-lg bg-mp-accent px-7 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/film">
                Our Services
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-black/10">
            <img src={missionImage2} alt="Mission" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">We proudly collaborate with</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {collaborators.map((item) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-black/15 px-6 py-5 text-white/90">
                {item}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-mp-muted">
            Our clients come to us because they want more than just “content.” They want to make an impact and they trust Limited to deliver that with consistency, creativity, and clarity.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-4" data-animate="fade-up">
        {values.map((item) => (
          <div key={item.title} className="h-50 rounded-[28px] border border-white/10 bg-black/20 p-6 text-center mp-hover" data-hover="tilt">
            <div className="mx-auto h-12 w-12 overflow-hidden rounded-3xl bg-white/5">
              <img src={item.icon} alt="" className="h-full w-full object-contain p-3" loading="lazy" />
            </div>
            <div className="mt-5 font-display text-xl text-white">{item.title}</div>
            <p className="mt-3 text-sm leading-7 text-mp-muted">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Final note</div>
          <h2 className="mt-4 font-display text-5xl leading-tight text-white">
            Let’s Create Something That <span className="text-mp-accent">Matters</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mp-muted">
            If you’re ready to turn your ideas into professional, powerful visuals you’ve just found your creative home.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
