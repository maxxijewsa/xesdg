import { useEffect, useRef } from "react";

declare global {
  interface Window {
    particlesJS: (id: string, config: unknown) => void;
  }
}

export function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadParticles = async () => {
      // Load particles.js library
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS("particles", {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#9333ea",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: false,
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#9333ea",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
              },
            },
            retina_detect: true,
          });
        }
      };
      
      document.body.appendChild(script);
    };

    loadParticles();

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll(
        'script[src*="particles.min.js"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div
      id="particles"
      ref={containerRef}
      className="fixed inset-0"
      style={{ zIndex: 0, pointerEvents: "auto" }}
    />
  );
}
