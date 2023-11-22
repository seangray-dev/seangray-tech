import Link from "next/link";
import React from "react";
import CustomLink from "../utils/CustomLink";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container flex flex-col gap-5 md:gap-24">
      <Nav />
      <div className="flex animate-title flex-col gap-6 text-center md:max-w-md md:gap-16 md:text-left xl:max-w-3xl">
        <h1 className="mb-4 text-2xl font-bold md:text-7xl">
          Nice to meet you! I&apos;m{" "}
          <span className="underline decoration-primary underline-offset-8">
            Sean Gray
          </span>
          .
        </h1>

        <div className="flex flex-col gap-4 font-medium md:text-[18px]">
          <h2 className="mb-6 text-xl font-medium">
            Bridging creativity and technology to deliver exceptional web
            experiences.
          </h2>
          <p>
            Based in Toronto, Canada, I&apos;m a full-stack web/software
            developer with over 2 years of experience, specializing in React and
            Node.js.
          </p>
          <p>Actively seeking opportunities in Web and Software Development.</p>
        </div>
        <CustomLink href={"#contact"}>Contact Me</CustomLink>
      </div>
    </header>
  );
};

export default Header;
