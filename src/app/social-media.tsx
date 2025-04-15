"use client";

import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import gsap from "gsap";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import "react-social-icons/mailto";

export const SocialMedia: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const icons = containerRef.current.querySelectorAll("a");

      // Initial animation
      gsap.fromTo(
        icons,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );

      // Hover animations
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.1,
            rotate: 5,
            duration: 0.3,
            ease: "back.out(1.7)",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: "power1.out",
          });
        });
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="will-change-transform">
      <SocialIcon
        className="will-change-transform"
        href="mailto:bartekperucki@gmail.com"
        network="email"
        bgColor="var(--color-lilac)"
      />
      <SocialIcon
        className="will-change-transform"
        url="https://www.linkedin.com/in/bart%C5%82omiej-perucki-319a0bb5/"
        bgColor="var(--color-ultra-violet)"
      />
      <SocialIcon
        className="will-change-transform"
        url="https://www.instagram.com/bartlomiejperucki/"
        bgColor="var(--color-african-violet)"
      />
    </section>
  );
};
