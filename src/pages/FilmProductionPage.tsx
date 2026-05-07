import { Link } from "react-router-dom";
import heroImage from "../assets/film assets/Rectangle 2.png";
import heroImage2 from "../assets/film assets/redd-francisco-ZfDwNy84iXQ-unsplash 1.png";
import workWithImage from "../assets/film assets/brands-people-br2HgQuvq6I-unsplash 1.png";

export function FilmProductionPage() {
  return (
    <div className="grid gap-14 pb-16 lg:pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <img
          src={heroImage}
          alt="Film Production"
          className="h-[500px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="mt-5 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              FILM PRODUCTION
            </h1>
          </div>
        </div>
      </section>

      {/* Visual Stories Section */}
      <section className="mp-card grid gap-0 overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft lg:grid-cols-[1fr_1fr]" data-animate="fade-up">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Visual Stories, Professionally <span className="text-mp-accent">Told</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted sm:text-lg">
            We help bring films, branded stories, and creative concepts to life with precision, clarity, and creativity.
          </p>
        </div>
        <div className="relative overflow-hidden order-1 lg:order-2">
          <img
            src={heroImage2}
            alt="Visual Stories"
            className="h-full min-h-96 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* What We Do - End-to-End Film Production */}
      <section className="mp-card p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">What We Do</div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            End-to-End <span className="text-mp-accent">Film Production</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <p className="text-base leading-8 text-mp-muted mb-8">
              Whether it's a short film, brand documentary, or creative campaign our team handles the full production process from development to final delivery.
            </p>
          </div>

          {/* Film Production Flow */}
          <div className="relative space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-mp-accent to-transparent" />
              <div>
                <div className="text-mp-accent font-display text-lg">Concept Development</div>
                <p className="text-sm text-mp-muted mt-2">Story, treatment, and visual direction</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-mp-accent to-transparent" />
              <div>
                <div className="text-mp-accent font-display text-lg">Pre-Production & Casting</div>
                <p className="text-sm text-mp-muted mt-2">Casting, location scouting, and crew assembly</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-1 h-16 bg-gradient-to-b from-mp-accent to-transparent" />
              <div>
                <div className="text-mp-accent font-display text-lg">On-Set Production</div>
                <p className="text-sm text-mp-muted mt-2">Direction, cinematography, and live capture</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-1 h-8 bg-mp-accent" />
              <div>
                <div className="text-mp-accent font-display text-lg">Post-Production & Editing</div>
                <p className="text-sm text-mp-muted mt-2">Edit, color grade, sound design, final delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="mp-card grid gap-0 overflow-hidden rounded-[28px] border border-white/10 bg-black/20 shadow-soft lg:grid-cols-[1fr_1fr]" data-animate="fade-up">
        <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Who We Work With</div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
            For Directors, <span className="text-mp-accent">Agencies</span>
            <br />
            & Vision-Led Teams
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted">
            We partner with filmmakers, production houses, creative directors, and agencies who need reliable execution and thoughtful collaboration.
          </p>
          <p className="mt-4 text-base leading-8 text-mp-muted">
            Whether you're developing a scripted short, a branded doc, or a narrative piece. We integrate smoothly into your workflow to help you get it done right.
          </p>
        </div>
        <div className="relative overflow-hidden min-h-96">
          <img
            src={workWithImage}
            alt="Who We Work With"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12 border border-white/10 bg-black/20" data-animate="fade-up">
        <div className="text-center">
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
            Have a Project in <span className="text-mp-accent">Mind?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-mp-muted">
            Let's talk about how we can bring it to the screen with the right team, tools, and timeline.
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
