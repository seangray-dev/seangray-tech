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
  const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    href: href,
  };

  if (newTab) {
    linkProps.target = "_blank";
    linkProps.rel = "noopener noreferrer";
  }

  return (
    <a
      {...linkProps}
      className="font-bold uppercase underline decoration-primary underline-offset-8 transition-all duration-300 hover:bg-transparent hover:text-primary"
    >
      {children}
    </a>
  );
};

export default CustomLink;
