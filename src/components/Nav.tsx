import { useState } from "react";
import { ASSETS } from "../assetsManifest";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-mp-bg/65 backdrop-blur">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-10 xl:px-4">
        <div className="flex items-center gap-3">
          <div className="h-20 w-30 overflow-hidden">
            <img src={ASSETS.logo} alt="" className="h-10 w-50 object-cover my-6" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-base text-white/80 md:flex">
          <a className="hover:text-white" href="#services">
            Services
          </a>
          <a className="hover:text-white" href="#work">
            Work
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
          <a
            className="rounded-lg bg-mp-accent px-4 py-2 font-medium text-white shadow-soft transition hover:bg-white hover:text-mp-accent"
            href="#contact"
          >
            About Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="border-t border-white/5 bg-mp-bg/95 backdrop-blur px-4 py-6">
            <nav className="flex flex-col gap-4 text-sm text-white/80">
              <a
                className="hover:text-white transition-colors"
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                className="hover:text-white transition-colors"
                href="#work"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </a>
              <a
                className="hover:text-white transition-colors"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                className="rounded-lg bg-mp-accent px-4 py-2 font-medium text-white shadow-soft transition hover:bg-white hover:text-mp-accent text-center"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

