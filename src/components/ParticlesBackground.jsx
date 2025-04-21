import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Changed to transparent so it doesn't cover content
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#ffffff", "#00E5FF", "#88d8ff", "#aaaaaa"],
          },
          links: {
            color: "#00E5FF",
            distance: 150,
            enable: true,
            opacity: 0.2, // Reduced opacity
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3, // Slower speed
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increased area to reduce particle density
            },
            value: 200, // Reduced number of particles
          },
          opacity: {
            value: { min: 0.1, max: 0.4 }, // Lower opacity
            animation: {
              enable: true,
              speed: 0.4, // Slower animation
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 }, // Smaller particles
            animation: {
              enable: true,
              speed: 0.5, // Slower animation
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.3,
              },
            },
            push: {
              quantity: 4, // Reduced from 4
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
} 