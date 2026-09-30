import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="mp-card grid min-h-[60vh] place-items-center rounded-[28px] p-8 text-center sm:p-10 lg:p-12">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-mp-faint">404</div>
        <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
          Page Not <span className="text-mp-accent">Found</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-mp-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            className="rounded-lg bg-mp-accent px-8 py-3 text-base font-medium text-white shadow-soft transition hover:bg-mp-accent2 hover:text-mp-accent"
            to="/"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
