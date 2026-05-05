import { ASSETS } from "../assetsManifest";

const services = [
  {
    title: "For Public Figures",
    body: "Your brand needs content that looks and feels cinematic.",
    img: ASSETS.forPublicFigurePhoto,
  },
  {
    title: "For Artists",
    body: "Visual identity, music promos, and campaigns that land.",
    img: ASSETS.forArtistPhoto,
  },
  {
    title: "For Companies",
    body: "Commercial-grade production for products and teams.",
    img: ASSETS.forCorporatePhoto,
  },
];

export function ServicesRow() {
  return (
    <section id="services" className="mt-10">
      <div className="grid gap-6 sm:grid-cols-3" data-animate-group>
        {services.map((s) => (
          <div
            key={s.title}
            className="mp-card mp-hover overflow-hidden p-6"
            data-hover="tilt"
            data-animate-item
          >
            <div className="-mx-6 -mt-6 mb-4 overflow-hidden border-b border-white/10">
              <img
                src={s.img}
                alt=""
                className="h-80 w-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
            <div className="font-display text-3xl text-mp-accent2">{s.title}</div>
            <div className="mt-4 text-base leading-7 text-mp-muted">{s.body}</div>
            <div className="mt-6 h-px w-full bg-white/10" />
            <div className="mt-4 text-sm text-mp-faint">
              Production • Direction • Post
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <a
          className="rounded-lg bg-mp-accent px-6 py-2.5 text-lg font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent"
          href="#work"
          data-animate="fade-up"
        >
          About Us
        </a>
      </div>
    </section>
  );
}

