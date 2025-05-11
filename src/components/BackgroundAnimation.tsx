import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const BackgroundAnimation: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 0.4,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#6366f1', '#ec4899', '#3b82f6', '#8b5cf6'],
          },
          links: {
            color: '#6366f1',
            distance: 120,
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05,
            },
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1.2,
            straight: false,
            path: {
              enable: true,
              delay: {
                value: 0.1
              },
              options: {
                size: 5,
                draw: false,
                increment: 0.001
              }
            },
            trail: {
              enable: true,
              length: 3,
              fill: { color: '#00000010' },
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 0.4,
              opacity_min: 0.1,
              sync: false
            }
          },
          shape: {
            type: ['circle', 'triangle'],
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundAnimation;
