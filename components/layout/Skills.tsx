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
    <section className="container flex flex-col gap-6">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="flex flex-wrap items-center gap-6">
        {skillIcons.map((icon, index) => (
          <div
            className="transition-all duration-300 hover:scale-110"
            key={index}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
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
