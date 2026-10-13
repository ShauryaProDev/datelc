import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".hero-text",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        );

      gsap.to(".hero-gradient", {
        y: 25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".hero-btn").forEach((button) => {
        const el = button;

        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            scale: 1.05,
            duration: 0.2,
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            scale: 1,
            duration: 0.2,
          });
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative flex h-[calc(100vh-250px)] w-full flex-col items-center justify-center overflow-hidden px-6 py-10 text-center"
    >
      <div className="hero-gradient absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />

      <h1 className="hero-title geist-title relative z-10 max-w-4xl text-5xl leading-tight tracking-tight text-zinc-900 md:text-6xl">
        Fast and Accurate Date Calculations for Everyday Use
      </h1>

      <p className="hero-text geist-body relative z-10 mt-4 max-w-2xl text-md leading-7 text-zinc-500 md:text-base">
        Calculate time gaps, future dates, countdowns, and durations with a
        clean and professional interface.
      </p>

      <div className="hero-buttons relative z-10 mt-8 flex items-center gap-4">
        <Link to="/tools">
          <button className="hero-btn geist-body cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-md text-white transition-colors duration-300 hover:bg-blue-700">
            Start Calculating
          </button>
        </Link>

        <button className="hero-btn geist-body cursor-pointer rounded-xl bg-zinc-100 px-6 py-3 text-md text-zinc-700 transition-colors duration-300 hover:bg-zinc-200">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
