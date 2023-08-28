import data from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomLink from "./CustomLink";

const Projects = () => {
  return (
    <section>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Projects</h2>
        <CustomLink href={"#contact"} children={"Contact Me"} />
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-[60px] md:gap-x-5">
        {data.map((project, index) => {
          const { title, imgUrl, stack, link, sourceCode } = project;

          return (
            <div className="flex h-full flex-col gap-5" key={index}>
              <Image
                className="max-h-[250px] object-cover object-top lg:max-h-[400px]"
                src={imgUrl}
                alt={title}
                width={540}
                height={400}
              />

              <h3 className="text-xl font-bold uppercase">{title}</h3>
              <p className="mb-2 flex flex-wrap gap-2">
                {stack.map((item, index) => (
                  <span
                    className="cursor-default rounded-md bg-secondary px-2 py-1 font-medium text-primary transition-all duration-300 hover:bg-white"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </p>
              <div className="mt-auto flex gap-8">
                <CustomLink href={link} children={"View Project"} />
                <CustomLink href={sourceCode} children={"View Code"} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
