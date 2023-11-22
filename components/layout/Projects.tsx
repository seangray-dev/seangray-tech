import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "@/data/portfolio";
import Image from "next/image";
import React from "react";
import CustomLink from "../utils/CustomLink";

const Projects = () => {
  return (
    <section className="container animate-fade-left">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Projects</h2>
        <CustomLink className="hidden md:block" href={"#contact"}>
          Contact Me
        </CustomLink>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-[60px] md:gap-x-5">
        {data.map((project, index) => {
          const { title, description, imgUrl, stack, link, sourceCode } =
            project;

          return (
            <Card
              className="flex h-full flex-col gap-5 transition-all duration-300 hover:scale-[102%]"
              key={index}
            >
              <CardHeader className="flex flex-col gap-5">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Image
                  className="h-auto max-h-[250px] w-full object-cover object-top lg:max-h-[400px]"
                  src={imgUrl}
                  alt={title}
                  width={540}
                  height={400}
                />
              </CardHeader>
              <CardContent>
                <p className="flex flex-wrap gap-2">
                  {stack.map((item, index) => (
                    <Badge
                      key={index}
                      className="cursor-default text-sm text-primary transition-all duration-300 hover:bg-white"
                      variant="secondary"
                    >
                      {item}
                    </Badge>
                  ))}
                </p>
              </CardContent>
              <CardFooter className="mt-auto flex gap-8">
                <CustomLink href={link} newTab>
                  Live Site
                </CustomLink>
                <CustomLink href={sourceCode} newTab>
                  View Code
                </CustomLink>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
