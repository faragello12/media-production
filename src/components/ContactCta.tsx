export function ContactCta() {
  return (
    <section id="contact" className="mt-12">
      <div className="mp-card overflow-hidden" data-animate="fade-up">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,122,69,0.16),transparent_52%),radial-gradient(circle_at_80%_70%,rgba(194,90,44,0.18),transparent_56%)]" />
            <div className="relative">
              <div className="font-display text-3xl sm:text-4xl text-white/90">
                Ready to bring
                <br />
                your vision to{" "}
                <span className="text-mp-accent2 drop-shadow-[0_0_18px_rgba(255,122,69,0.25)]">
                  life
                </span>
                ?
              </div>
              <p className="mt-4 max-w-xl text-base leading-8 text-mp-muted">
                Share a few details and we’ll get back with a production plan and a
                timeline that fits your goals.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1 text-xs sm:text-sm text-mp-faint">
                  Name
                  <input
                    className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-sm text-white/90 outline-none ring-0 placeholder:text-white/30 focus:border-mp-accent/70"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-1 text-xs sm:text-sm text-mp-faint">
                  Email
                  <input
                    className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-sm text-white/90 outline-none ring-0 placeholder:text-white/30 focus:border-mp-accent/70"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="grid gap-1 text-xs text-mp-faint sm:col-span-2">
                  Message
                  <textarea
                    className="min-h-[110px] resize-none rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm sm:text-base text-white/90 outline-none placeholder:text-white/30 focus:border-mp-accent/70"
                    placeholder="Tell us what you want to create…"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="rounded-lg bg-mp-accent px-6 py-2.5 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent">
                  Send
                </button>
                <div className="text-xs text-mp-faint">
                  Or email{" "}
                  <span className="text-white/80">hello@mediaproduction.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 lg:border-l lg:border-t-0">
            <div className="h-full p-7 sm:p-10">
              <div className="font-display text-2xl text-white/90">
                What you’ll get
              </div>
              <div className="mt-2 text-sm text-mp-muted">
                A tight process from brief to delivery.
              </div>

              <ul className="mt-6 grid gap-3">
                {[
                  "Creative brief + references",
                  "Shot list + schedule",
                  "Production + on-set direction",
                  "Edit + color grade + audio polish",
                  "Export packages for all platforms",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="mt-1 size-2 rounded-full bg-mp-accent2" />
                    <span className="text-sm text-white/80">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="text-xs sm:text-sm text-mp-faint">Typical turnaround</div>
                <div className="mt-1 font-display text-3xl sm:text-4xl text-white/90">
                  7–14 days
                </div>
                <div className="mt-2 text-sm text-mp-muted">
                  Depending on scope and revisions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

