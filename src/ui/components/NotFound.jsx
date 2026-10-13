import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function NotFound() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".error-code", {
        y: 80,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".error-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".error-text",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        )
        .from(
          ".error-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        );

      gsap.to(".floating-circle", {
        y: 25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".error-btn").forEach((button) => {
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
      className="relative flex min-h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden px-6"
    >
      <div className="floating-circle absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <h1 className="error-code geist-title text-[8rem] leading-none tracking-tight text-zinc-900 md:text-[10rem]">
          404
        </h1>

        <h2 className="error-title geist-title mt-2 text-3xl tracking-tight text-zinc-900 md:text-4xl">
          Page Not Found
        </h2>

        <p className="error-text geist-body mt-4 max-w-lg text-md leading-7 text-zinc-500">
          The page you are looking for does not exist or may have been moved to
          another location.
        </p>

        <div className="error-buttons mt-8 flex items-center gap-4">
          <Link to="/home">
            <button className="error-btn geist-body cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-md text-white transition-colors duration-300 hover:bg-blue-700">
              Back Home
            </button>
          </Link>

          <Link to="/tools">
            <button className="error-btn geist-body cursor-pointer rounded-xl bg-zinc-100 px-6 py-3 text-md text-zinc-700 transition-colors duration-300 hover:bg-zinc-200">
              Open Tools
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
