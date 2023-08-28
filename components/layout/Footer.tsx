import React from "react";
import Contact from "./Contact";
import Nav from "./Nav";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container flex flex-col gap-6 pb-6">
        <Contact />
        <Nav />
      </div>
    </footer>
  );
};

export default Footer;
