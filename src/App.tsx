import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { ServicesRow } from "./components/ServicesRow";
import { BeenThere } from "./components/BeenThere";
import { MoreThanStudio } from "./components/MoreThanStudio";
import { TalentSection } from "./components/TalentSection";
import { WhatWeDo } from "./components/WhatWeDo";
import { ContactCta } from "./components/ContactCta";
import { Footer } from "./components/Footer";
import { ASSETS } from "./assetsManifest";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    [],
  );

  useEffect(() => {
    if (prefersReducedMotion) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context((self) => {
      // Scroll reveals
      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
            },
          },
        );
      });

      // Stagger groups
      gsap.utils.toArray<HTMLElement>("[data-animate-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-animate-item]");
        if (!items.length) return;
        gsap.fromTo(
          items,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 78%" },
          },
        );
      });

      // Subtle hover tilt for cards
      gsap.utils.toArray<HTMLElement>("[data-hover='tilt']").forEach((el) => {
        const setX = gsap.quickTo(el, "rotationY", { duration: 0.35, ease: "power3.out" });
        const setY = gsap.quickTo(el, "rotationX", { duration: 0.35, ease: "power3.out" });
        const setZ = gsap.quickTo(el, "z", { duration: 0.35, ease: "power3.out" });
        const setSX = gsap.quickTo(el, "scaleX", { duration: 0.35, ease: "power3.out" });
        const setSY = gsap.quickTo(el, "scaleY", { duration: 0.35, ease: "power3.out" });

        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          setX((px - 0.5) * 6);
          setY(-(py - 0.5) * 6);
        };
        const onEnter = () => {
          setZ(20);
          setSX(1.01);
          setSY(1.01);
        };
        const onLeave = () => {
          setX(0);
          setY(0);
          setZ(0);
          setSX(1);
          setSY(1);
        };

        el.style.transformStyle = "preserve-3d";
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerenter", onEnter);
        el.addEventListener("pointerleave", onLeave);

        ScrollTrigger.addEventListener("refreshInit", onLeave);

        self.add(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerenter", onEnter);
          el.removeEventListener("pointerleave", onLeave);
          ScrollTrigger.removeEventListener("refreshInit", onLeave);
        });
      });
    }, root);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      className="min-h-dvh text-mp-ink selection:bg-mp-accent/40 selection:text-white"
      // style={{
      //   backgroundImage: `url(${ASSETS.background2})`,
      //   backgroundSize: "100% 100%",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center",
      //   backgroundAttachment: "fixed",
      // }}
    >
       <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-95"
        
         style={{ background: "radial-gradient(circle at 20% 20%, #b23f221a, transparent 54%), radial-gradient(circle at 70% 70%, #ffffff0d, transparent 55%)" }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 mp-noise opacity-70" />
     

      <Nav />
      <main className="mx-auto w-full max-w-[1700px] px-5 pb-20 pt-10 sm:px-8 lg:px-10 xl:px-4">
        <Hero />
        <TalentSection />
        <ServicesRow />
        <BeenThere />
        <MoreThanStudio />
        <WhatWeDo />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

