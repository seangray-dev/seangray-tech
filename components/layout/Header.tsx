import CustomLink from "../utils/CustomLink";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container flex flex-col gap-5 md:gap-24">
      <Nav />
      <div className="flex animate-title flex-col gap-6 text-center">
        <h1 className="mb-4 text-balance text-2xl font-bold md:text-7xl">
          Nice to meet you! I&apos;m{" "}
          <span className="underline decoration-primary underline-offset-8">
            Sean Gray
          </span>
          .
        </h1>

        <div className="mx-auto flex max-w-[65ch] flex-col gap-4 text-pretty">
          <p className="mb-6 text-xl font-medium">
            Bridging creativity and technology to deliver exceptional web
            experiences.
          </p>
          <p>
            Based in Toronto, Canada, I&apos;m a full-stack web/software
            developer with over 3+ years of experience, specializing in React
            and Node.js.
          </p>
          <p>Actively seeking opportunities in Web and Software Development.</p>
        </div>
        <CustomLink href={"#contact"}>Contact Me</CustomLink>
      </div>
    </header>
  );
};

export default Header;
