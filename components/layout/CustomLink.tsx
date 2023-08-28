import Link from "next/link";
import React from "react";

const CustomLink = ({ children, href }) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="font-bold uppercase underline decoration-primary underline-offset-8 transition-all duration-300 hover:bg-transparent hover:text-primary"
    >
      {children}
    </Link>
  );
};

export default CustomLink;
