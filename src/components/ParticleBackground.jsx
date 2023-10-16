// Particle.js
import React, { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position of the window
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Define a threshold (e.g., 100 pixels from the top) to determine if you're in the top section
      const threshold = 150;

      // Update the visibility state based on the scroll position
      setIsVisible(scrollY <= threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: [
          "#2EB67D",
          "#ECB22E",
          "#E01E5B",
          "#36C5F0",
          "#4a4e4d",
          "#0e9aa7 ",
          "#3da4ab",
          " #f6cd61",
          " #fe8a71",
        ],
      },
      shape: {
        type: ["circle"],
      },
      opacity: {
        value: 0.9,
      },
      size: {
        value: { min: 1, max: 12 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
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
            opacity: 1,
          },
        },
        push: {
          quantity: 5,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return isVisible ? (
    <Particles
      options={options}
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "90%",
        maxHeight: "90%",
      }}
    />
  ) : null;
};

export default ParticleBackground;
