import { ASSETS } from "../assetsManifest";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/25">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-10 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 xl:px-16">
        <div>
          <img
            src={ASSETS.logo}
            alt="Limited Media Production"
            className="h-12 w-auto opacity-85 my-4"
            loading="lazy"
          />
          <div className="mt-1 text-xs text-mp-faint padding-left-10">
            Made for artists who want more than just a reel.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="hover:text-white" href="about">
            About Us
          </a>
          <a className="hover:text-white" href="film">
            Film
          </a>
          <a className="hover:text-white" href="digital">
            Digital
          </a>
          <a className="hover:text-white" href="music">
            Music
          </a>
          <a className="hover:text-white" href="contact">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/limitedmediachannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-mp-accent transition"
            >
              Instagram
            </a>
            <span className="text-white/70">•</span>
            <a
              href="https://www.youtube.com/@limitedmediachannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-mp-accent transition"
            >
              YouTube
            </a>
            <span className="text-white/70">•</span>
            <a
              href="https://www.tiktok.com/@limitedmediachannel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-mp-accent transition"
            >
              TikTok
            </a>
            <span className="text-white/70">•</span>
            <a
              href="https://www.linkedin.com/company/limited-media-production-company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-mp-accent transition"
            >
              LinkedIn
            </a>
          </div>
          <div className="text-xs text-mp-faint">© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}

