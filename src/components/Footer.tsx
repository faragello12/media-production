import { Link } from "react-router-dom";
import { ASSETS } from "../assetsManifest";
import { SOCIAL_LINKS } from "../socialLinks";

const pageLinks = [
  { label: "About Us", to: "/about" },
  { label: "Film", to: "/film" },
  { label: "Digital", to: "/digital" },
  { label: "Music", to: "/music" },
  { label: "Contact", to: "/contact" },
];


export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/25">
      <div className="mx-auto flex max-w-[1700px] flex-col gap-6 px-5 py-10 text-sm text-white/70 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-4">
        <div>
          <Link to="/" className="inline-block">
            <img
              src={ASSETS.logo}
              alt="Limited Media Production"
              className="h-12 w-auto opacity-85"
              loading="lazy"
            />
          </Link>
          <div className="mt-3 text-xs text-mp-faint">
            Made for artists who want more than just a reel.
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {pageLinks.map((l) => (
            <Link key={l.to} className="hover:text-white" to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {SOCIAL_LINKS.map((s, i) => (
              <span key={s.href} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">•</span>}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-mp-accent"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </div>
          <div className="text-xs text-mp-faint">
            © {new Date().getFullYear()} Limited Media Production
          </div>
        </div>
      </div>
    </footer>
  );
}
