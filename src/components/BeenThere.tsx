import { ASSETS } from "../assetsManifest";

export function BeenThere() {
  return (
    <section id="work" className="mt-12">
      <div className="mp-card overflow-hidden" data-animate="fade-up">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(178,63,34,0.16),transparent_54%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_55%)]" />
            <div className="relative">
              <div className="text-xs sm:text-sm lg:text-lg  text-mp-faint">We've been there</div>
              <h3 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-white/90">
                It&apos;s easy to <span className="text-mp-accent">have</span>
                <br />
                a brilliant idea
              </h3>
              <p className="mt-4 text-base leading-7 text-mp-muted">
                The world needs to hear it—whether you&apos;re a rising artist, or a company ready to scale.
                We build content that gets it and delivers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-animate-group>
                {["Creative direction", "Production kits", "Post production", "Sound design"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs sm:text-sm text-white/70"
                    data-animate-item
                    data-hover="tilt"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 lg:border-l lg:border-t-0">
            <img
              src={ASSETS.weHaveBeenThere}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

