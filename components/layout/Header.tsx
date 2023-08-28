import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import CustomLink from "../utils/CustomLink";

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

const Header = () => {
  return (
    <header className="flex flex-col gap-5 md:gap-24">
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
      <div className="flex flex-col gap-6 text-center md:max-w-md md:gap-16 md:text-left xl:max-w-3xl">
        <h1 className="text-4xl font-bold md:text-7xl">
          Nice to meet you! I'm{" "}
          <span className="underline decoration-primary underline-offset-8">
            Sean Gray
          </span>
          .
        </h1>
        <p className="font-medium md:text-[18px]">
          Based in Canada, I'm a web/software developer and founder of{" "}
          <Link
            className="text-primary transition-all duration-300 hover:text-white hover:underline"
            href={"https://filelaunch.io"}
            target="_blank"
            rel="noopener noreferrer"
          >
            filelaunch.io
          </Link>
        </p>
        <CustomLink href={"#contact"} children={"Contact Me"} />
      </div>
    </header>
  );
};

export default Header;
