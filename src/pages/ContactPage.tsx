import { SectionHeading } from "../components/SectionHeading";

const details = [
  { label: "Email", value: "hello@mediaproduction.com" },
  { label: "Phone", value: "+1 800 123 4567" },
  { label: "Location", value: "Los Angeles, CA" },
];

export function ContactPage() {
  return (
    <div className="grid gap-14 pb-16 pt-10 lg:pb-20">
      <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(178,63,34,0.14),transparent_48%),radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-14">
          <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">Contact</div>
          <h1 className="mt-6 font-display text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Let’s talk about your next production.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mp-muted sm:text-lg">
            Share your project details and we’ll reply with a tailored plan that matches your ambition.
          </p>
        </div>
      </section>

      <section className="mp-card overflow-hidden" data-animate="fade-up">
        <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Get in touch"
              title="Tell us about the work you want to create."
              description="We respond quickly with a production estimate, timeline, and next steps."
            />
            <form className="mt-10 grid gap-6">
              <label className="grid gap-2 text-sm text-mp-faint">
                Name
                <input className="h-12 rounded-lg border border-white/10 bg-black/25 px-3 text-sm text-white/90 outline-none ring-0 placeholder:text-white/30 focus:border-mp-accent/70" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm text-mp-faint">
                Email
                <input className="h-12 rounded-lg border border-white/10 bg-black/25 px-3 text-sm text-white/90 outline-none ring-0 placeholder:text-white/30 focus:border-mp-accent/70" placeholder="you@company.com" />
              </label>
              <label className="grid gap-2 text-sm text-mp-faint">
                Project details
                <textarea className="min-h-[140px] resize-none rounded-lg border border-white/10 bg-black/25 px-3 py-3 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-mp-accent/70" placeholder="Share your creative goals, timeline, and format." />
              </label>
              <button className="w-full rounded-lg bg-mp-accent px-6 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent">
                Send Message
              </button>
            </form>
          </div>
          <div className="border-t border-white/10 lg:border-l lg:border-t-0 p-8 sm:p-10">
            <SectionHeading eyebrow="Details" title="How to reach our team." />
            <div className="mt-8 space-y-4">
              {details.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-black/15 p-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">{item.label}</div>
                  <div className="mt-2 text-lg text-white">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
              <div className="font-display text-3xl text-white">Response in 24–48 hours</div>
              <p className="mt-4 text-base leading-8 text-mp-muted">
                Most briefs receive a thoughtful response within two business days. If your request is urgent, include that in the message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mp-card rounded-[28px] p-8 sm:p-10 lg:p-12" data-animate="fade-up">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="font-display text-4xl text-white">Ready to make something memorable?</div>
            <p className="mt-4 max-w-3xl text-base leading-8 text-mp-muted">
              We help artists and brands move toward a release with confidence, clarity, and cinematic production. 
            </p>
          </div>
          <div className="flex justify-center">
            <a className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent" href="mailto:hello@mediaproduction.com">
              Email the Studio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
