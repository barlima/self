import React from "react";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import "react-social-icons/mailto";

export const SocialMedia: React.FC = () => {
  return (
    <section>
      <SocialIcon
        href="mailto:bartekperucki@gmail.com"
        network="email"
        bgColor="#be95c4"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/bart%C5%82omiej-perucki-319a0bb5/"
        bgColor="#5e548e"
      />
      <SocialIcon
        url="https://www.instagram.com/bartlomiejperucki/"
        bgColor="#9f86c0"
      />
    </section>
  );
};