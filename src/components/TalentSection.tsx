import { ASSETS } from "../assetsManifest";

export function TalentSection() {
  return (
    <section className="mt-12">
      <div className="mp-card overflow-hidden" data-animate="fade-up">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="order-2 p-7 sm:p-10 lg:order-1">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-white/90">
              Talent isn&apos;t <span className="text-mp-accent">enough</span>
            </div>
            <p className="mt-4 text-base leading-8 text-mp-muted">
              Your Music Deserves Production That Matches Its Potential.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2" data-animate-group>
              {[
                { t: "Song Writing", d: "From idea to structure." },
                { t: "Mix & Master", d: "Clarity, depth, loudness." },
                { t: "Music Video", d: "Cinematic visuals." },
                { t: "Branding", d: "Identity that scales." },
              ].map((i) => (
                <div
                  key={i.t}
                  className="mp-card mp-hover p-4"
                  data-hover="tilt"
                  data-animate-item
                >
                  <div className="font-medium text-white/85">{i.t}</div>
                  <div className="mt-1 text-sm text-mp-faint">{i.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 border-b border-white/10 lg:order-2 lg:border-b-0 lg:border-l">
            <img
              src={ASSETS.talentSectionPhoto}
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

