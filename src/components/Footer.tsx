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
          <a className="hover:text-white" href="#services">
            Services
          </a>
          <a className="hover:text-white" href="#work">
            Work
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={ASSETS.socialIcons}
            alt="Social links"
            className="h-5 w-auto opacity-70"
            loading="lazy"
          />
          <div className="text-xs text-mp-faint">© {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}

