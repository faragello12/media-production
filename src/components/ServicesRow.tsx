import { ASSETS } from "../assetsManifest";

const services = [
  {
    title: "For Artists",
    body: "Your voice deserves more than a bedroom mix.",
    img: ASSETS.forArtistPhoto,
  },
  {
    title: "For Public Figures",
    body: "Your brand needs content that looks and feels cinematic.",
    img: ASSETS.forPublicFigurePhoto,
  },
  {
    title: "For Corporates",
    body: "Your message needs more than stock footage.",
    img: ASSETS.forCorporatePhoto,
  },
];

export function ServicesRow() {
  return (
    <section id="services" className="mt-10">
      <div className="mp-card border border-white/10 bg-white/5 p-6 sm:p-10" data-animate-group>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-[-0.02em] text-white">
            Are you letting your <span className="text-mp-accent">vision</span>
            <br className="hidden sm:block" /> stay hidden?
          </p>
        </div>
        <div className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-[28px] border border-white/10 bg-black/20 p-6 text-center shadow-card transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20"
              data-hover="tilt"
              data-animate-item
            >
              <div className="mb-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/20">
                <img
                  src={s.img}
                  alt={s.title}
                  className="aspect-square h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-mp-accent2">{s.title}</h3>
              <p className="mt-4 text-base leading-7 text-mp-muted">{s.body}</p>
              <div className="mt-6 h-px w-full bg-white/10" />
              <p className="mt-4 text-sm text-mp-faint">Production • Direction • Post</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-animate="fade-up">
          <a
            className="rounded-lg bg-mp-accent px-6 py-2.5 text-lg font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent"
            href="about"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}

