import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const social_links = [
  {
    icon: <Linkedin size={30} />,
    href: "https://www.linkedin.com/in/seangray-dev/",
  },
  {
    icon: <Github size={30} />,
    href: "https://github.com/seangray-dev",
  },
];

const Nav = () => {
  return (
    <div className="md:flex md:justify-between">
      <div className="mb-5 text-center md:mb-0">
        <Link
          className="text-3xl font-bold transition-all duration-300 hover:text-primary"
          href={"/"}
        >
          seangray
        </Link>
      </div>
      <div className="flex justify-center gap-10">
        {social_links.map((link) => {
          return (
            <a
              className="text-2xl transition-all duration-300 hover:text-primary"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
