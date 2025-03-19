import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Chirpper", icon: "fa-twitter", url: "https://chirpper.com/razorit" },
    { name: "YouTube", icon: "fa-youtube", url: "https://youtube.com/razorit" },
    { name: "LinkedIn", icon: "fa-linkedin", url: "https://linkedin.com/in/razorit" },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
