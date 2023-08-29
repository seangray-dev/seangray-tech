import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  children: React.ReactNode;
  href: string;
  newTab?: boolean;
};

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  href,
  newTab = false,
}) => {
  const linkProps = {
    href: href,
  };

  if (newTab) {
    linkProps.target = "_blank";
    linkProps.rel = "noopener noreferrer";
  }

  return (
    <Link {...linkProps}>
      <span className="font-bold uppercase underline decoration-primary underline-offset-8 transition-all duration-300 hover:bg-transparent hover:text-primary">
        {children}
      </span>
    </Link>
  );
};

export default CustomLink;
