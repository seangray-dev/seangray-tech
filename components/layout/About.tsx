import AboutImage from "@/public/assets/images/about.jpeg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="container animate-fade-left">
      <h2 className="mb-10 border-b border-primary pb-2 text-4xl font-bold">
        About
      </h2>
      <div className="flex flex-col-reverse items-center gap-10 md:grid md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p>
            At the heart of my work lies a fusion of music and technology,
            sparked by my early days as a mixing engineer in Toronto&#39;s music
            scene. I found my rhythm at{" "}
            <Link
              target="_blank"
              className="underline transition-all duration-300 hover:text-primary"
              href={"https://www.theorangelounge.com/"}
            >
              The Orange Lounge Recording Studio
            </Link>
            , where I combined my creative flair with technical expertise.
          </p>
          <p>
            My journey took an exciting turn when I embraced the world of
            automation and scripting, guided by{" "}
            <Link
              target="_blank"
              className="underline transition-all duration-300 hover:text-primary"
              href={"https://chrisgrahamcoaching.com/"}
            >
              Chris Graham
            </Link>{" "}
            of{" "}
            <Link
              target="_blank"
              className="underline transition-all duration-300 hover:text-primary"
              href={"https://6figurecreative.com/podcast/"}
            >
              &#39;6 Figure Creative Podcast&#39;
            </Link>
            . This newfound passion for innovation led me to venturing into the
            groundbreaking field of AI, blockchain and Web3 technologies.
          </p>
          <p>
            When I&apos;m not immersed in developing, you&apos;ll often find me
            at the gym. I find That lifting weights and training for marathons
            are my favourite way of staying energized and focused. I&apos;m a
            firm believer in the synergy between physical fitness and mental
            acuity, and I find that pushing my limits in the gym fuels my
            creativity and endurance in both my professional and personal
            pursuits.
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            className="h-64 w-64 rounded-full object-cover md:h-[350px] md:w-[350px]"
            src={AboutImage}
            width={350}
            height={350}
            alt="Sean outside near lake"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
