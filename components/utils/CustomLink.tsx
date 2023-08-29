import Link from "next/link";
import React, { ReactNode } from "react";

interface CustomLinkProps {
  children: ReactNode;
  href: string;
  newTab?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  href,
  newTab = false,
}) => {
  const linkProps = newTab
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        href,
      };

  return (
    <Link {...linkProps}>
      <a className="font-bold uppercase underline decoration-primary underline-offset-8 transition-all duration-300 hover:bg-transparent hover:text-primary">
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
