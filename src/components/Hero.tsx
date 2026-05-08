import { Link } from "react-router-dom";
import { ASSETS } from "../assetsManifest";

function AccentRule() {
  return (
    <div className="mx-auto mt-5 h-px w-[70%] bg-gradient-to-r from-transparent via-mp-accent/60 to-transparent" />
  );
}

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft h-[80vh] min-h-[500px]">
      <div className="absolute inset-0">
        <video
          src={ASSETS.heroVideoBg}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.72))]" /> */}
      </div>

      <div className="relative grid mx-auto max-w-4xl gap-8 px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 text-center">
        <div data-animate="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] sm:text-xs text-white/70">
            <span className="size-1.5 rounded-full bg-mp-accent" />
            Media, film, and music production
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            WHERE ART
            <br />
            MEETS{" "}
            <span className="text-mp-accent2 drop-shadow-[0_0_24px_rgba(178,63,34,0.25)]">
              PRECISION
            </span>
          </h1>
          <AccentRule />

          <p className="mt-6 max-w-2xl text-base leading-8 text-mp-muted sm:text-lg text-center mx-auto">
            Talent isn’t enough. Production is what turns ideas into icons. We build
            cinematic content that feels premium, modern, and intentional.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 justify-center">
           <Link className="inline-flex rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" to="/contact">
              Get Started
            </Link>
            <Link
              className="rounded-lg border border-white/12 bg-white/5 px-6 py-3 text-base font-medium text-white/85 transition hover:bg-white/10 text-center"
              to="/about"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

