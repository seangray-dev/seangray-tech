import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import skillIcons from "@/data/skill-icons";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="container flex animate-fade-right flex-col">
      <div className="mb-10 flex items-center justify-between border-b border-primary pb-2">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>
      <div className="flex w-full flex-wrap items-center gap-2 md:gap-7">
        {skillIcons.map((icon, index) => (
          <div
            className="w-1/12 transition-all duration-300 md:w-fit md:hover:scale-110"
            key={index}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="hover:cursor-default">
                  <Image
                    src={icon["icon-path"]}
                    alt={icon.skill}
                    width={75}
                    height={75}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.skill}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
