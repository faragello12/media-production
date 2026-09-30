import { Link } from "react-router-dom";
import heroImage from "../assets/digital assets/hero.webp";
import modernContentImage from "../assets/digital assets/modern content section.webp";
import fehaEhLogo from "../assets/digital assets/feha-eh.webp";
import belHawaLogo from "../assets/digital assets/bel-hawa.webp";

const contentTypes = [
  {
    title: "Public Figures",
    description: "Talk shows, podcasts, video series & personal branding",
    accent: true,
  },
  {
    title: "Brands",
    description: "High-quality, cinematic digital ads",
    accent: true,
  },
  {
    title: "Corporates",
    description: "Media coverage, event documentation, and strategic collaboration",
    accent: true,
  },
  {
    title: "Our Originals",
    description: "In-house programs developed & produced by Limited",
    accent: true,
  },
];

const originals = [
  { image: fehaEhLogo, name: "فيها إيه؟!" },
  { image: belHawaLogo, name: "بالهوا" },
];

export function DigitalContentPage() {
  return (
    <div className="grid gap-14 pb-16 lg:pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <img
          src={heroImage}
          alt="Digital Content Production"
          className="h-[500px] w-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="mt-5 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              DIGITAL CONTENT
              <br />
              PRODUCTION
            </h1>
          </div>
        </div>
      </section>

      {/* Modern Content Section */}
      <section className="mp-card grid gap-0 overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft lg:grid-cols-[1fr_1fr]" data-animate="fade-up">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Modern <span className="text-mp-accent">Content</span>
            <br />
            Cinematic <span className="text-mp-accent">Execution</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted">
            We create original digital programs and help leading figures & brands build content that speaks with clarity, style, and intent.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={modernContentImage}
            alt="Modern Content"
            className="h-full min-h-96 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Content That Moves People Section */}
      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Content That <span className="text-mp-accent">Moves</span>
            <br />
            People and Brands <span className="text-mp-accent">Forward</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-mp-muted">
            Our work blends creativity with production discipline.
            <br />
            We support:
          </p>
        </div>

        {/* 4 Content Types Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {contentTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-black/20 p-6 sm:p-8 text-center mp-hover"
              data-hover="tilt"
            >
              <h3 className="font-display text-2xl text-mp-accent">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-mp-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* We Don't Just Produce Section */}
      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            We Don't Just Produce for <span className="text-mp-accent">Others</span>
            <br />
            We Create Our <span className="text-mp-accent">Own</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-base leading-8 text-mp-muted">
            We develop original digital programs that are available for commercial partnership. These originals reflect our creative vision and showcase the standard we apply to client work.
          </p>
        </div>

        {/* Originals */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2" data-animate-group>
          {originals.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-card transition duration-300 ease-out hover:-translate-y-0.5"
              data-animate-item
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Made to Fit Section */}
      <section className="mp-card p-8 sm:p-10 lg:p-12 border border-white/10 bg-black/20 rounded-[28px]" data-animate="fade-up">
        <div className="text-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Made to Fit Your Format,
            <br />
            <span className="text-mp-accent">Platform & Audience</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-base leading-8 text-mp-muted">
            We approach each project with clarity, aligning the production with your tone, goals, and audience. Our team handles everything from idea shaping to final delivery, or join your creative direction where needed.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12 border border-white/10 bg-black/20" data-animate="fade-up">
        <div className="text-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Need Content That Stands <span className="text-mp-accent">Out?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-mp-muted">
            Whether you're building a presence, telling a story, or launching a campaign we're here to help you do it with intention and quality.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent"
              to="/contact"
            >
              Let's Create Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
