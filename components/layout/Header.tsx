import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import CustomLink from "../utils/CustomLink";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container flex flex-col gap-5 md:gap-24">
      <Nav />
      <div className="animate-title flex flex-col gap-6 text-center md:max-w-md md:gap-16 md:text-left xl:max-w-3xl">
        <h1 className="text-4xl font-bold md:text-7xl">
          Nice to meet you! I'm{" "}
          <span className="underline decoration-primary underline-offset-8">
            Sean Gray
          </span>
          .
        </h1>
        <p className="font-medium md:text-[18px]">
          Based in Canada, I'm a fullstack web/software developer and founder of{" "}
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
