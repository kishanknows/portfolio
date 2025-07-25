"use client";
import React, { useRef, useEffect } from "react";
import InfoCard from "./InfoCard";

interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  stars?: number;
  [key: string]: any;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let animationId: number;
    let scrollAmount = 0;
    const speed = 1; // px per frame
    function animate() {
      if (!carousel) return;
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        carousel.scrollLeft = scrollAmount;
        scrollAmount += speed;
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-x-hidden whitespace-nowrap py-4 relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, #fff 10%, #fff 90%, transparent 100%)",
      }}
    >
      <div className="inline-flex gap-8">
        {projects.concat(projects).map((project, idx) => (
          <a
            key={project.name + idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <InfoCard
              content={
                <div style={{ minWidth: 320, maxWidth: 340 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      marginBottom: 4,
                    }}
                  >
                    {project.name}
                  </div>
                  <div style={{ fontSize: "1rem", marginBottom: 6 }}>
                    {project.description}
                  </div>
                  <div style={{ fontSize: "0.95rem", marginBottom: 6 }}>
                    <span style={{ color: "#c084fc" }}>
                      {project.tech.join(", ")}
                    </span>
                  </div>
                  {project.stars && (
                    <div style={{ fontSize: "0.9rem", color: "#facc15" }}>
                      ★ {project.stars} stars
                    </div>
                  )}
                </div>
              }
            />
          </a>
        ))}
      </div>
    </div>
  );
}
